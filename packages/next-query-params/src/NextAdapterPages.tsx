import {useRouter} from 'next/router';
import {ReactElement, useMemo} from 'react';
import {PartialLocation, QueryParamAdapter} from 'use-query-params';

const pathnameRegex = /[^?#]+/u;

type Props = {
  shallow?: boolean;
  children(adapter: QueryParamAdapter): ReactElement | null;
};

function NextAdapter({children, shallow = true}: Props) {
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

  const adapter: QueryParamAdapter = useMemo(() => {
    function createUpdater(routeFn: typeof router.push) {
      return function updater({
        hash,
        search
      }: PartialLocation & {hash?: string}) {
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

  return children(adapter);
}

export default NextAdapter;
