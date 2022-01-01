import {extendTheme} from '@chakra-ui/react'

const colors = {
  cultured: {
    100: '#F8F8FA',
    200: '#F8F8FA',
    300: '#F8F8FA',
    400: '#F8F8FA',
    500: '#F8F8FA',
    600: '#F8F8FA',
    700: '#F8F8FA',
    800: '#F8F8FA',
    900: '#F8F8FA',
  },
  richBlack: {
    100: '#121212',
    200: '#121212',
    300: '#121212',
    400: '#121212',
    500: '#121212',
    600: '#121212',
    700: '#121212',
    800: '#121212',
    900: '#121212',
  },
  carminePink: {
    100: '#E44949',
    200: '#E44949',
    300: '#E44949',
    400: '#E44949',
    500: '#E44949',
    600: '#E44949',
    700: '#E44949',
    800: '#E44949',
    900: '#E44949',
  },
}

const fonts = {
  heading: 'Manrope',
  body: 'Manrope',
}

export const theme = extendTheme({colors, fonts})
