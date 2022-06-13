import "../assets/styles/globals.css";
import { NextUIProvider } from '@nextui-org/react';

import { kastleTheme } from '../assets/themes/'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={kastleTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
