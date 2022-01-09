import {Box, Heading, Text} from '@chakra-ui/react'
import React from 'react'
import Tilt from 'react-parallax-tilt'

export default function TiltedCards() {
  return (
    <Tilt glareEnable={true} glareColor="#FF5EF9">
      <Box
        // bg="#2D3039"
        bg="linear-gradient(141.68deg, #FF5EF9 -14.47%, #FF5EF9 15.43%, #C77FFC 45.9%, #5FBFFC 71.77%, #0EEEFF 95.91%);"
        borderRadius={'20px'}
        color={'white'}
        px="55px"
        py="60px"
        height={'700px'}
        verticalAlign={'bottom'}
        position={'relative'}
      >
        <Box position="absolute" bottom={12}>
          <Heading as="h3">Lorem ipsum dolor sit amet 👀</Heading>
          <Text opacity={0.6}>Branding | UI/UX | Graphic Design</Text>
        </Box>
      </Box>
    </Tilt>
  )
}
