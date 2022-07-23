import * as React from 'react'
import FastMarquee from 'react-fast-marquee'
import {
  Box,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  Image,
  Link,
} from '@chakra-ui/react'
import {EMAIL} from '@/components/contact-modal/ContactModal'

export default function AboutMe() {
  const [isSmallWidth] = useMediaQuery('(max-width:900px)')
  const [invert, setInvert] = React.useState(false)
  return (
    <Box
      w={['100%']}
      borderRadius={'20px'}
      bg={'cultured.400'}
      px={['10px', '106px']}
      py={['44px', '50px']}
      width="100%"
      position="relative"
      mb={['60px', '60px', '270px']}
      mt={['100px', '100px', '120px']}
      pt={['60%', '0']}
      onMouseEnter={() => setInvert(true)}
      onMouseLeave={() => setInvert(false)}
    >
      <Box
        pos={'absolute'}
        borderRadius={'20px'}
        color={'white'}
        w={['70%', '40%']}
        h={['50%', '120%', '700px']}
        bgColor="#E44949"
        top={['-15%', 0]}
        left={isSmallWidth ? 0 : undefined}
        right={isSmallWidth ? 0 : undefined}
        bottom={!isSmallWidth ? 0 : undefined}
        // bottom={undefined}
        margin="auto"
        zIndex={1}
      >
        <Box position="relative">
          <Box positive="absolute" mt={['50px', '150px']}>
            <FastMarquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={40}
              style={{
                backgroundColor: '#853fff',
                transform: 'rotate(10deg)',
                zIndex: 3,
              }}
              gradient={false}
              gradientColor={[0, 0, 0]}
              gradientWidth={400}
              direction="right"
            >
              <Flex
                columnGap="20px"
                borderRadius={'20px'}
                padding={['10px 0', '20px 0']}
              >
                {content1.map((char, idx) => (
                  <Text as="span" key={idx} fontWeight={700}>
                    {char}
                  </Text>
                ))}
              </Flex>
            </FastMarquee>
            <FastMarquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={40}
              style={{
                backgroundColor: 'white',
                transform: 'rotate(-10deg)',
                marginTop: '-50px',
              }}
              gradient={false}
            >
              <Flex
                columnGap="20px"
                borderRadius={'20px'}
                padding={['10px 0', '20px 0']}
              >
                {content2.map((char, idx) => (
                  <Text as="span" key={idx} color="#E44949" fontWeight={700}>
                    {char}
                  </Text>
                ))}
              </Flex>
            </FastMarquee>
          </Box>
        </Box>
        <Box position="relative" zIndex={3} mt={['-58px', '-129px']}>
          <Image
            src="/assets/svg/about-me.svg"
            alt="about me"
            mt={0}
            mx="auto"
            positive="absolute"
            zIndex={5}
            height={['270px', 'auto']}
          />
        </Box>
      </Box>
      {/* {invert && ( */}
      {/* <Box
        position="absolute"
        bottom={10}
        zIndex={20}
        left={0}
        right={0}
        mx="auto"
      >
        <Link
          href={`mailto: ${EMAIL}`}
          fontSize={['16px', '22px', '28px']}
          border="2px solid white"
          w={['100%', '658px']}
          borderRadius={'62.5px'}
          bgColor="white"
          color="black"
          textAlign="center"
          py="22px"
          px={['100px']}
          mt={['30px', '38px']}
        >
          Drop me an Email
        </Link>
      </Box> */}
      {/* )} */}

      <Flex
        flexDir="column"
        align="center"
        justify="center"
        maxW={['100%', '40%']}
        ml="auto"
        textAlign={['center', 'left']}
      >
        <Heading
          textShadow={
            invert
              ? 'none'
              : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
          }
          color={invert ? '#E44949' : 'white'}
          fontSize={['48px', '100px']}
          mb={['10px']}
          letterSpacing={'-0.03em'}
          w="100%"
        >
          Hello!
        </Heading>
        <Text
          fontSize={['16px', '22px']}
          letterSpacing={'-0.02em'}
          // color={invert ? 'white' : 'inherit'}
        >
          24 Year old Product Designer from India, who believes in creating
          human centric designs, Focused on UX/UI Design, Interaction design,
          Illustrations and 3D modelling.
        </Text>

        <Heading
          as="h2"
          mt={['40px']}
          fontSize={['26px']}
          w="100%"
          // color={invert ? 'white' : 'inherit'}
        >
          Things I love
        </Heading>

        <Text
          fontSize={['20px']}
          mt={['10px']}
          opacity={0.7}
          // color={invert ? 'white' : 'inherit'}
        >
          UX Design. UI Design. Motion Design. Branding. Graphic Design. Web
          Development.
        </Text>
      </Flex>
    </Box>
  )
}

const content1 = ['UX Design.', 'UI Design.', 'Motion Design.', 'Branding.']
const content2 = ['Graphic Design.', 'Web Development.', 'Traveling.']
