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
  const colors = useColorModeValue('#DD6B20', '#553C9A')

  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <NextLink href='/'>
        <Link display='inline-flex' alignItems='center' fontSize='5xl'>
          <ImSigma size={35} color={colors} />
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
          _hover={{ background: useColorModeValue('#ED8936', '#6B46C1') }}
          background={colors}
          icon={useColorModeValue(<RiSunLine />, <RiMoonLine />)}
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  )
}
