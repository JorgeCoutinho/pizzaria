import '../../styles/globals.scss'
import { AppProps } from "next/app"
import { AuthProvider } from '../contexts/AuthContext'
import React from "react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
