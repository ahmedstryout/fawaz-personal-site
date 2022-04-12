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
      motionPreset="scale"
    >
      <ModalOverlay />
      <ModalContent
        w="100%"
        h="100%"
        px={['1px', '30px', '50px']}
        bgColor="carminePink.500"
      >
        <ModalHeader>
          <Flex>
            <Heading fontSize={'28px'} color="white">
              UI.joe
            </Heading>
            <ModalCloseButton color="white" />
          </Flex>
        </ModalHeader>

        <ModalBody color="white">
          <Flex direction={'column'} columnGap={6} mt="41px">
            {navigation.map(ele => (
              <Link key={ele.label} href={ele.path} passHref>
                <Text fontSize={'36px'} cursor={'pointer'}>
                  {ele.label}
                </Text>
              </Link>
            ))}
          </Flex>
          <Flex direction={'column'} columnGap={6} mt="320px">
            <Text fontSize={'36px'} cursor={'pointer'}>
              Find me here
            </Text>
            {socialLinks.map(social => (
              <Link key={social.label} href={social.link} passHref>
                <Text fontSize={'20px'} cursor={'pointer'} opacity={0.7}>
                  {social.label}
                </Text>
              </Link>
            ))}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
