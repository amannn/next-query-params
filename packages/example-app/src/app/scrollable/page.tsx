'use client';

import {useSearchParams} from 'next/navigation';
import {ChangeEvent} from 'react';
import {
  useQueryParam,
  StringParam,
  withDefault,
  BooleanParam,
  useQueryParams
} from 'use-query-params';

export default function Index() {
  const [name, setName] = useQueryParam('name', withDefault(StringParam, ''));
  const searchParams = useSearchParams();
  const [available, setAvailable] = useQueryParam(
    'available',
    withDefault(BooleanParam, false)
  );

  const params = [...searchParams?.entries()].reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  const [, setParams] = useQueryParams({
    name: StringParam,
    available: BooleanParam
  });

  function onNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function onAvailableInputChange(event: ChangeEvent<HTMLInputElement>) {
    setAvailable(event.target.checked);
  }

  function onClearParams() {
    setParams({available: undefined, name: undefined});
  }

  return (
    <div>
      <div style={{height: '100vh'}}>
        This div height is big enough to push input field outside of visible
        area.
      </div>
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
        <pre>{JSON.stringify(params, null, 2)}</pre>
      </label>
      <button onClick={onClearParams} type="button">
        clear
      </button>
    </div>
  );
}
