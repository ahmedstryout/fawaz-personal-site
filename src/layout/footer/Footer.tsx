import React from 'react'
import Link from 'next/link'
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  useMediaQuery,
  SimpleGrid,
} from '@chakra-ui/react'
import {navigation, socialLinks} from 'constants/index.constants'
import {useRouter} from 'next/router'

export default function Footer() {
  const [isSmall] = useMediaQuery('max-width:460px')
  const router = useRouter()

  console.log(isSmall)
  return (
    <SimpleGrid
      templateColumns={['1fr', '1.2fr 1fr']}
      px={['20px', '20px', 28]}
      py={['20px', '20px', 12]}
      pt={['100px', '20px', 12]}
      bg="black"
      color="white"
      position={'relative'}
      textAlign={['center', 'center', 'left']}
    >
      <Flex mb={[8, 8, 0]} align="center" direction={['column', 'row']}>
        <Flex
          boxSize={['260px', '322px']}
          bgImage={`url(/assets/svg/red-circle.svg)`}
          bgSize="contain"
          bgRepeat={'no-repeat'}
          justify="center"
          align="center"
          position="relative"
        >
          <Image
            src="/assets/svg/memoji-footer.svg"
            alt="Memoji footer"
            mb="20px"
            mr="40px"
          />
        </Flex>

        <Box zIndex={3} ml={[0, '-73px']} mt={['-30px', 0]} lineHeight={'68px'}>
          <Heading
            mb={['20px']}
            fontSize={['38px', '38px', '52px', '58px']}
            letterSpacing="-0.03em"
          >
            Got a great Idea? <br /> Let’s talk
          </Heading>
          <Button
            borderRadius={'50px'}
            px={['35px']}
            color="black"
            size="lg"
            onClick={() => router.push({search: '?contact=true'})}
          >
            {isSmall ? 'Hire me' : 'Fawazc91@gmail.com'}
          </Button>
        </Box>
      </Flex>

      <SimpleGrid
        templateColumns={['fr', '1fr 1fr']}
        alignContent="center"
        mt={['47px', '60px']}
      >
        <Box mb={['30px']}>
          <Heading as="h2" mb={4} fontSize={['26px', '26px', '32px']}>
            Find Me Here
          </Heading>
          <Box
            display={['grid', 'flex']}
            flexDir={['column']}
            rowGap={['20px']}
            justifyContent={['center', 'center', 'flex-start']}
            gridTemplateColumns="1fr 1fr"
            gridTemplateRows="1fr 1fr"
          >
            {socialLinks.map(link => (
              <a
                href={link.link}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <Text
                  fontSize={['20px', '20px', '24px']}
                  opacity={0.7}
                  cursor={'pointer'}
                >
                  {link.label}
                </Text>
              </a>
            ))}
          </Box>
        </Box>
        <Box mb={['30px']}>
          <Heading as="h2" mb={6} fontSize={['26px', '26px', '32px']}>
            Explore
          </Heading>
          <Flex
            flexDir={['row', 'column']}
            rowGap={['20px']}
            columnGap={['20px']}
            justifyContent={['center', 'center', 'flex-start']}
          >
            {navigation.map(link => (
              <Link key={link.label} href={link.path} passHref>
                <Text
                  fontSize={['20px', '20px', '24px']}
                  opacity={0.7}
                  cursor={'pointer'}
                >
                  {link.label}
                </Text>
              </Link>
            ))}
          </Flex>
        </Box>
      </SimpleGrid>

      <Image
        src="/assets/svg/plus01.svg"
        alt="Plus One"
        position={'absolute'}
        right={0}
        bottom={0}
        height={['90px', 'auto']}
      />
    </SimpleGrid>
  )
}
