import '@/styles/globals.scss';

import { Roboto } from '@next/font/google';
import Head from 'next/head';

import Layout from '../components/global/Layout';
import { AuthProvider } from '../context/authContext';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Head>
        <title>Revista Vivência</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff827e" />
      </Head>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </div>
  )
}
