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
        // bg="linear-gradient(141.68deg, #FF5EF9 -14.47%, #FF5EF9 15.43%, #C77FFC 45.9%, #5FBFFC 71.77%, #0EEEFF 95.91%);"
        borderRadius={'20px'}
        color={'white'}
        px="55px"
        py="60px"
        height={'700px'}
        verticalAlign={'bottom'}
        position={'relative'}
      >
        <Box position="absolute" bottom={'6%'} left={['5%']}>
          <Heading as="h3">{work.name}</Heading>
          <Text opacity={0.6}>{work.shortDesc}</Text>
        </Box>
      </Box>
    </Tilt>
  )
}
