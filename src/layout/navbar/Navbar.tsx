import {Flex, Heading, Text} from '@chakra-ui/react'
import React from 'react'

const navigation = [
  {label: 'Work.'},
  {label: 'About Me.'},
  {label: 'Contact Me.'},
]

export default function Navbar() {
  return (
    <Flex alignItems="center" justifyContent={'space-between'} px={28} py={12}>
      <Heading>UI.joe</Heading>
      <Flex>
        {navigation.map(ele => (
          <Text key={ele.label}>{ele.label}</Text>
        ))}
      </Flex>
    </Flex>
  )
}
