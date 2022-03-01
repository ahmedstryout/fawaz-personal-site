import * as React from 'react'
import FastMarquee from 'react-fast-marquee'
import {Box, Heading} from '@chakra-ui/react'

export default function Marquee() {
  // const [play, setPlay] = React.useState(true)

  return (
    <Box mx={['-20px', '-125px']}>
      <FastMarquee
        pauseOnHover={true}
        pauseOnClick={true}
        // gradient={true}
        // gradientColor={[230, 180, 120]}
      >
        <Heading
          textShadow={'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}
          my={8}
          color="white"
          fontSize={['90px', '150px']}
          py={4}
          zIndex={10}
          _hover={{
            bgGradient:
              'linear-gradient(141.68deg, #FF5EF9 -14.47%, #FF5EF9 15.43%, #C77FFC 45.9%, #5FBFFC 71.77%, #0EEEFF 95.91%)',
          }}
          // bgClip="text"
          // onMouseEnter={() => setPlay(false)}
          // onMouseLeave={() => setPlay(true)}
        >
          Designs.Emotions.Happiness.
        </Heading>
      </FastMarquee>
    </Box>
  )
}
