import {
  useQueryParam,
  StringParam,
  withDefault,
  BooleanParam
} from 'next-query-params';
import {ChangeEvent} from 'react';

export default function Index() {
  const [name, setName] = useQueryParam('name', withDefault(StringParam, ''));
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
    </div>
  );
}
