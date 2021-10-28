import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    mainDark: '#222841',
    mainLight: '#F2F1D7',
    secondaryDark: '#242B46',
    secondaryLight: '#fdfce6',
  },
  fonts: {
    heading: 'Bebas Neue',
    body: 'EB Garamond',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#222831', '#f2f1d7')(props),
      },
    }),
  },
  components: {
    Heading: {
      baseStyle: (props) => ({
        color: mode('#fff', '#000')(props),
        textAlign: 'center',
      }),
    },
    Link: {
      baseStyle: (props) => ({
        color: mode('#fff', '#000')(props),
      }),
    },
  },
})

export default theme
