import { Heading, Box, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import Header from '../components/Header'

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
      <Heading textAlign='center' fontSize='5xl'>
        Change your life. Become a SIGMA (not now but yesterday)
      </Heading>
      <Box borderRadius='md' mb={3} p={5} background={useColorModeValue('mainLight', 'mainDark')}>
        <Text fontSize='3xl' textAlign='justify'>
          Rule #{rules[randNum].id}: {rules[randNum].text}
        </Text>
      </Box>
      <Button
        onClick={() => setRandNum(randmath)}
        background={useColorModeValue('#DD6B20', '#553C9A')}
        _hover={{ background: useColorModeValue('#ED8936', '#6B46C1') }}
        w='full'
      >
        Show another rule
      </Button>
    </>
  )
}
