'use client';

import NextAdapter from 'next-query-params/app';
import {ReactNode} from 'react';
import {QueryParamProvider} from 'use-query-params';

type Props = {
  children: ReactNode;
};

export default function Layout({children}: Props) {
  return (
    <html lang="en">
      <body>
        <QueryParamProvider adapter={NextAdapter}>
          {children}
        </QueryParamProvider>
      </body>
    </html>
  );
}
