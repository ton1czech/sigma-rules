import NextLink from 'next/link'
import NextImage from 'next/image'
import {
  Box,
  Text,
  Heading,
  Button,
  useColorModeValue,
  useColorMode,
  IconButton,
  Container,
  Flex,
  HStack,
  Link,
} from '@chakra-ui/react'
import { ImSigma } from 'react-icons/im'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <NextLink href='/'>
        <ImSigma color={useColorModeValue('yellow', 'blue')} />
      </NextLink>

      <HStack alignItems='center'>
        <NextLink href='/rules'>
          <Link>Rules</Link>
        </NextLink>
        <NextLink href='/sigma-male'>
          <Link>Sigma Male</Link>
        </NextLink>
        <IconButton
          background={useColorModeValue('yellow', 'blue')}
          icon={useColorModeValue(<RiSunLine />, <RiMoonLine />)}
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  )
}
