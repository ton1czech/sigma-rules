import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/icon.ico' />
          {/* Basic */}
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
          <meta httpEquiv='Expires' content='The grind never ends' />
          {/* OpenGraph */}
          <meta name='og:title' content='Sigma Rules' />
          <meta name='og:type' content='sigma' />
          <meta name='og:url' content='http://sigma-rules.com' />
          <meta name='og:image' content='/icon.ico' />
          <meta name='og:site_name' content='Sigma Rules' />
          <meta
            name='og:description'
            content='Learn about sigma males. How to recognize sigma? celebrities that are sigma males, list of rules for you to become sigma male and much more on sigma-rules.com'
          />
          <meta name='og:email' content='tonyasek007@gmail.com' />
          <meta name='og:country-name' content='Czech Republic' />
          <meta property='og:type' content='sigma rules' />
          <meta property='og:title' content='Sigma Rules' />
          <meta property='og:url' content='http://sigma-rules.com' />
          <meta property='og:image' content='/icon.ico' />
          <meta
            property='og:description'
            content='Learn about sigma males. How to recognize sigma? celebrities that are sigma males, list of rules for you to become sigma male and much more on sigma-rules.com'
          />
          <meta property='og:site_name' content='Sigma Rules' />
          {/* Apple */}
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta content='yes' name='apple-touch-fullscreen' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black' />
          <meta name='format-detection' content='telephone=no' />
          <link rel='apple-touch-icon' href='/icon.ico' />
          <link rel='apple-touch-icon' sizes='72x72' href='/icon.ico' />
          <link rel='apple-touch-icon' sizes='114x114' href='/icon.ico' />
          <link rel='apple-touch-startup-image' href='/icon.ico' />
          <link rel='apple-touch-icon' type='image/png' href='/apple-touch-icon.png' />
          {/* Twitter */}
          <meta name='twitter:card' content='Sigma Rules' />
          <meta name='twitter:site' content='@ton1czech' />
          <meta name='twitter:title' content='Sigma Rules' />
          <meta name='twitter:description' content='' />
          <meta name='twitter:creator' content='@ton1czech' />
          <meta name='twitter:image:src' content='/icon.ico' />
          <meta name='twitter:image' content='/icon.ico' />
          <meta name='twitter:label1' content='Rules?' />
          <meta name='twitter:data1' content='All of them' />
          <meta name='twitter:label2' content='Male:' />
          <meta name='twitter:data2' content='Sigma' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
