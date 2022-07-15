import {StringParam, useQueryParam, withDefault} from 'next-query-params';
import {ChangeEvent} from 'react';

type Props = {
  query: Record<string, string>;
};

export default function ShallowTest({query}: Props) {
  const [name, setName] = useQueryParam('name', withDefault(StringParam, ''));

  function onNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  return (
    <div>
      <label>
        Server side query: <pre>{JSON.stringify(query, null, 2)}</pre>
      </label>
      <label>
        Name: <input onChange={onNameInputChange} value={name} /> ({name})
      </label>
    </div>
  );
}
