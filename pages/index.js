import Head from 'next/head'
import { Container, Heading, Box, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { rules } from '../constants/data'

export default function Home() {
  const [randNum, setRandNum] = useState(Math.floor(Math.random() * rules.length, 1))

  return (
    <>
      <Head>
        <title>Sigma Rules - Home</title>
      </Head>
      <Header />
      <Container>
        <Heading mb={{ base: 8, md: 28 }} fontSize={{ base: '3xl', md: '6xl' }}>
          Change your life. <br /> be the Sigma male (not now but yesterday)
        </Heading>
        <Heading textAlign='left' fontSize={{ base: 'xl', md: '4xl' }}>
          Take a look on rule that will change your life:
        </Heading>
        <Box borderRadius='md' mb={3} p={{ base: 2, md: 5 }} background={useColorModeValue('mainLight', 'mainDark')}>
          <Text
            fontSize={{ base: '2xl', md: '3xl' }}
            textAlign='justify'
            color={useColorModeValue('mainDark', 'mainLight')}
          >
            Rule #{rules[randNum].id}: {rules[randNum].text}
          </Text>
        </Box>
        <Button
          onClick={() => setRandNum(Math.floor(Math.random() * rules.length, 1))}
          bg={useColorModeValue('orange.400', 'purple.500')}
          _hover={{ bg: useColorModeValue('orange.500', 'purple.600') }}
          _active={{ bg: useColorModeValue('orange.600', 'purple.700') }}
          w='full'
          fontSize={{ base: '2xl', md: '3xl' }}
          fontFamily='heading'
        >
          Show another rule
        </Button>
        <Heading textAlign='left' mt={{ base: 12, md: 28 }}>
          your grind is everything
        </Heading>
        <Heading textAlign='left' size='xl'>
          do not let them stop you!
        </Heading>
      </Container>
      <Footer />
    </>
  )
}
