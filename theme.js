import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  colors: {
    main: '#F2F1D7',
    secondary: '#fdfce6',
    dark: '#222841',
  },

  fonts: {
    heading: 'Bebas Neue',
    body: 'EB Garamond',
    link: 'Oswald',
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

    Text: {
      baseStyle: (props) => ({
        color: mode('#fff', '#000')(props),
      }),
    },

    Container: {
      baseStyle: {
        maxW: 'container.lg',
      },
    },
  },
})

export default theme
