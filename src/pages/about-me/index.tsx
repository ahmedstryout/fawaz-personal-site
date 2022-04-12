import * as React from 'react'
import {Box, Flex, Heading, Text, useMediaQuery} from '@chakra-ui/react'

// 2 designs

// * hover => change color to black

export default function AboutMe() {
  const [isSmallWidth] = useMediaQuery('(max-width:900px)')
  const [invert, setInvert] = React.useState(false)
  return (
    <Box
      w={['100%']}
      borderRadius={'20px'}
      bg={invert ? 'black' : 'cultured.400'}
      px={['10px', '106px']}
      py={['44px', '50px']}
      width="100%"
      position="relative"
      mb={['60px', '60px', '270px']}
      mt={['100px', '100px', '120px']}
      pt={['60%', '0']}
      onMouseEnter={() => setInvert(true)}
      onMouseLeave={() => setInvert(false)}
    >
      <Box
        pos={'absolute'}
        borderRadius={'20px'}
        color={'white'}
        w={['70%', '40%']}
        // h={['700px']}
        h={['50%', '120%', '700px']}
        bgColor="#2D3039"
        top={['-15%', 0]}
        left={isSmallWidth ? 0 : undefined}
        right={isSmallWidth ? 0 : undefined}
        bottom={!isSmallWidth ? 0 : undefined}
        margin="auto"
        zIndex={1}
      ></Box>
      <Flex
        flexDir="column"
        align="center"
        justify="center"
        maxW={['100%', '40%']}
        ml="auto"
        textAlign={['center', 'left']}
      >
        <Heading
          textShadow={
            invert
              ? '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white'
              : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
          }
          color={invert ? 'black' : 'white'}
          fontSize={['48px', '100px']}
          mb={['10px']}
          letterSpacing={'-0.03em'}
          w="100%"
        >
          Hello!
        </Heading>
        <Text
          fontSize={['16px', '22px']}
          letterSpacing={'-0.02em'}
          color={invert ? 'white' : 'inherit'}
        >
          24 Year old Product Designer from India, who believes in creating
          human centric designs, Focused on UX/UI Design, Interaction design,
          Illustrations and 3D modelling.
        </Text>

        <Heading
          as="h2"
          mt={['40px']}
          fontSize={['26px']}
          w="100%"
          color={invert ? 'white' : 'inherit'}
        >
          Things I love
        </Heading>

        <Text
          fontSize={['20px']}
          mt={['10px']}
          opacity={0.7}
          color={invert ? 'white' : 'inherit'}
        >
          UX Design. UI Design. Motion Design. Branding. Graphic Design. Web
          Development.
        </Text>
      </Flex>
    </Box>
  )
}
