import * as React from 'react'
import {Box, Flex, Heading} from '@chakra-ui/react'

// interface InterestsProps {

// }
export default function Interests() {
  return (
    <Flex
      mb={['130px']}
      columnGap={['37px']}
      flexDir={['column', 'row']}
      mt={['137px']}
    >
      <Box position={['sticky', 'relative']} top={0} bg="white">
        <Heading
          fontSize={['49px', '64px']}
          fontWeight={700}
          letterSpacing="-0.02em"
          position={'sticky'}
          top={[0, '340px']}
          lineHeight="74px"
          textAlign={'center'}
          mb={[0, '25px']}
        >
          Things I love working on
        </Heading>
      </Box>
      <Box>
        {infos.map(info => (
          <Heading
            key={info.name}
            fontSize={['49px', '64px']}
            fontWeight={700}
            letterSpacing="-0.02em"
            mb={['25px']}
            color={info.bg}
            textAlign={'center'}
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
