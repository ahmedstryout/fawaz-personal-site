import {Flex, Heading, Text} from '@chakra-ui/react'
import {navigation} from 'constants/index.constants'
import Link from 'next/link'
export default function Navbar() {
  return (
    <Flex alignItems="center" justifyContent={'space-between'} px={28} py={12}>
      <Heading fontSize={'28px'}>UI.joe</Heading>
      <Flex columnGap={6}>
        {navigation.map(ele => (
          <Link key={ele.label} href={ele.path} passHref>
            <Text fontSize={'20px'}>{ele.label}</Text>
          </Link>
        ))}
      </Flex>
    </Flex>
  )
}
