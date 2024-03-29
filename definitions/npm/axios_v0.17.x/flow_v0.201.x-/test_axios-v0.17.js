// @flow
import axios from 'axios';
import type {
  $AxiosXHR,
  CancelTokenSource,
  Cancel,
} from 'axios';
(axios.get('foo'): Promise<any>);
(axios.post('bar', {}, {
  headers: {
    foo: 'asdf',
  },
  xsrfCookieName: 'cookie',
}): Promise<any>);
// $FlowExpectedError
(axios.post(123): Promise<any>);

(axios('url'): Promise<any>);

const client = axios.create();

client.post('/something', {});

(client.defaults.headers.common.Authorization = 'test')

const source: CancelTokenSource = axios.CancelToken.source();
source.token.promise.then((cancel: Cancel) => {
  const x: string = cancel.message;
});
client.get('/something', {
  cancelToken: source.token,
});
// $FlowExpectedError
client.get('/something', {
  cancelToken: source,
});

source.cancel();
source.cancel('canceled');
// $FlowExpectedError
source.cancel(42);

// $FlowExpectedError
client.post(232);

type Data = {
    items: Array<string>,
    ...
};

axios.get('/user', {
  params: {
    ID: 12345
  }
}).then((res) => {
    res.data[0];
});

// Send a POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
}).then(r => {
  // $FlowExpectedError
  (r.status: string);
});

class AxiosExtended extends axios.Axios {
  specialPut(...args) {
    return super.put(...args);
  }
}

const extended = new AxiosExtended();
axios.all([
  extended.specialPut('foo')
    .then((r) => {
        // $FlowExpectedError
        (r.statusText: number)
    }),
    Promise.reject(12)
]).then(([a, b]) => {
    // $FlowExpectedError
    (a: string);
})
