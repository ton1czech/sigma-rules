import { Heading, Button, useColorModeValue, useColorMode } from '@chakra-ui/react'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      <Heading bg={useColorModeValue('#0000ff', '#00ff00')}>hello</Heading>
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    </div>
  )
}
