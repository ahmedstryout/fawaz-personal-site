import Hero from '@/components/hero/Hero'
import Marquee from '@/components/marquee/Marquee'
import TiltedCards from '@/components/tilted-cards/TiltedCards'
import type {NextPage} from 'next'
import {Box, SimpleGrid} from '@chakra-ui/react'
import {fetchAPI} from 'utils/strapi'

export async function getStaticProps() {
  let projects = {
    data: [],
  }
  try {
    projects = await fetchAPI('/projects', {
      // populate: ['image'],
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
    <Box >
      <Box
        as="main"
        borderRadius={'20px'}
        bg="cultured.400"
        px={['10px', 24]}
        py={['44px', 56]}
        width="100%"
      >
        <Hero />
      </Box>
      <Marquee />
      <SimpleGrid columns={[1, 2]} spacing={['30px', 10]} my={12}>
        {projects.map((project, _idx) => (
          <TiltedCards
            key={project.id}
            work={project.attributes}
            id={project.id}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Home
