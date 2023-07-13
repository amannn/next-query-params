'use client';

import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {ReactElement, useMemo} from 'react';
import {PartialLocation, QueryParamAdapter} from 'use-query-params';

type Props = {
  children(adapter: QueryParamAdapter): ReactElement | null;
};

export default function NextAdapterApp({children}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const adapter = useMemo(() => {
    function getUrl(location: PartialLocation) {
      let url = pathname;
      if (location.search) {
        url += location.search;
      }
      if (window.location.hash) {
        url += window.location.hash;
      }

      return url;
    }

    return {
      replace(location: PartialLocation) {
        router.replace(getUrl(location));
      },
      push(location: PartialLocation) {
        router.push(getUrl(location));
      },
      location: {
        search: searchParams.toString()
      }
    };
  }, [searchParams, pathname, router]);

  return children(adapter);
}
