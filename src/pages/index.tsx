import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Box, SimpleGrid} from '@chakra-ui/react'
import Hero from '@/components/hero/Hero'
import Marquee from '@/components/marquee/Marquee'
import TiltedCards from '@/components/tilted-cards/TiltedCards'

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

const Home: NextPage = () => {
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
        px={24}
        py={56}
        width="100%"
      >
        <Hero />
      </Box>
      <Marquee />
      <SimpleGrid columns={2} spacing={10} my={12}>
        {works.map((work, idx) => (
          <TiltedCards key={idx} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Home
