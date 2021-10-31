import Head from 'next/head'
import { Heading, Box, Container } from '@chakra-ui/react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SigmaMale() {
  return (
    <>
      <Head>
        <title>Sigma Rules - Sigma Male</title>
      </Head>
      <Header />
      <Container>
        <Heading fontSize={{ base: '4xl', md: '7xl' }} mb={5}>
          Who is the sigma male?
        </Heading>
      </Container>
      <Footer />
    </>
  )
}
