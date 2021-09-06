# next-query-params

![Gzipped size](https://badgen.net/bundlephobia/minzip/next-intl) ![Tree shaking supported](https://badgen.net/bundlephobia/tree-shaking/next-intl) ![Build passing](https://img.shields.io/github/workflow/status/amannn/next-intl/main)

> Convenient state management of query parameters in Next.js apps.

Persisting React state to query parameters is often a good idea:

1. When the URL is shared, the app state is restored. Same applies to bookmarks.
2. When using the browser back button, the state of the previous page is restored.
3. When navigating forward to a page the user was already on, the state is reset.

Note that this library is a small wrapper for [`use-query-params`](https://www.npmjs.com/package/use-query-params) to integrate with Next.js.

## Installation

```sh
npm install next-query-params
```

```jsx
// _app.js
import {NextQueryParamProvider} from 'next-query-params';

export default function App({Component, pageProps}) {
  return (
    <NextQueryParamProvider>
      <Component {...pageProps} />
    </NextQueryParamProvider>
  );
}
```

## Usage

Please refer to the usage of [`use-query-params`](https://www.npmjs.com/package/use-query-params). This library configures the provider for usage with Next.js and additionally re-exports all modules from `use-query-params` for convenience.

Note that unlike `use-query-params`, this library has all dependencies included and compiled to support IE11.

```jsx
import {useQueryParam, StringParam, withDefault} from 'next-query-params';

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

## Credits

This library is a small wrapper around [`use-query-params`](https://github.com/pbeshai/use-query-params) by [Peter Beshai](https://github.com/pbeshai) and is based on the code that was collaboratively created in [use-query-params#13](https://github.com/pbeshai/use-query-params/issues/13).
