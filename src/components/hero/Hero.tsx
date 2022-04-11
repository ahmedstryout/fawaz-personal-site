import {Box, Heading, Text} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Box w={['100%', '60%']} textAlign={['center', 'left']}>
      <Heading
        fontSize={['60px', '138px']}
        color="black"
        letterSpacing={'-0.07em'}
      >
        Humanising
      </Heading>
      <Heading
        textShadow={'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}
        color="white"
        fontSize={['48px', '100px']}
        mb={'30px'}
        letterSpacing={'-0.03em'}
      >
        Designs.Forever.
      </Heading>
      <Text fontSize={['16px', '22px']}>
        24 Year old Product Designer from India, who believes in creating human
        centric designs, Focused on UX/UI Design, Interaction design,
        Illustrations and 3D modelling.
      </Text>
    </Box>
  )
}
