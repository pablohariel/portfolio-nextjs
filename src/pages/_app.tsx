import '../styles/globals.css'
import { FC } from 'react'
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
