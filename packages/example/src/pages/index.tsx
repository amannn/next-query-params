import {
  useQueryParam,
  StringParam,
  withDefault,
  BooleanParam,
  useQueryParams
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

  const [params, setParams] = useQueryParams({'name': StringParam, 'available': BooleanParam})

  function onNameInputChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function onAvailableInputChange(event: ChangeEvent<HTMLInputElement>) {
    setAvailable(event.target.checked);
  }

  function onClearParams(){
    setParams({available: undefined, name: undefined})
  }

  return (
    <div>
      <p>
        My name is <input onChange={onNameInputChange} value={name} /> ({name})
      </p>
      <label>
        Available{' '}
        <input
          checked={available}
          onChange={onAvailableInputChange}
          type="checkbox"
        />
      </label>

      <hr />
      <p>
        after clicking on: <a href="#sync">a hash link</a> the url should
        contain the hash despite changing params
      </p>
      <hr />

      <p>
        the router query object provided by next should contain all query
        params:
      </p>
      <pre>{JSON.stringify(router.query, null, 2)}</pre>
      <button onClick={onClearParams}>clear</button>

    </div>
  );
}
