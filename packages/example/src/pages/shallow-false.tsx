import {NextQueryParamProvider} from 'next-query-params';
import {ComponentProps} from 'react';
import ShallowTest from '../components/ShallowTest';

type ServerSideProps = ComponentProps<typeof ShallowTest>;

export default function WithParamProvider(props: ServerSideProps) {
  return (
    <NextQueryParamProvider shallow={false}>
      <ShallowTest query={props.query} />
    </NextQueryParamProvider>
  );
}

export async function getServerSideProps(props: ServerSideProps) {
  return {
    props: {
      query: props.query
    }
  };
}
