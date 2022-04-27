import {NextQueryParamProvider} from 'next-query-params';
import {AppProps} from 'next/app';
import './_app.css';

export default function App({Component, pageProps}: AppProps) {
  return (
    <NextQueryParamProvider>
      <Component {...pageProps} />
    </NextQueryParamProvider>
  );
}
