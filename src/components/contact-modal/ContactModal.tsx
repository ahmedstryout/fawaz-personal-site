import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Heading,
  Text,
  Link,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import {ImCross} from 'react-icons/im'
import {useRouter} from 'next/router'

const EMAIL = 'Fawazc91@gmail.com'

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [active, setActive] = React.useState(false)
  const router = useRouter()
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={true}
      size="full"
      motionPreset="scale"
    >
      <ModalOverlay />
      <ModalContent w="100%" h="100%" px={['20px', '30px', '50px']} bg="black">
        <Icon
          as={ImCross}
          color={'#E44949'}
          boxSize={[6, 10]}
          _hover={{
            cursor: 'pointer',
          }}
          onClick={() => router.push({search: ''})}
          ml="auto"
          mt={['24px', '36px', '55px']}
        />
        <ModalBody
          display={'flex'}
          justifyContent="center"
          alignItems="center"
          color="white"
          flexDirection="column"
        >
          {active ? (
            <Popover isOpen={active} placement="right">
              <PopoverTrigger>
                <Image src="/assets/svg/contact-1.svg" alt="contact me" />
              </PopoverTrigger>
              <PopoverContent py="10px" width="280px">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Text fontSize={'22px'} color="black" textAlign="center">
                    Let&apos;s Connect!
                  </Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <Image src="/assets/svg/contact-2.svg" alt="contact me" />
          )}
          <Heading
            fontSize={['34px', '48px']}
            bg="linear-gradient(110.79deg, #EC6154 -11.2%, #ED8153 24%, #EFA651 64.38%, #F1C550 99.58%)"
            bgClip={'text'}
            mt="24px"
          >
            Got a Great Idea?
          </Heading>
          <Heading
            as="h2"
            fontSize={['48px', '68px', '98px']}
            letterSpacing="-0.03em"
            mb="14px"
          >
            Let&apos;s Talk
          </Heading>
          <Text
            opacity={0.7}
            fontSize={['16px', '20px', '22px']}
            maxW="800px"
            letterSpacing="-0.02em"
            align={'center'}
          >
            Ready to make something great? Whether it’s a website, brand
            identity, product prototype, or simply an idea ready to come to
            life. Let’s make a plan.{' '}
          </Text>
          <Link
            href={`mailto: ${EMAIL}`}
            fontSize={['16px', '22px', '28px']}
            border="2px solid white"
            w={['100%', '658px']}
            borderRadius={'62.5px'}
            textAlign="center"
            py="22px"
            mt={['30px', '38px']}
            bgColor={active ? 'black' : 'white'}
            color={active ? 'white' : 'black'}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            {EMAIL}
          </Link>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
