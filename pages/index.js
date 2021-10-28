import { Container, Heading, Box, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { rules } from '../constants/data'

export default function Home() {
  const [randNum, setRandNum] = useState(Number)

  const randmath = Math.floor(Math.random() * rules.length, 1)

  useEffect(() => {
    setRandNum(randmath)
  }, [])

  return (
    <>
      <Header />
      <Container maxW='container.lg'>
        <Heading textAlign='center' size='2xl'>
          Change your life, become a SIGMA (not now but yesterday)
        </Heading>
        <Box borderRadius='md' mb={3} p={5} background={useColorModeValue('mainLight', 'mainDark')}>
          <Text fontSize='3xl' textAlign='justify'>
            Rule #{rules[randNum].id}: {rules[randNum].text}
          </Text>
        </Box>
        <Button
          onClick={() => setRandNum(randmath)}
          background={useColorModeValue('orange.400', 'purple.500')}
          _hover={{ background: useColorModeValue('orange.500', 'purple.600') }}
          w='full'
        >
          Show another rule
        </Button>
      </Container>
      <Footer />
    </>
  )
}
