import * as React from 'react'
import {Box, Flex, Heading} from '@chakra-ui/react'

// interface InterestsProps {

// }
export default function Interests() {
  return (
    <Flex mb={['130px']} columnGap={['37px']}>
      <Box position="relative" width={['50%']}>
        <Heading
          fontSize={['64px']}
          fontWeight={700}
          letterSpacing="-0.02em"
          position={'sticky'}
          top={['340px']}
        >
          Things I love working on
        </Heading>
      </Box>
      <Box>
        {infos.map(info => (
          <Heading
            key={info.name}
            fontSize={['64px']}
            fontWeight={700}
            letterSpacing="-0.02em"
            mb={['25px']}
            color={info.bg}
          >
            {info.name}
          </Heading>
        ))}
      </Box>
    </Flex>
  )
}

const infos = [
  {name: 'User Experience', bg: '#E44949'},
  {name: 'User Interface', bg: '#F1C550'},
  {name: 'Motion Design', bg: '#1889D1'},
  {name: 'Branding', bg: '#49E49A'},
  {name: 'Graphic Design', bg: '#7B49E4'},
  {name: 'Illustrations', bg: '#E449CB'},
  {name: 'many more..', bg: '#000000'},
]
