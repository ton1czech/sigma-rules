import Head from 'next/head'
import Image from 'next/image'
import { Heading, Container } from '@chakra-ui/react'

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
        <Image src='/gigachad.jpg' height={1220} width={1024} quality={100} />
      </Container>
      <Footer />
    </>
  )
}
