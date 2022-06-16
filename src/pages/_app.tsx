import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from 'store';
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tecnnical Assignment</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Generated with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default App;
