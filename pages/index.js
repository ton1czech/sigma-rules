import { Heading, Box, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { useEffect } from 'react'

import Header from '../components/Header'

import { rules } from '../constants/data'

export default function Home() {
  const randNum = Math.floor(Math.random() * 10, 1)

  return (
    <>
      <Header />
      <Heading>Home page</Heading>
      <Box borderRadius='md' mb={3} background={useColorModeValue('mainLight', 'mainDark')} w='full' textAlign='center'>
        <Text fontSize='2xl'>
          Rule #{rules[randNum].id}: {rules[randNum].text}
        </Text>
      </Box>
      <Button background={useColorModeValue('#DD6B20', '#553C9A')} w='full'>
        Show another rule
      </Button>
    </>
  )
}
