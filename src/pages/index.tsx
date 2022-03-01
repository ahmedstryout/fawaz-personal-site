import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Box, SimpleGrid} from '@chakra-ui/react'
import Hero from '@/components/hero/Hero'
import Marquee from '@/components/marquee/Marquee'
import TiltedCards from '@/components/tilted-cards/TiltedCards'
import {fetchAPI} from 'utils/strapi'

const works = [
  {
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Branding | UI/UX | Graphic Design',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Branding | UI/UX | Graphic Design',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Branding | UI/UX | Graphic Design',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Branding | UI/UX | Graphic Design',
  },
]

export async function getStaticProps() {
  const projects = await fetchAPI('/projects', {
    populate: ['image'],
  })

  return {
    props: {
      projects: projects.data,
    },
    // revalidate: 1,
  }
}

const Home: NextPage<{projects: any}> = ({projects}) => {
  console.log({projects})
  return (
    <Box className={styles.container}>
      <Head>
        <title>Fawaz Ahamed</title>
        <meta name="description" content="Fawaz's Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
      <SimpleGrid columns={[1, 2]} spacing={10} my={12}>
        {works.map((work, idx) => (
          <TiltedCards key={idx} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Home
