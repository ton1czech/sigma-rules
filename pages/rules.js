import Head from 'next/head'
import { Heading, Box, Text, Container } from '@chakra-ui/react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { rules } from '../constants/data'

export default function Rules() {
  return (
    <>
      <Head>
        <title>Sigma Rules - Rules</title>
      </Head>
      <Header />
      <Container>
        <Heading fontSize={{ base: '4xl', md: '7xl' }} mb={5}>
          List of rules
        </Heading>
        {rules.map(({ id, text }) => (
          <Box background='dark' borderRadius='md' mb={4} p={{ base: 2, md: 5 }} key={id}>
            <Text textAlign='justify' fontSize={{ base: '2xl', md: '3xl' }} color='main'>
              Rule #{id}: {text}
            </Text>
          </Box>
        ))}
      </Container>
      <Footer />
    </>
  )
}
