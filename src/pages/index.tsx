import Hero from '@/components/hero/Hero'
import Marquee from '@/components/marquee/Marquee'
import TiltedCards from '@/components/tilted-cards/TiltedCards'
import type {NextPage} from 'next'
import {Box, SimpleGrid, Flex, Image, Text} from '@chakra-ui/react'
import {fetchAPI} from 'utils/strapi'
import Interests from '@/components/interests/Interests'

export async function getStaticProps() {
  let projects = {
    data: [],
  }
  try {
    projects = await fetchAPI('/projects', {
      populate: ['image'],
    })
  } catch (err) {
    console.error(err)
  }

  return {
    props: {
      projects: projects.data,
    },
    // revalidate: 1,
  }
}

const Home: NextPage<{projects: any[]}> = ({projects}) => {
  console.log({projects})
  return (
    <Box>
      <Flex
        flexDir={['column', 'column', 'column', 'row']}
        as="main"
        borderRadius={'20px'}
        bg="cultured.400"
        px={['10px', '31px']}
        pl={['10px', '55px']}
        pt={['44px', '130px']}
        pb={['44px', '98px']}
        width="100%"
        justify={'space-between'}
        align="center"
      >
        <Hero />
        <Image src="/assets/svg/hero.svg" alt="home design" mt={[4, 6, 6, 0]} />
      </Flex>
      <span id="work" />
      <Marquee />
      {projects.length ? (
        <Text
          fontSize={['64px']}
          fontWeight={700}
          lineHeight="64px"
          mt={['100px', '151px']}
          mb={['30px', '70px']}
        >
          Some of my work
        </Text>
      ) : null}
      <SimpleGrid columns={[1, 2]} spacing={['30px', 10]} my={12}>
        {projects.map((project, _idx) => (
          <TiltedCards
            key={project.id}
            work={project.attributes}
            id={project.id}
          />
        ))}
      </SimpleGrid>
      <Interests />
    </Box>
  )
}

export default Home
