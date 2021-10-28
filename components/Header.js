import NextLink from 'next/link'
import { Box, useColorModeValue, useColorMode, IconButton, Flex, HStack, Link, Icon, Container } from '@chakra-ui/react'
import { ImSigma } from 'react-icons/im'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box background={useColorModeValue('secondaryDark', 'secondaryLight')}>
      <Container maxW='container.lg'>
        <Flex
          alignItems='center'
          justifyContent='space-between'
          mb={10}
          borderBottom='1px'
          borderBottomColor={useColorModeValue('mainLight', 'mainDark')}
        >
          <NextLink href='/'>
            <Link display='inline-flex' alignItems='center' fontSize='5xl'>
              <Icon as={ImSigma} w={9} h={9} color={useColorModeValue('orange.400', 'purple.500')} mr={2} />
              Rules
            </Link>
          </NextLink>

          <HStack alignItems='center'>
            <NextLink href='/rules'>
              <Link>Rules</Link>
            </NextLink>
            <NextLink href='/sigma-male'>
              <Link>Sigma Male</Link>
            </NextLink>
            <IconButton
              _hover={{ background: useColorModeValue('orange.500', 'purple.600') }}
              background={useColorModeValue('orange.400', 'purple.500')}
              icon={useColorModeValue(<RiSunLine />, <RiMoonLine />)}
              onClick={toggleColorMode}
              aria-label={colorMode === 'dark' ? 'Switch to Light theme' : 'Switch to Dark theme'}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
