import {GetServerSidePropsContext} from 'next';
import {ComponentProps} from 'react';
import ShallowTest from '../components/ShallowTest';

type Props = ComponentProps<typeof ShallowTest>;

export default function ShallowTrue({query}: Props) {
  return <ShallowTest query={query} />;
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      query: context.query
    }
  };
}
