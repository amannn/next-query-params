import {AppProps} from 'next/app';
import NextAdapterPages from 'next-query-params/pages';
import {QueryParamProvider} from 'use-query-params';
import './_app.css';

export default function App({Component, pageProps}: AppProps) {
  return (
    <QueryParamProvider adapter={NextAdapterPages}>
      <Component {...pageProps} />
    </QueryParamProvider>
  );
}
