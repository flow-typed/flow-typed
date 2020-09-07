// @flow
import axios from 'axios';
(axios.get('foo'): Promise<*>);
(axios.post('bar', {}, {
  headers: {
    foo: '',
  },
  xsrfCookieName: 'cookie',
}): Promise<*>);
// $FlowExpectedError
(axios.post(123): Promise<*>)

axios({method: 'post', url: 'https://foo.bar'})
