import NextLink from 'next/link'
import {
  Box,
  useColorModeValue,
  Heading,
  useColorMode,
  Flex,
  HStack,
  VStack,
  Link,
  Container,
  Text,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box background={useColorModeValue('secondaryDark', 'secondaryLight')}>
      <Container maxW='container.lg'>
        <Box mt={10} borderTop='1px' borderTopColor={useColorModeValue('mainLight', 'mainDark')}>
          <HStack alignItems='center' justifyContent='space-between'>
            <VStack>
              <Heading>Links</Heading>
              <NextLink href='https://github.com/ton1czech/sigma-rules'>
                <Link>Source Code</Link>
              </NextLink>
            </VStack>
            <VStack>
              <Heading>Navigation</Heading>
              <NextLink href='/'>
                <Link>Home</Link>
              </NextLink>
              <NextLink href='/rules'>
                <Link>Rules</Link>
              </NextLink>
              <NextLink href='/sigma-male'>
                <Link>Sigma Male</Link>
              </NextLink>
            </VStack>
          </HStack>
          <Text textAlign='center' color={useColorModeValue('mainLight', 'mainDark')}>
            &copy; {new Date().getFullYear()} ton1czech. All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
