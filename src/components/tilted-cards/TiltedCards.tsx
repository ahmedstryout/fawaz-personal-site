import Tilt from 'react-parallax-tilt'
import {Box, Heading, Text} from '@chakra-ui/react'
import {Work} from 'types'

interface TiltedCardProps {
  work: any
}
// https://github.com/mkosir/react-parallax-tilt#readme => refer for props

export default function TiltedCards({work}: TiltedCardProps) {
  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
      <Box
        bg="#2D3039"
        borderRadius={'20px'}
        color={'white'}
        px="55px"
        py="60px"
        height={['450px', '550px', '700px']}
        verticalAlign={'bottom'}
        position={'relative'}
      >
        <Box
          position="absolute"
          bottom={'6%'}
          left={['7%', '5%']}
          pr={['2%', 'auto']}
        >
          <Heading as="h3" fontSize={['24px', '36px']}>
            {work.name}
          </Heading>
          <Text opacity={0.6} fontSize={['16px', '22px']}>
            {work.shortDesc}
          </Text>
        </Box>
      </Box>
    </Tilt>
  )
}
