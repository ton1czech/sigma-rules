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
        <Box mt={10} pt={10} borderTop='1px' borderTopColor={useColorModeValue('mainLight', 'mainDark')}>
          <HStack alignItems='flex-start' justifyContent='space-between'>
            <VStack>
              <Heading>Links</Heading>
              <Link href='http://github.com/ton1czech/sigma-rules' isExternal>
                Source Code
              </Link>
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
          <Text mt={28} textAlign='center' color={useColorModeValue('mainLight', 'mainDark')}>
            &copy; {new Date().getFullYear()} ton1czech. All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
