import {GetServerSidePropsContext} from 'next';
import {NextQueryParamProvider} from 'next-query-params';
import {ComponentProps} from 'react';
import ShallowTest from '../components/ShallowTest';

type Props = ComponentProps<typeof ShallowTest>;

export default function ShallowFalse({query}: Props) {
  return (
    <NextQueryParamProvider shallow={false}>
      <ShallowTest query={query} />
    </NextQueryParamProvider>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      query: context.query
    }
  };
}
