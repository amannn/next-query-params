import {NextQueryParamProvider} from 'next-query-params';
import {AppProps} from 'next/app';

export default function App({Component, pageProps}: AppProps) {
  return (
    <NextQueryParamProvider>
      <Component {...pageProps} />
    </NextQueryParamProvider>
  );
}
