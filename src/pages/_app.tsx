import type {AppProps} from 'next/app'
import {ChakraProvider, Box} from '@chakra-ui/react'
import {theme} from '../styles/chakra-theme'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/700.css'
import '../styles/globals.css'
import Navbar from 'layout/navbar/Navbar'
import Footer from 'layout/footer/Footer'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Fawaz Ahamed</title>
        <meta name="description" content="Fawaz's Personal Portfolio" />
        <link rel="icon" href="favicons/favicon.ico" />
        <link
          rel="shortcut icon"
          sizes="16x16 24x24 32x32 48x48 64x64"
          href="favicons/favicon.ico"
        />

        {/* <!-- iOS Settings --> */}
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        ></meta>
      </Head>
      <Navbar />
      <Box px={['20px', 28]}>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
