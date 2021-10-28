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
      <Container maxW='container.lg'>
        <Heading size='4xl'>Who is sigma male?</Heading>
      </Container>
      <Footer />
    </>
  )
}
