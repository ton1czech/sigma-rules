import NextLink from 'next/link'
import NextImage from 'next/image'
import { Box, Heading, Button, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { ImSigma } from 'react-icons/im'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const logo = '/logo.svg'

  return (
    <Box>
      <ImSigma />
      <Button onClick={toggleColorMode}>C {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    </Box>
  )
}
