import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const colors = {
  test1: '#fff',
  test2: '#313131',
}

const theme = extendTheme({ config, colors })

export default theme
