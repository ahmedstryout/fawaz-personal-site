import Link from 'next/link'
import {useRouter} from 'next/router'
import {Flex, Heading, Text} from '@chakra-ui/react'
import {navigation} from 'constants/index.constants'

export default function Navbar() {
  const router = useRouter()
  return (
    <Flex alignItems="center" justifyContent={'space-between'} px={28} py={12}>
      <Heading fontSize={'28px'} onClick={() => router.push('/')}>
        UI.joe
      </Heading>
      <Flex columnGap={6}>
        {navigation.map(ele => (
          <Link key={ele.label} href={ele.path} passHref>
            <Text fontSize={'20px'} cursor={'pointer'}>
              {ele.label}
            </Text>
          </Link>
        ))}
      </Flex>
    </Flex>
  )
}
