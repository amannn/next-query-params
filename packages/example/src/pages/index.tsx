import {
  useQueryParam,
  StringParam,
  withDefault,
  BooleanParam,
  useQueryParams,
  NextQueryParamProvider
} from 'next-query-params';
import {useRouter} from 'next/router';
import {ChangeEvent} from 'react';

function Index() {
  const [name, setName] = useQueryParam('name', withDefault(StringParam, ''));
  const router = useRouter();
  const [available, setAvailable] = useQueryParam(
    'available',
    withDefault(BooleanParam, false)
  );

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
      <button onClick={onClearParams} type="button">
        clear
      </button>
    </div>
  );
}

export default function WithParamProvider() {
  return (
    <NextQueryParamProvider>
      <Index />
    </NextQueryParamProvider>
  );
}
