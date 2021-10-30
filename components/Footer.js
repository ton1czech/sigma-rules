import NextLink from 'next/link'
import { Box, useColorModeValue, Heading, HStack, VStack, Link, Container, Text, Icon } from '@chakra-ui/react'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoTiktok,
  IoLogoReddit,
  IoLogoYoutube,
  IoHomeSharp,
  IoListSharp,
  IoPersonSharp,
} from 'react-icons/io5'
import { ImSpotify } from 'react-icons/im'

export default function Footer() {
  const externalLinkProps = {
    display: 'inline-flex',
    alignItems: 'center',
    isExternal: true,
  }

  const iconProps = {
    mr: 1,
  }

  const linkHeadingProps = {
    textAlign: 'left',
    size: 'xl',
  }

  const linkProps = {
    display: 'inline-flex',
    alignItems: 'center',
  }

  return (
    <Box background={useColorModeValue('secondaryDark', 'secondaryLight')}>
      <Container>
        <Box mt={10} pt={10} borderTop='1px' borderTopColor={useColorModeValue('mainLight', 'mainDark')}>
          <HStack alignItems='flex-start' justifyContent='space-between' fontFamily='link' fontSize='lg'>
            <VStack align='left' spacing={3}>
              <Heading {...linkHeadingProps}>Links</Heading>
              <Link href='http://github.com/ton1czech/sigma-rules' {...externalLinkProps}>
                <Icon mr={1} as={IoLogoGithub} />
                Source Code
              </Link>
              <Link href='http://instagram.com/ton1czech' {...externalLinkProps}>
                <Icon {...iconProps} as={IoLogoInstagram} />
                @ton1czech
              </Link>

              <Link href='http://twitter.com/ton1czech' {...externalLinkProps}>
                <Icon {...iconProps} as={IoLogoTwitter} />
                @ton1czech
              </Link>
              <Link href='http://reddit.com/user/ton1czech' {...externalLinkProps}>
                <Icon {...iconProps} as={IoLogoReddit} />
                @ton1czech
              </Link>
              <Link href='http://youtube.com/channel/UCblA_CnykG2Dw_6IMwZ9z9A' {...externalLinkProps}>
                <Icon {...iconProps} as={IoLogoYoutube} />
                @ton1czech
              </Link>
              <Link href='http://tiktok.com/@t0n1czech' {...externalLinkProps}>
                <Icon {...iconProps} as={IoLogoTiktok} />
                @t0n1czech
              </Link>
              <Link href='http://github.com/ton1czech' {...externalLinkProps}>
                <Icon {...iconProps} as={IoLogoGithub} />
                @ton1czech
              </Link>
              <Link href='http://open.spotify.com/user/212btc3myry7hwb45aybf4efi' {...externalLinkProps}>
                <Icon {...iconProps} as={ImSpotify} />
                @ton1czech
              </Link>
            </VStack>
            <VStack align='left' spacing={3}>
              <Heading {...linkHeadingProps}>Navigation</Heading>
              <NextLink href='/'>
                <Link {...linkProps}>
                  <Icon {...iconProps} as={IoHomeSharp} />
                  Home
                </Link>
              </NextLink>
              <NextLink href='/rules'>
                <Link {...linkProps}>
                  <Icon {...iconProps} as={IoListSharp} />
                  Rules
                </Link>
              </NextLink>
              <NextLink href='/sigma-male'>
                <Link {...linkProps}>
                  <Icon {...iconProps} as={IoPersonSharp} />
                  Sigma Male
                </Link>
              </NextLink>
            </VStack>
          </HStack>
          <Text
            mt={28}
            pb={16}
            textAlign='center'
            color={useColorModeValue('mainLight', 'mainDark')}
            fontSize='xl'
            fontFamily='link'
          >
            &copy; {new Date().getFullYear()} ton1czech. All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
