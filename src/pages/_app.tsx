import { AppProps } from 'next/app';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import '../styles/global.scss';
import { Header } from '../components/Header';

import { Provider as NextAuthProvider } from 'next-auth/client';

const initialOptions = {
  "client-id": "ATZ0YGHa7GEpnPuYrxTyLU1DioUTU_yxZ2wifzuvWbSGbNz1PI4qPhqqHMmRqjMy5wSGgoziWXYWZ7p5",
  currency: "BRL",
  intent: 'capture'
}

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header/>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp
