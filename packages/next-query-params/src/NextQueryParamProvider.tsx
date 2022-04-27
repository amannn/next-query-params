import {useRouter} from 'next/router';
import React, {ComponentProps, memo, useMemo} from 'react';
// This dependency is bundled
// eslint-disable-next-line import/no-extraneous-dependencies
import {QueryParamProvider} from 'use-query-params';

type Props = Omit<
  ComponentProps<typeof QueryParamProvider>,
  'ReactRouterRoute' | 'reachHistory' | 'history' | 'location'
> & {shallow?: boolean};

const pathnameRegex = /[^?#]+/u;

function NextQueryParamProvider({children, shallow = true, ...rest}: Props) {
  const router = useRouter();
  const match = router.asPath.match(pathnameRegex);
  const pathname = match ? match[0] : router.asPath;

  const location = useMemo(() => {
    if (typeof window !== 'undefined') {
      // For SSG, no query parameters are available on the server side,
      // since they can't be known at build time. Therefore to avoid
      // markup mismatches, we need a two-part render in this case that
      // patches the client with the updated query parameters lazily.
      // Note that for SSR `router.isReady` will be `true` immediately
      // and therefore there's no two-part render in this case.
      if (router.isReady) {
        return window.location;
      } else {
        return {search: ''} as Location;
      }
    } else {
      // On the server side we only need a subset of the available
      // properties of `Location`. The other ones are only necessary
      // for interactive features on the client.
      return {search: router.asPath.replace(pathnameRegex, '')} as Location;
    }
  }, [router.asPath, router.isReady]);

  const history = useMemo(() => {
    function createUpdater(routeFn: typeof router.push) {
      return function updater({hash, search}: Location) {
        routeFn(
          {pathname: router.pathname, search, hash},
          {pathname, search, hash},
          {shallow, scroll: false}
        );
      };
    }

    return {
      push: createUpdater(router.push),
      replace: createUpdater(router.replace),
      location
    };
  }, [location, pathname, router, shallow]);

  return (
    <QueryParamProvider {...rest} history={history} location={location}>
      {children}
    </QueryParamProvider>
  );
}

export default memo(NextQueryParamProvider);
