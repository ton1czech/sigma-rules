import { extendTheme } from '@chakra-ui/react'

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
    global: () => ({
      body: {
        bg: '#f2f1d7',
      },
    }),
  },

  components: {
    Heading: {
      baseStyle: () => ({
        color: '#000',
        textAlign: 'center',
      }),
    },

    Link: {
      baseStyle: () => ({
        color: '#000',
      }),
    },

    Text: {
      baseStyle: () => ({
        color: '#000',
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
