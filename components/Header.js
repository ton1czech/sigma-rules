import NextLink from 'next/link'
import { Box, useColorModeValue, useColorMode, IconButton, Flex, HStack, Link, Icon, Container } from '@chakra-ui/react'
import { ImSigma } from 'react-icons/im'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box bg={useColorModeValue('secondaryDark', 'secondaryLight')}>
      <Container maxW='container.lg'>
        <Flex
          alignItems='center'
          justifyContent='space-between'
          mb={10}
          borderBottom='1px'
          borderBottomColor={useColorModeValue('mainLight', 'mainDark')}
        >
          <NextLink href='/'>
            <Link fontSize='5xl' fontFamily='heading'>
              <Icon as={ImSigma} w={9} h={9} color={useColorModeValue('orange.400', 'purple.500')} mr={2} />
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
            <IconButton
              bg={useColorModeValue('orange.400', 'purple.500')}
              _hover={{ bg: useColorModeValue('orange.500', 'purple.600') }}
              _active={{ bg: useColorModeValue('orange.600', 'purple.700') }}
              icon={useColorModeValue(<RiSunLine />, <RiMoonLine />)}
              onClick={toggleColorMode}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
