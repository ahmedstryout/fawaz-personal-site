import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Heading,
  Text,
  Link,
  Icon,
} from '@chakra-ui/react'
import {GrFormClose} from 'react-icons/gr'
import {useRouter} from 'next/router'

const EMAIL = 'Fawazc91@gmail.com'

export default function ContactModal({isOpen, onClose}: {isOpen; onClose}) {
  const router = useRouter()
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={true}
      size="full"
    >
      <ModalOverlay />
      <ModalContent w="100%" h="100%" bgColor={'black'}>
        <Icon
          as={GrFormClose}
          color={'red.500'}
          boxSize={12}
          onClick={() => router.push({search: ''})}
        />
        <ModalBody
          display={'flex'}
          justifyContent="center"
          alignItems="center"
          color="white"
          flexDirection="column"
        >
          <Heading fontSize={['98px']} letterSpacing="-0.03em">
            Let&apos;s Talk
          </Heading>
          <Text
            opacity={0.7}
            fontSize={['22px']}
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
            fontSize={['28px']}
            border="2px solid white"
            w="658px"
            borderRadius={'62.5px'}
            textAlign="center"
            py="22px"
            mt="38px"
          >
            {EMAIL}
          </Link>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
