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
          boxSize={[6, 12]}
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
          <Heading fontSize={['48px', '68px', '98px']} letterSpacing="-0.03em">
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
          >
            {EMAIL}
          </Link>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
