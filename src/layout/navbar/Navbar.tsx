import * as React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react'
import {navigation} from 'constants/index.constants'
// import {AiOutlineMenu} from 'react-icons/ai'
import ContactModal from '@/components/contact-modal/ContactModal'
import MenuModal from '../mobile/MenuModal'

export default function Navbar() {
  const router = useRouter()
  const [isMobile] = useMediaQuery('(max-width:500px)')
  const {
    isOpen: isContactMeOpen,
    onOpen: openContactMe,
    onClose: closeContactMe,
  } = useDisclosure()
  const {
    isOpen: isMobileMenuOpen,
    onOpen: openMobileMenu,
    onClose: closeMobileMenu,
  } = useDisclosure()

  const openContactModal = router.query.contact

  console.log(openContactModal, 'query')

  React.useEffect(() => {
    if (Boolean(openContactModal)) {
      openContactMe()
    } else {
      closeContactMe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openContactModal])

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent={'space-between'}
        px={['20px', 28]}
        py={12}
      >
        <Heading fontSize={'28px'} onClick={() => router.push('/')}>
          UI.joe
        </Heading>
        {isMobile ? (
          <Text
            fontSize={'20px'}
            cursor={'pointer'}
            onClick={() => openMobileMenu()}
          >
            menu.
          </Text>
        ) : (
          // <Icon as={AiOutlineMenu} boxSize={'40px'} />
          <Flex columnGap={6}>
            {navigation.map(ele => (
              <Link key={ele.label} href={ele.path} passHref>
                <Text fontSize={'20px'} cursor={'pointer'}>
                  {ele.label}
                </Text>
              </Link>
            ))}
          </Flex>
        )}
      </Flex>

      <ContactModal isOpen={isContactMeOpen} onClose={closeContactMe} />
      <MenuModal isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}
