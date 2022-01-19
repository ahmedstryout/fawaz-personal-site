import Link from 'next/link'
import {useRouter} from 'next/router'
import {Flex, Heading, Icon, Text, useMediaQuery} from '@chakra-ui/react'
import {navigation} from 'constants/index.constants'
import {AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {
  const router = useRouter()
  const [isMobile] = useMediaQuery('(max-width:500px)')
  return (
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
        <Icon as={AiOutlineMenu} boxSize={'40px'} />
      ) : (
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
  )
}
