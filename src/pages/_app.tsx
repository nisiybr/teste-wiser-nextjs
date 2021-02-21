import type { AppProps /* , AppContext */ } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
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
