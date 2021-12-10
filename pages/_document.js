import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='keywords' content='sigma, male, rules, sigma male, sigma-male, sigma rules, sigma-rules' />
          <meta
            name='description'
            content='Learn about sigma males. How to recognize sigma? celebrities that are sigma males, list of rules for you to become sigma male and much more on sigma-rules.com'
          />
          <meta name='subject' content='sigma rules for sigma males' />
          <meta name='copyright' content='ton1czech' />
          <meta name='language' content='en-us' />
          <meta name='robots' content='index, rules, sigma-male' />
          <meta name='abstract' content='sigma website for every who wants to become sigma male' />
          <meta name='topic' content='sigma rules for sigma males' />
          <meta name='summary' content='sigma rules for sigma males' />
          <meta name='Classification' content='Hobby project' />
          <meta name='author' content='Daniel Anthony Baudyš, https://github.com/ton1czech' />
          <meta name='designer' content='ton1czech' />
          <meta name='reply-to' content='tonyasek007@gmail.com' />
          <meta name='owner' content='ton1czech' />
          <meta name='url' content='http://www.sigma-rules.com' />
          <meta name='identifier-URL' content='http://www.sigma-rules.com' />
          <meta name='category' content='sigma' />
          <meta name='coverage' content='Worldwide' />
          <meta name='distribution' content='Global' />
          <meta name='rating' content='General' />
          <meta http-equiv='Expires' content='The grind never ends' />
          <meta name='og:title' content='Sigma Rules' />
          <meta name='og:type' content='sigma' />
          <meta name='og:url' content='http://sigma-rules.com' />
          <meta name='og:image' content='' /> {/* todo */}
          <meta name='og:site_name' content='Sigma Rules' />
          <meta
            name='og:description'
            content='Learn about sigma males. How to recognize sigma? celebrities that are sigma males, list of rules for you to become sigma male and much more on sigma-rules.com'
          />
          <meta name='og:email' content='tonyasek007@gmail.com' />
          <meta name='og:country-name' content='Czech Republic' />
          <meta property='og:type' content='sigma rules' />
          <meta property='og:video' content='http://example.com/awesome.swf' /> {/* todo */}
          <meta property='og:video:height' content='640' /> {/* todo */}
          <meta property='og:video:width' content='385' /> {/* todo */}
          <meta property='og:video:type' content='application/x-shockwave-flash' /> {/* todo */}
          <link rel='icon' href='/icon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
