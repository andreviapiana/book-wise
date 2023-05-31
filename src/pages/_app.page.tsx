import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global'

import { SessionProvider } from 'next-auth/react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <ToastContainer theme="dark" />
    </SessionProvider>
  )
}
