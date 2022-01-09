import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Box} from '@chakra-ui/react'
import Hero from '@/components/hero/Hero'

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
    </Box>
  )
}

export default Home
