import {StringParam, useQueryParam, withDefault} from 'next-query-params';
import {ChangeEvent} from 'react';

type ServerSideProps = {
  query: Record<string, string>;
};

export default function ShallowTest(props: ServerSideProps) {
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
