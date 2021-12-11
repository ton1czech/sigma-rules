import Head from 'next/head'
import { Container, Heading } from '@chakra-ui/react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Error() {
  return (
    <>
      <Head>
        <title>Sigma Rules - 404</title>
      </Head>
      <Header />
      <Container>
        <Heading py={{ base: '40', md: '80' }} fontSize={{ base: '2xl', md: '80px' }}>
          The requested page was not found!
        </Heading>
      </Container>
      <Footer />
    </>
  )
}
