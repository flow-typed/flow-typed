// @flow
import { describe, it } from 'flow-typed-test';
import axios from 'axios';
import type {
  $AxiosError,
  $AxiosXHR,
  $AxiosXHRConfig,
  $AxiosXHRConfigBase,
  Axios,
  AxiosAdapter,
  Canceler,
  CancelTokenSource,
} from 'axios';

type User = {|
  +id: number,
  +name: string,
|};

type RequestDataUser = {|
  +name: string,
|};

const handleResponse = (response: $AxiosXHR<mixed>) => {
  (response.data: mixed);
  (response.status: number);
  // $FlowExpectedError
  (response.status: string);
  (response.statusText: string);
  // $FlowExpectedError
  (response.statusText: number);
  (response.headers: ?{});
  (response.config: $AxiosXHRConfig<mixed>);
  // $FlowExpectedError
  (response.config: string);
};

const handleUserResponse = (
  response: $AxiosXHR<mixed, User> | $AxiosXHR<RequestDataUser, User>
) => {
  (response.data.id: number);
  (response.data.name: string);
};

const handleError = (error: $AxiosError<mixed>) => {
  (error: Error);
  (error.isAxiosError: boolean);
  // $FlowExpectedError
  (error.isAxiosError: number);

  (error.config: $AxiosXHRConfig<mixed>);
  // $FlowExpectedError
  (error.config: string);

  if (error.response) {
    (error.response.data: mixed);
    (error.response.status: number);
    (error.response.headers: ?{});
  } else {
    (error.message: string);
  }
};

const config: $AxiosXHRConfigBase<RequestDataUser, User> = {
  baseURL: 'https://api.example.com/',
  transformRequest: (data: RequestDataUser) => '{"foo":"bar"}',
  transformResponse: [(data: User) => ({ baz: 'qux' })],
  headers: { 'X-FOO': 'bar' },
  params: { id: 12345 },
  paramsSerializer: (params: Object) => 'id=12345',
  timeout: 10000,
  withCredentials: true,
  auth: {
    username: 'janedoe',
    password: 's00pers3cret',
  },
  responseType: 'json',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  onUploadProgress: (progressEvent: any) => {},
  onDownloadProgress: (progressEvent: any) => {},
  maxContentLength: 2000,
  validateStatus: (status: number) => status >= 200 && status < 300,
  maxRedirects: 5,
  proxy: {
    host: '127.0.0.1',
    port: 9000,
  },
  cancelToken: new axios.CancelToken((cancel: Canceler) => {}),
};

describe('Config', () => {
  it('Axios Config', () => {
    const axiosConfig: $AxiosXHRConfig<RequestDataUser, User> = {
      ...config,
      url: '/user',
      data: { name: 'new name' },
      method: 'PUT',
    };

    // $FlowExpectedError
    axiosConfig.method = 'FOOBAR';
    // $FlowExpectedError
    axiosConfig.responseType = 'foobar';
  });
});

describe('Request methods', () => {
  it('returns a promise', () => {
    axios({
      url: '/user',
      method: 'get',
    })
      .then(handleResponse)
      .catch(handleError);

    axios('/user', {
      method: 'post',
    })
      .then(handleResponse)
      .catch(handleError);

    axios
      .request({
        url: '/user',
        method: 'POST',
      })
      .then(handleResponse)
      .catch(handleError);

    axios
      .delete('/user')
      .then(handleResponse)
      .catch(handleError);

    axios
      .get('/user', { params: { id: 12345 } })
      .then(handleResponse)
      .catch(handleError);

    axios
      .get('/user?id=12345')
      .then(handleResponse)
      .catch(handleError);

    axios
      .head('/user')
      .then(handleResponse)
      .catch(handleError);

    axios
      .post('/user', { foo: 'bar' })
      .then(handleResponse)
      .catch(handleError);

    axios
      .post('/user', { foo: 'bar' }, { headers: { 'X-FOO': 'bar' } })
      .then(handleResponse)
      .catch(handleError);

    axios
      .put('/user', { foo: 'bar' })
      .then(handleResponse)
      .catch(handleError);

    axios
      .patch('/user', { foo: 'bar' })
      .then(handleResponse)
      .catch(handleError);

    axios
      .get<User>('/user?id=12345')
      .then(handleUserResponse)
      .catch(handleError);

    axios
      .get<User>('/user', { params: { id: 12345 } })
      .then(handleUserResponse)
      .catch(handleError);

    axios
      .head<User>('/user')
      .then(handleUserResponse)
      .catch(handleError);

    axios
      .delete<User>('/user')
      .then(handleUserResponse)
      .catch(handleError);

    axios
      .post<RequestDataUser, User>('/user', { name: 'new name' })
      .then(handleUserResponse)
      .catch(handleError);

    axios
      .post<RequestDataUser, User>(
      '/user',
        { name: 'new name' },
        { headers: { 'X-FOO': 'bar' } }
    )
      .then(handleUserResponse)
      .catch(handleError);

    axios
      .put<RequestDataUser, User>('/user', { name: 'new name' })
      .then(handleUserResponse)
      .catch(handleError);

    axios
      .patch<RequestDataUser, User>('/user', { name: 'new name' })
      .then(handleUserResponse)
      .catch(handleError);
  });
});

describe('Create instance', () => {
  it('returns a callable axios instance', () => {
    const instance1: Axios = axios.create();
    const instance2: Axios = axios.create(config);

    instance1('/user', {
      method: 'POST',
    })
      .then(handleResponse)
      .catch(handleError);

    instance1
      .request({
        url: '/user',
        method: 'POST',
      })
      .then(handleResponse)
      .catch(handleError);

    instance1
      .get('/user?id=12345')
      .then(handleResponse)
      .catch(handleError);

    instance1
      .get('/user', { params: { id: 12345 } })
      .then(handleResponse)
      .catch(handleError);

    instance1
      .post('/user', { foo: 'bar' })
      .then(handleResponse)
      .catch(handleError);

    instance1
      .post('/user', { foo: 'bar' }, { headers: { 'X-FOO': 'bar' } })
      .then(handleResponse)
      .catch(handleError);
  });
});

describe('Defaults', () => {
  it('setters default config', () => {
    axios.defaults.baseURL = 'https://api.example.com/';
    axios.defaults.headers.common['Authorization'] = 'token';
    axios.defaults.headers.post['X-FOO'] = 'bar';
    axios.defaults.timeout = 2500;

    const instance: Axios = axios.create();
    instance.defaults.baseURL = 'https://api.example.com/';
    instance.defaults.headers.common['Authorization'] = 'token';
    instance.defaults.headers.post['X-FOO'] = 'bar';
    instance.defaults.timeout = 2500;
  });
});

describe('Interceptors', () => {
  it('use a request interceptor', () => {
    const requestInterceptorId: number = axios.interceptors.request.use(
      (config: $AxiosXHRConfig<mixed>) => config,
      (error: mixed) => Promise.reject(error)
    );

    axios.interceptors.request.eject(requestInterceptorId);

    axios.interceptors.request.use(
      (config: $AxiosXHRConfig<mixed>) => Promise.resolve(config),
      (error: mixed) => Promise.reject(error)
    );

    axios.interceptors.request.use((config: $AxiosXHRConfig<mixed>) => config);
    axios.interceptors.request.use((config: $AxiosXHRConfig<mixed>) =>
      Promise.resolve(config)
    );
  });

  it('use a response interceptor', () => {
    const responseInterceptorId: number = axios.interceptors.response.use(
      (response: $AxiosXHR<mixed>) => response,
      (error: mixed) => Promise.reject(error)
    );

    axios.interceptors.response.eject(responseInterceptorId);

    axios.interceptors.response.use(
      (response: $AxiosXHR<mixed>) => Promise.resolve(response),
      (error: mixed) => Promise.reject(error)
    );

    axios.interceptors.response.use((response: $AxiosXHR<mixed>) => response);
    axios.interceptors.response.use((response: $AxiosXHR<mixed>) =>
      Promise.resolve(response)
    );
  });
});

describe('Adapters', () => {
  it('use adapter', () => {
    const adapter: AxiosAdapter = (config: $AxiosXHRConfig<mixed>) => {
      const response: $AxiosXHR<mixed> = {
        data: { foo: 'bar' },
        status: 200,
        statusText: 'OK',
        headers: { 'X-FOO': 'bar' },
        config,
        request: {},
      };
      return Promise.resolve(response);
    };

    axios.defaults.adapter = adapter;
  });
});

describe('Concurrency', () => {
  it('axios.all', () => {
    const promises = [Promise.resolve(1), Promise.resolve(2)];

    const promise: Promise<Array<number>> = axios.all(promises);
    // $FlowExpectedError
    const promise2: Promise<Array<string>> = axios.all(promises);
  });

  it('axios.spread', () => {
    const fn1 = (a: number, b: number, c: number) => `${a}-${b}-${c}`;
    const fn2: (arr: Array<number>) => string = axios.spread(fn1);
    // $FlowExpectedError
    const fn3: (arr: Array<string>) => string = axios.spread(fn1);
  });
});

describe('Cancellation', () => {
  it('use a CancelToken', () => {
    const source: CancelTokenSource = axios.CancelToken.source();

    axios.get('/user', {
      cancelToken: source.token,
    });

    // $FlowExpectedError
    axios.get('/something', { cancelToken: source });

    (source.cancel: Canceler);
    source.cancel('Operation has been canceled.');
    // $FlowExpectedError
    source.cancel(42);
  });
});

describe('Extended', () => {
  it('create extended', () => {
    class AxiosExtended extends axios.Axios {
      specialPut(...args) {
        return super.put(...args);
      }
    }

    const extended = new AxiosExtended();

    extended
      .put('/user', { foo: 'bar' })
      .then(handleResponse)
      .catch(handleError);

    extended
      .specialPut('/user', { foo: 'bar' })
      .then(handleResponse)
      .catch(handleError);
  });
});

describe('getUri', () => {
  it('returns a string', () => {
    const uri: string = axios.getUri({
      method: 'post',
      url: '/user/12345',
      params: {
        foo: 'bar',
      },
    });

    // $FlowExpectedError
    const uri2: number = axios.getUri();
  });
});
