import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Tecnnical Assignment</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Generated with Next.js" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default App
