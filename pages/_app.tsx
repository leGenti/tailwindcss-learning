import '../styles/scss/style.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {store, persistor} from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}
export default MyApp
