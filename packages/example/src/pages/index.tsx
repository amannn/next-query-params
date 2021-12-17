import {
  useQueryParam,
  StringParam,
  withDefault,
  BooleanParam
} from 'next-query-params';
import {useRouter} from 'next/router';
import {ChangeEvent} from 'react';

export default function Index() {
  const [name, setName] = useQueryParam('name', withDefault(StringParam, ''));
  const router = useRouter();
  const [available, setAvailable] = useQueryParam(
    'available',
    withDefault(BooleanParam, false)
  );

  function onNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function onAvailableInputChange(event: ChangeEvent<HTMLInputElement>) {
    setAvailable(event.target.checked);
  }

  return (
    <div>
      <label>
        Name: <input onChange={onNameInputChange} value={name} /> ({name})
      </label>
      <label>
        Available:{' '}
        <input
          checked={available}
          onChange={onAvailableInputChange}
          type="checkbox"
        />
      </label>
      <a href="#hash">Hash link</a>
      <hr />
      <label>
        Router query:
        <pre>{JSON.stringify(router.query, null, 2)}</pre>
      </label>
    </div>
  );
}
