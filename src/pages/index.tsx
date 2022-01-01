import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fawaz Ahamed</title>
        <meta name="description" content="Fawaz's Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello World
    </div>
  )
}

export default Home
