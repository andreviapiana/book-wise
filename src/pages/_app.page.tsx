import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'

import { SessionProvider } from 'next-auth/react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          url: 'https://book-wis3.netlify.app/',
          siteName: 'Book Wise',
        }}
      />
      <Component {...pageProps} />
      <ToastContainer theme="dark" />
    </SessionProvider>
  )
}
