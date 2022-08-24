# next-query-params

![Gzipped size](https://badgen.net/bundlephobia/minzip/next-query-params) ![Tree shaking supported](https://badgen.net/bundlephobia/tree-shaking/next-query-params) ![Build passing](https://img.shields.io/github/workflow/status/amannn/next-query-params/main)

> Convenient state management of query parameters in Next.js apps.

Persisting React state to query parameters is often a good idea:

1. When the URL is shared, the app state is restored. Same applies to bookmarks.
2. When using the browser back button, the state of the previous page is restored.
3. When navigating forward to a page the user was already on, the state is reset.

Note that this library is an adapter for [`use-query-params`](https://www.npmjs.com/package/use-query-params) to integrate with Next.js.

## Installation

```sh
npm install next-query-params use-query-params
```

```jsx
// _app.js
import {NextAdapter} from 'next-query-params';
import {QueryParamProvider} from 'use-query-params';

export default function App({Component, pageProps}) {
  return (
    <QueryParamProvider adapter={NextAdapter}>
      <Component {...pageProps} />
    </QueryParamProvider>
  );
}
```

## Usage

Please refer to the usage of [`use-query-params`](https://www.npmjs.com/package/use-query-params).

```jsx
import {useQueryParam, StringParam, withDefault} from 'use-query-params';

export default function IndexPage() {
  const [name, setName] = useQueryParam('name', withDefault(StringParam, ''));

  function onNameInputChange(event) {
    setName(event.target.value);
  }

  return (
    <p>My name is <input value={name} onChange={onNameInputChange} /></p>
  );
}

// Note that if query parameters affect the server-rendered HTML of the page,
// you should define this function. Statically generated pages only have
// access to query parameters on the client side.
export function getServerSideProps() {
  return {props: {}};
}
```

## Shallow routing

`NextAdapter` can be configured to opt-out of [shallow routing](https://nextjs.org/docs/routing/shallow-routing). In this case server-side functions like `getServerSideProps` will be run again when a query parameter changes.

```jsx
// _app.js
import {NextAdapter} from 'next-query-params';
import {QueryParamProvider} from 'use-query-params';

function Adapter(props) {
  return <NextAdapter {...props} shallow={false} />;
}

export default function App({Component, pageProps}) {
  return (
    <QueryParamProvider adapter={Adapter}>
      <Component {...pageProps} />
    </QueryParamProvider>
  );
}
```

## Credits

This library is an adapter for [`use-query-params`](https://github.com/pbeshai/use-query-params) by [Peter Beshai](https://github.com/pbeshai) and is based on the code that was collaboratively created in [use-query-params#13](https://github.com/pbeshai/use-query-params/issues/13).
