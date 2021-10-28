import { Heading, Box, Text, useColorModeValue, Container } from '@chakra-ui/react'
import Header from '../components/Header'
import { rules } from '../constants/data'

export default function Rules() {
  return (
    <>
      <Header />
      <Container maxW='container.lg'>
        <Heading textAlign='center' size='4xl' mb={5}>
          List of rules
        </Heading>
        {rules.map(({ id, text }) => (
          <Box background={useColorModeValue('mainLight', 'mainDark')} borderRadius='md' mb={4} p={5} key={id}>
            <Text fontSize='2xl'>
              Rule #{id}: {text}
            </Text>
          </Box>
        ))}
      </Container>
    </>
  )
}
