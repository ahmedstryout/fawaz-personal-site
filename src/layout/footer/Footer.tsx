import {Box, Button, Flex, Heading, Text} from '@chakra-ui/react'
import {navigation, socialLinks} from 'constants/index.constants'
import React from 'react'

export default function Footer() {
  return (
    <Flex
      alignItems="center"
      justifyContent={'space-around'}
      px={28}
      py={12}
      bg="black"
      color="white"
    >
      <Box>
        <Heading mb={4}>Got a great Idea? Let’s talk</Heading>
        <Button borderRadius={'50px'} px={12} color="black" size="lg">
          Hire me
        </Button>
      </Box>
      <Flex flexDir={'column'}>
        <Box>
          <Heading as="h2">Find me here</Heading>
          <Flex columnGap={6}>
            {socialLinks.map(link => (
              <Text key={link.label} opacity={0.7}>
                {link.label}
              </Text>
            ))}
          </Flex>
        </Box>
        <Box>
          <Heading as="h2">Explore</Heading>
          <Flex columnGap={6}>
            {navigation.map(link => (
              <Text key={link.label} opacity={0.7}>
                {link.label}
              </Text>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}
