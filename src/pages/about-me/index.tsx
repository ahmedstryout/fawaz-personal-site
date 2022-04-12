import React from 'react'
import {Box, Flex, Heading, Text} from '@chakra-ui/react'

// 2 designs

// * hover => change color to black

export default function AboutMe() {
  return (
    <Box
      w={['100%']}
      borderRadius={'20px'}
      bg="cultured.400"
      px={['10px', '106px']}
      py={['44px', '50px']}
      width="100%"
      position="relative"
      mb={['270px']}
      mt={['100px']}
    >
      <Box
        pos={'absolute'}
        borderRadius={'20px'}
        color={'white'}
        w={['40%']}
        // h={['700px']}
        h={['120%', '700px']}
        bgColor="#2D3039"
        top={0}
        bottom={0}
        margin="auto"
        zIndex={1}
      ></Box>
      <Flex
        flexDir="column"
        align="center"
        justify="center"
        maxW="40%"
        ml="auto"
        textAlign="left"
      >
        <Heading
          textShadow={'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}
          color="white"
          fontSize={['48px', '100px']}
          mb={['10px']}
          letterSpacing={'-0.03em'}
          w="100%"
        >
          Hello!
        </Heading>
        <Text fontSize={['16px', '22px']} letterSpacing={'-0.02em'}>
          24 Year old Product Designer from India, who believes in creating
          human centric designs, Focused on UX/UI Design, Interaction design,
          Illustrations and 3D modelling.
        </Text>

        <Heading
          as="h2"
          mt={['40px']}
          fontSize={['26px']}
          textAlign="left"
          w="100%"
        >
          Things I love
        </Heading>

        <Text fontSize={['20px']} mt={['10px']} opacity={0.7}>
          UX Design. UI Design. Motion Design. Branding. Graphic Design. Web
          Development.
        </Text>
      </Flex>
    </Box>
  )
}
