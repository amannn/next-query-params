import {NextAdapter} from 'next-query-params';
import {AppProps} from 'next/app';
import {QueryParamProvider} from 'use-query-params';
import './_app.css';

export default function App({Component, pageProps}: AppProps) {
  return (
    <QueryParamProvider adapter={NextAdapter}>
      <Component {...pageProps} />
    </QueryParamProvider>
  );
}
