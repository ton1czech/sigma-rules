import Head from 'next/head'
import { Container, Heading, Box, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { rules } from '../constants/data'

export default function Home() {
  const [randNum, setRandNum] = useState(Number)

  useEffect(() => {
    setRandNum(Math.floor(Math.random() * rules.length, 1))
  }, [setRandNum])

  return (
    <>
      <Head>
        <title>Sigma Rules - Home</title>
      </Head>
      <Header />
      <Container maxW='container.lg'>
        <Heading textAlign='center' size='3xl' mb={28}>
          Change your life. <br /> be the Sigma male (not now but yesterday)
        </Heading>
        <Heading textAlign='left' size='xl'>
          Take a look on rule that will change your life:
        </Heading>
        <Box borderRadius='md' mb={3} p={5} background={useColorModeValue('mainLight', 'mainDark')}>
          <Text fontSize='3xl' textAlign='justify' color={useColorModeValue('mainDark', 'mainLight')}>
            Rule #{rules[randNum].id}: {rules[randNum].text}
          </Text>
        </Box>
        <Button
          onClick={() => setRandNum(Math.floor(Math.random() * rules.length, 1))}
          background={useColorModeValue('orange.400', 'purple.500')}
          _hover={{ bg: useColorModeValue('orange.500', 'purple.600') }}
          _active={{ bg: useColorModeValue('orange.600', 'purple.700') }}
          w='full'
        >
          Show another rule
        </Button>
        <Heading textAlign='left' mt={28} size='3xl'>
          your grindset is everything
        </Heading>
        <Heading textAlign='left' size='xl'>
          do not let them stop you!
        </Heading>
      </Container>
      <Footer />
    </>
  )
}
