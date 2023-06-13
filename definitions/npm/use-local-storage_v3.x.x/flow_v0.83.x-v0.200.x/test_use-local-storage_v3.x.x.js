// @flow
import { describe, it, test } from 'flow-typed-test';
import useLocalStorage from 'use-local-storage';

describe('use-local-storage', () => {
  it('works', () => {
    const [username, setUsername] = useLocalStorage('name', '');
    setUsername();
    setUsername('test');
    username.toLowerCase();

    const [a, setA] = useLocalStorage<number>('name', 1);
    setA(1);
  });

  it('errors', () => {
    // $FlowExpectedError[incompatible-call]
    useLocalStorage<number>('name', 'test');

    const [number, setNumber] = useLocalStorage<number>('name', 1);
    // $FlowExpectedError[incompatible-call]
    setNumber('test')
  });

  test('options', () => {
    useLocalStorage('name', '', {});
    useLocalStorage('name', '', {
      serializer: (obj) => {
        /* Serialize logic */
        return '';
      },
      parser: (str) => {
        /* Parse logic */
        return '';
      },
      logger: console.log,
      syncData: false,
    });

    // $FlowExpectedError[incompatible-shape]
    useLocalStorage('name', '', '');
  });
});
