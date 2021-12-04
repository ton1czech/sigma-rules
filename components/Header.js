import NextLink from 'next/link'
import { Box, Flex, HStack, Link, Icon, Container } from '@chakra-ui/react'
import { ImSigma } from 'react-icons/im'

export default function Header() {
  return (
    <Box bg='secondary'>
      <Container>
        <Flex alignItems='center' justifyContent='space-between' mb={10} borderBottom='1px' borderBottomColor='dark'>
          <NextLink href='/'>
            <Link fontSize='5xl' fontFamily='heading'>
              <Icon as={ImSigma} w={9} h={9} color='purple.500' mr={2} />
              Rules
            </Link>
          </NextLink>

          <HStack alignItems='center' fontFamily='link' spacing={5} fontSize='lg'>
            <NextLink href='/rules'>
              <Link>Rules</Link>
            </NextLink>
            <NextLink href='/sigma-male'>
              <Link>Sigma Male</Link>
            </NextLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
