import React from 'react'
import {Box, Button, Flex, Heading, Text, Image, Icon} from '@chakra-ui/react'
import {navigation, socialLinks} from 'constants/index.constants'
import {FaHeart} from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <Flex
      px={28}
      py={12}
      bg="black"
      color="white"
      position={'relative'}
      mt="50vh"
    >
      <Box w={'40%'}>
        <Heading mb={8} fontSize={'52px'}>
          Got a great Idea? <br /> Let’s talk
        </Heading>
        <Button borderRadius={'50px'} px={16} color="black" size="lg">
          Hire me
        </Button>
      </Box>
      <Flex flexDir={'column'}>
        <Box mb={8}>
          <Heading as="h2" mb={4}>
            Find me here
          </Heading>
          <Flex columnGap={6}>
            {socialLinks.map(link => (
              <Text key={link.label} fontSize={'24px'} opacity={0.7}>
                {link.label}
              </Text>
            ))}
          </Flex>
        </Box>
        <Box mb={8}>
          <Heading as="h2" mb={6}>
            Explore
          </Heading>
          <Flex columnGap={6}>
            {navigation.map(link => (
              <Link key={link.label} href={link.path} passHref>
                <Text fontSize={'24px'} opacity={0.7}>
                  {link.label}
                </Text>
              </Link>
            ))}
          </Flex>
        </Box>
      </Flex>
      <Image
        position="absolute"
        right={0}
        src={'/assets/png/brand.png'}
        alt="UI Joe"
        bottom={0}
      />
      <Text position="absolute" left={'43vw'} bottom={2} opacity={0.6}>
        Designed with <Icon as={FaHeart} fill="red" pt={1} /> by Fawaz
      </Text>
    </Flex>
  )
}
