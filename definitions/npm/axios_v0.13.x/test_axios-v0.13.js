// @flow
import axios from 'axios';
(axios.get('foo'): Promise<*>);
(axios.post('bar', {}, {
  headers: {
    foo: 'asdf',
  },
  xsrfCookieName: 'cookie',
}): Promise<*>);
// $ExpectError
(axios.post(123): Promise<*>)

const client = axios.create();
