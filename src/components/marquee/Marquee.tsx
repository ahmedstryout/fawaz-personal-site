import * as React from 'react'
import FastMarquee from 'react-fast-marquee'
import {Box, Heading} from '@chakra-ui/react'
import {generateGrad} from 'utils'

export default function Marquee() {
  return (
    <Box mx={['-20px', '-125px']} mt={['30px', '140px']} mb={['-8px', '0px']}>
      <FastMarquee pauseOnHover={true} pauseOnClick={true} speed={40}>
        <Heading
          my={[0, 8]}
          color="white"
          fontSize={['90px', '150px']}
          py={[0, 4]}
          zIndex={10}
          textShadow={'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}
        >
          {textArr.map((char, idx) => (
            <Box
              as="span"
              key={idx}
              _hover={{
                bgGradient: generateGrad(),
                bgClip: 'text',
                textShadow: 'none',
              }}
            >
              {char}
            </Box>
          ))}
        </Heading>
      </FastMarquee>
    </Box>
  )
}

const text = 'Designs.Emotions.Happiness.'

const textArr = [...text]
