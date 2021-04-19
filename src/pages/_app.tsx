import { AppProps } from 'next/app'
import { PageFooter } from '../components/PageFooter'
import { PageInfoProvider } from '../hooks/usePageInfo'
import { GlobalStyle } from '../styles/global/styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageInfoProvider>
      <GlobalStyle />
      <Component {...pageProps} />
      <PageFooter />
    </PageInfoProvider>
  )
}

export default MyApp
