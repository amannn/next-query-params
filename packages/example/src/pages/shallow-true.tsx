import {ComponentProps} from 'react';
import ShallowTest from '../components/ShallowTest';

type ServerSideProps = ComponentProps<typeof ShallowTest>;

export default function WithParamProvider(props: ServerSideProps) {
  return <ShallowTest query={props.query} />;
}

export async function getServerSideProps(props: ServerSideProps) {
  return {
    props: {
      query: props.query
    }
  };
}
