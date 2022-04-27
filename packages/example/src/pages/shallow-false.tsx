import {
  NextQueryParamProvider,
  StringParam,
  useQueryParam,
  withDefault
} from 'next-query-params';
import {ChangeEvent} from 'react';

type ServerSideProps = {
  query: Record<string, string>;
};

function ShallowFalsePage(props: ServerSideProps) {
  const [name, setName] = useQueryParam('name', withDefault(StringParam, ''));

  function onNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <div>
      <label>
        Server side query:
        <span>{Object.values(props.query)}</span>
      </label>
      <label>
        Name: <input onChange={onNameInputChange} value={name} /> ({name})
      </label>
    </div>
  );
}

export default function WithParamProvider(props: ServerSideProps) {
  return (
    <NextQueryParamProvider shallow={false}>
      <ShallowFalsePage query={props.query} />
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
