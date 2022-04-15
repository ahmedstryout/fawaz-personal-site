import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Icon,
  useMediaQuery,
} from '@chakra-ui/react'
import {navigation, socialLinks} from 'constants/index.constants'
import {FaHeart} from 'react-icons/fa'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Footer() {
  const [isSmall] = useMediaQuery('max-width:460px')
  const router = useRouter()
  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      px={['20px', '20px', 28]}
      py={['20px', '20px', 12]}
      bg="black"
      color="white"
      position={'relative'}
      textAlign={['center', 'center', 'left']}
    >
      <Box w={['100%', '100%', '40%']} mb={[8, 8, 0]}>
        <Heading mb={8} fontSize={['38px', '38px', '52px']}>
          Got a great Idea? <br /> Let’s talk
        </Heading>
        <Button
          borderRadius={'50px'}
          px={16}
          color="black"
          size="lg"
          onClick={() => router.push({search: '?contact=true'})}
        >
          Hire me
        </Button>
      </Box>
      <Flex flexDir={'column'}>
        <Box mb={8}>
          <Heading as="h2" mb={4} fontSize={['26px', '26px', '32px']}>
            Find Me Here
          </Heading>
          <Flex
            columnGap={[2, 4, 6]}
            justifyContent={['center', 'center', 'flex-start']}
          >
            {socialLinks.map(link => (
              <a
                href={link.link}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <Text
                  fontSize={['20px', '20px', '24px']}
                  opacity={0.7}
                  cursor={'pointer'}
                >
                  {link.label}
                </Text>
              </a>
            ))}
          </Flex>
        </Box>
        <Box mb={8}>
          <Heading as="h2" mb={6} fontSize={['26px', '26px', '32px']}>
            Explore
          </Heading>
          <Flex
            columnGap={[2, 4, 6]}
            justifyContent={['center', 'center', 'flex-start']}
          >
            {navigation.map(link => (
              <Link key={link.label} href={link.path} passHref>
                <Text
                  fontSize={['20px', '20px', '24px']}
                  opacity={0.7}
                  cursor={'pointer'}
                >
                  {link.label}
                </Text>
              </Link>
            ))}
          </Flex>
        </Box>
      </Flex>
      {/* <Image
        position="absolute"
        right={0}
        src={isSmall ? '/assets/png/brand-sm.png' : '/assets/png/brand.png'}
        alt="UI Joe"
        h={['80px', 'auto']}
        w={['264px', 'auto']}
        bottom={0}
      /> */}
      <Text
        position="absolute"
        left={0}
        right={0}
        marginX={'auto'}
        bottom={2}
        textAlign="center"
        opacity={0.6}
      >
        Designed with <Icon as={FaHeart} fill="red" pt={1} /> by Fawaz
      </Text>
    </Flex>
  )
}
