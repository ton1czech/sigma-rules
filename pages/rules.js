import { Heading, Box, Text } from '@chakra-ui/react'
import Header from '../components/Header'
import { rules } from '../constants/data'

export default function Rules() {
  return (
    <>
      <Header />
      <Heading>List of rules</Heading>
      {rules.map(({ id, text }) => (
        <Box background='gray.500' borderRadius='md' mb={2} key={id}>
          <Text>
            Rule #{id}: {text}
          </Text>
        </Box>
      ))}
    </>
  )
}
