import Head from 'next/head'
import { Heading, Box, Text, useColorModeValue, Container } from '@chakra-ui/react'

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
      <Container maxW='container.lg'>
        <Heading size='4xl' mb={5}>
          List of rules
        </Heading>
        {rules.map(({ id, text }) => (
          <Box background={useColorModeValue('mainLight', 'mainDark')} borderRadius='md' mb={4} p={5} key={id}>
            <Text fontSize='2xl' color={useColorModeValue('mainDark', 'mainLight')}>
              Rule #{id}: {text}
            </Text>
          </Box>
        ))}
      </Container>
      <Footer />
    </>
  )
}
