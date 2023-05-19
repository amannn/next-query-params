import {GetServerSidePropsContext} from 'next';
import {NextAdapter} from 'next-query-params';
import {ComponentProps} from 'react';
import {QueryParamProvider} from 'use-query-params';
import ShallowTest from '../components/ShallowTest';

type Props = ComponentProps<typeof ShallowTest>;

function Adapter(props: ComponentProps<typeof NextAdapter>) {
  return <NextAdapter {...props} shallow={false} />;
}

export default function ShallowFalse({query}: Props) {
  return (
    <QueryParamProvider adapter={Adapter}>
      <ShallowTest query={query} />
    </QueryParamProvider>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      query: context.query
    }
  };
}
