import {Flex, Heading, Text} from '@chakra-ui/react'
import {navigation} from 'constants/index.constants'
import React from 'react'

export default function Navbar() {
  return (
    <Flex alignItems="center" justifyContent={'space-between'} px={28} py={12}>
      <Heading>UI.joe</Heading>
      <Flex columnGap={6}>
        {navigation.map(ele => (
          <Text key={ele.label}>{ele.label}</Text>
        ))}
      </Flex>
    </Flex>
  )
}
