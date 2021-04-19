import { AppProps } from 'next/app'
import { PageFooter } from '../components/PageFooter'
import { GlobalStyle } from '../styles/global/styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <PageFooter />
    </>
  )
}

export default MyApp
