import type {AppProps} from 'next/app'
import {ChakraProvider, Box} from '@chakra-ui/react'
import {theme} from '../styles/chakra-theme'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/700.css'
import '../styles/globals.css'
import Navbar from 'layout/navbar/Navbar'
import Footer from 'layout/footer/Footer'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box px={28}>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
