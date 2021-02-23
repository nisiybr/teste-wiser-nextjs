import type { AppProps /* , AppContext */ } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Head from 'next/head';
import { store, persistor } from '../store';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
        <Head>
          <title>Wiser Educação - Login</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="theme-color" content="#383E71" />
        </Head>
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
