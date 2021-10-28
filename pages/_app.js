import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from '../theme'
import '../style.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='container.lg'>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}
