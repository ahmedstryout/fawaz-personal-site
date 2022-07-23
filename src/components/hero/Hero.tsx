import {Box, Heading, Text, useMediaQuery} from '@chakra-ui/react'

export default function Hero() {
  const [isMobile] = useMediaQuery('(max-width:460px)')
  return (
    <Box
      w={['100%', '100%', '100%', '64%']}
      textAlign={['center', 'center', 'center', 'left']}
    >
      <Heading
        fontSize={['52px', '62px', '118px', '138px']}
        color="black"
        letterSpacing={'-0.07em'}
      >
        Humanising
      </Heading>
      <Heading
        textShadow={'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}
        color="white"
        fontSize={['42px', '52px', '98px', '118px']}
        mb={'30px'}
        letterSpacing={'-0.03em'}
      >
        Designs.
        {/* {isMobile ? <br /> : null} */}
        Forever.
      </Heading>
      <Text fontSize={['16px', '22px']}>
        Product Designer from India, who believes in creating human centric
        designs, Focused on UX/UI Design, Interaction design.
      </Text>
    </Box>
  )
}
