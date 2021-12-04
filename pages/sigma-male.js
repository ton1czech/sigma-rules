import Head from 'next/head'
import Image from 'next/image'
import { Heading, Container, Text } from '@chakra-ui/react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SigmaMale() {
  return (
    <>
      <Head>
        <title>Sigma Rules - Sigma Male</title>
      </Head>
      <Header />
      <Container>
        <Heading fontSize={{ base: '4xl', md: '7xl' }} mb={5}>
          Who is the sigma male?
        </Heading>
        <Heading fontSize={{ base: 'xl', md: '4xl' }} mb={5}>
          Characteristics
        </Heading>
        <Text fontSize={{ base: '2xl', md: '3xl' }} pb='12'>
          The Sigma Male has all the positive traits of the Alpha Male such as confidence, the self-assurance, the
          ambition and the popularity but without the huge ego, aggression, and need for validation from others. He can
          socialise just fine and can manipulate and adapt to situations as and when needed. Even taking on leadership
          roles if he wants to but he has no interest in the opinions of others and is more than happy to be on his own.
          He isn't afraid to play by his own rules, and he comes across as both exciting and likeable. He is calculated
          and cunning, taking his time to listen to others and respond carefully. He lives his life with intention - a
          thirst for knowledge and gaining new skills, as well as seeking out new experiences and adventure. People find
          him to be intelligent and funny, with a quick wit and a great sense of humour. He doesn't need a partner in
          his life, but his mystery and willingess to break the rules attracts the females in droves. The Sigma Male is
          independent thinker, and lone wolf rather than being in a 'pack' like an alpha. He doesn't seek to lead nor
          follow but is comfortable in either position if he must be. He's usually a good judge of character, abstaining
          from immediate judgment of others.
        </Text>
        <Heading fontSize={{ base: 'xl', md: '4xl' }} mb={5}>
          Pros
        </Heading>
        <Text fontSize={{ base: '2xl', md: '3xl' }} pb='12'>
          - Freedom = Not carrying the burden of what other people think is incredibly freeing and allows The Sigma Male
          to live his life on his own terms.
        </Text>
        <Text fontSize={{ base: '2xl', md: '3xl' }} pb='12'>
          - Attraction = Women are automatically drawn to The Sigma Male due to their mysterious nature and willingness
          to walk away.
        </Text>
        <Text fontSize={{ base: '2xl', md: '3xl' }} pb='12'>
          - Efficiency = The Sigma Male isn't bound to the usual trappings of cultural norms and societal pressures,
          which makes him live so much more efficiently. He doesn't feel the need to waste time and money on anything
          that doesn't serve his own interests, personal goals or plans. Not caring about the judgments and opinions of
          others also allows him to be 100% genuine and authentic, as he sees no need in trying to win the approval or
          validation of anyone except himself
        </Text>
        <Heading fontSize={{ base: 'xl', md: '4xl' }} mb={5}>
          Cons
        </Heading>
        <Text fontSize={{ base: '2xl', md: '3xl' }} pb='12'>
          - No Tribe = Ironically, the best thing about being The Sigma Male can also be one of the worst things - to be
          alone
        </Text>
        <Text fontSize={{ base: '2xl', md: '3xl' }} pb='12'>
          - Teenage Life = Learning to grow into yourself can be a difficult experience. Many Sigma Males live through
          their teenage years feeling depressed, bullied, alienated and alone
        </Text>
        <Image src='/gigachad.jpg' height={1220} width={1024} quality={100} />
      </Container>
      <Footer />
    </>
  )
}
