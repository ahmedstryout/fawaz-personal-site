import {Box, Heading, Text} from '@chakra-ui/react'


export default function Hero() {
  return (
    <Box w="60%">
      <Heading fontSize={'138px'} color="black">
        Humanising
      </Heading>
      <Heading
        textShadow={'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}
        color="white"
        fontSize={'100px'}
        mb={'30px'}
      >
        Designs.Forever.
      </Heading>
      <Text fontSize={'22px'}>
        24 Year old Product Designer from India, who believes in creating human
        centric designs, Focused on UX/UI Design, Interaction design,
        Illustrations and 3D modelling.
      </Text>
    </Box>
  )
}
