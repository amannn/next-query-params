import React, {ComponentProps, memo, useMemo} from 'react';
import {QueryParamProvider} from 'use-query-params';
import NextAdapter from './NextAdapter';

type Props = Omit<ComponentProps<typeof QueryParamProvider>, 'adapter'> & {
  shallow?: boolean;
};

function NextQueryParamProvider({shallow = true, ...rest}: Props) {
  const Adapter = useMemo(
    () =>
      shallow !== undefined
        ? (props: ComponentProps<typeof NextAdapter>) => (
            <NextAdapter {...props} shallow={shallow} />
          )
        : NextAdapter,
    [shallow]
  );

  return <QueryParamProvider adapter={Adapter} {...rest} />;
}

export default memo(NextQueryParamProvider);
