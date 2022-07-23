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
  Flex,
  ModalCloseButton,
  Image,
} from '@chakra-ui/react'
import {ImCross} from 'react-icons/im'
import {useRouter} from 'next/router'
import {navigation, socialLinks} from '@/constants/index.constants'

const EMAIL = 'Fawazc91@gmail.com'

export default function MenuModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={true}
      size="full"
      motionPreset="slideInRight"
    >
      <ModalOverlay />
      <ModalContent
        w="100%"
        h="100%"
        px={['1px', '30px', '50px']}
        bgColor="carminePink.500"
        pos={'relative'}
      >
        <ModalHeader>
          <Flex>
            <Heading fontSize={'28px'} color="white">
              a.design
            </Heading>
            <ModalCloseButton color="white" size="20px" mt="17px" mr="10px" />
          </Flex>
        </ModalHeader>

        <ModalBody color="white">
          <Flex direction={'column'} columnGap={6} mt="41px">
            {navigation.map(ele => (
              <Link key={ele.label} href={ele.path} passHref>
                <Text
                  fontSize={'36px'}
                  cursor={'pointer'}
                  onClick={() => {
                    if (ele.path.includes('#')) onClose()
                  }}
                >
                  {ele.label}
                </Text>
              </Link>
            ))}
          </Flex>
          <Flex direction={'column'} columnGap={6} mt="320px">
            <Text fontSize={'36px'} cursor={'pointer'} mb="20px">
              Find me here
            </Text>
            {socialLinks.map(social => (
              <Link key={social.label} href={social.link} passHref>
                <Text
                  fontSize={'20px'}
                  cursor={'pointer'}
                  opacity={0.7}
                  mb="5px"
                >
                  {social.label}
                </Text>
              </Link>
            ))}
          </Flex>
        </ModalBody>

        <Image
          src="/assets/svg/menu-modal.svg"
          alt="memoji"
          position="absolute"
          bottom={0}
          right={0}
        />
      </ModalContent>
    </Modal>
  )
}
