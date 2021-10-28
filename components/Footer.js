import NextLink from 'next/link'
import { Box, useColorModeValue, Heading, HStack, VStack, Link, Container, Text, Icon } from '@chakra-ui/react'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoTiktok,
  IoLogoReddit,
  IoLogoYoutube,
} from 'react-icons/io5'
import { ImSpotify } from 'react-icons/im'

export default function Footer() {
  return (
    <Box background={useColorModeValue('secondaryDark', 'secondaryLight')}>
      <Container maxW='container.lg'>
        <Box mt={10} pt={10} borderTop='1px' borderTopColor={useColorModeValue('mainLight', 'mainDark')}>
          <HStack alignItems='flex-start' justifyContent='space-between'>
            <VStack align='left'>
              <Heading textAlign='left'>Links</Heading>
              <Link href='http://github.com/ton1czech/sigma-rules' display='flex' alignItems='center' isExternal>
                <Icon mr={1} as={IoLogoGithub} />
                Source Code
              </Link>
              <Link href='http://instagram.com/ton1czech' display='flex' alignItems='center' isExternal>
                <Icon mr={1} as={IoLogoInstagram} />
                @ton1czech
              </Link>

              <Link href='http://twitter.com/ton1czech' display='flex' alignItems='center' isExternal>
                <Icon mr={1} as={IoLogoTwitter} />
                @ton1czech
              </Link>
              <Link href='http://reddit.com/user/ton1czech' display='flex' alignItems='center' isExternal>
                <Icon mr={1} as={IoLogoReddit} />
                @ton1czech
              </Link>
              <Link
                href='http://youtube.com/channel/UCblA_CnykG2Dw_6IMwZ9z9A'
                display='flex'
                alignItems='center'
                isExternal
              >
                <Icon mr={1} as={IoLogoYoutube} />
                @ton1czech
              </Link>
              <Link href='http://tiktok.com/@t0n1czech' display='flex' alignItems='center' isExternal>
                <Icon mr={1} as={IoLogoTiktok} />
                @t0n1czech
              </Link>
              <Link href='http://github.com/ton1czech' display='flex' alignItems='center' isExternal>
                <Icon mr={1} as={IoLogoGithub} />
                @ton1czech
              </Link>
              <Link
                href='http://open.spotify.com/user/212btc3myry7hwb45aybf4efi'
                display='flex'
                alignItems='center'
                isExternal
              >
                <Icon mr={1} as={ImSpotify} />
                @ton1czech
              </Link>
            </VStack>
            <VStack align='left'>
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
