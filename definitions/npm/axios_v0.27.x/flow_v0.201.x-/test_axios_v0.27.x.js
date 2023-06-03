// @flow
import { describe, it } from 'flow-typed-test';
import axios, { AxiosError, toFormData } from 'axios';
import type {
  $AxiosError,
  $AxiosXHR,
  $AxiosXHRConfig,
  $AxiosXHRConfigBase,
  Axios,
  AxiosAdapter,
  AxiosPromise,
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

type Header = {[key: string]: mixed,...};

const handleResponse = (response: $AxiosXHR<mixed>) => {
  (response.data: mixed);
  (response.status: number);
  // $FlowExpectedError[incompatible-cast]
  (response.status: string);
  (response.statusText: string);
  // $FlowExpectedError[incompatible-cast]
  (response.statusText: number);
  (response.headers: ?{...});
  (response.config: $AxiosXHRConfig<mixed>);
  // $FlowExpectedError[incompatible-cast]
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
  // $FlowExpectedError[incompatible-cast]
  (error.isAxiosError: number);

  (error.config: $AxiosXHRConfig<mixed>);
  // $FlowExpectedError[incompatible-cast]
  (error.config: string);

  if (error.response) {
    (error.response.data: mixed);
    (error.response.status: number);
    (error.response.headers: ?{...});
  } else {
    (error.message: string);
  }
};

const config: $AxiosXHRConfigBase<RequestDataUser, User> = {
  baseURL: 'https://api.example.com/',
  transformRequest: (data: RequestDataUser, headers?: Header) => '{"foo":"bar"}',
  transformResponse: [(data: User, headers?: Header) => ({ baz: 'qux' })],
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

    // $FlowExpectedError[incompatible-type]
    axiosConfig.method = 'FOOBAR';
    // $FlowExpectedError[incompatible-type]
    axiosConfig.responseType = 'foobar';
  });
});

describe('Headers', () => {
  it('should take inexact kv pairs with string type as key and mixed type as values', () => {
    const test: Header = { 'foo': 1 };
    const test1: Header = { 'bar': 'baz'};

    // $FlowExpectedError[unsupported-syntax]
    const test2: Header = { 1 : 'false'}
  });
})

describe('Request methods', () => {
  it('returns a promise', () => {
    axios<any, any>({
      url: '/user',
      method: 'get',
    })
      .then(handleResponse)
      .catch(handleError);

    axios<any, any>('/user', {
      method: 'post',
    })
      .then(handleResponse)
      .catch(handleError);

    axios
      .request<any, any>({
        url: '/user',
        method: 'POST',
      })
      .then(handleResponse)
      .catch(handleError);

    axios
      .delete<any>('/user')
      .then(handleResponse)
      .catch(handleError);

    axios
      .get<any>('/user', { params: { id: 12345 } })
      .then(handleResponse)
      .catch(handleError);

    axios
      .get<any>('/user?id=12345')
      .then(handleResponse)
      .catch(handleError);

    axios
      .head<any>('/user')
      .then(handleResponse)
      .catch(handleError);

    axios
      .post<any, any>('/user', { foo: 'bar' })
      .then(handleResponse)
      .catch(handleError);

    axios
      .post<any, any>('/user', { foo: 'bar' }, { headers: { 'X-FOO': 'bar' } })
      .then(handleResponse)
      .catch(handleError);

    axios
      .put<any, any>('/user', { foo: 'bar' })
      .then(handleResponse)
      .catch(handleError);

    axios
      .patch<any, any>('/user', { foo: 'bar' })
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

    instance1<any, any>('/user', {
      method: 'POST',
    })
      .then(handleResponse)
      .catch(handleError);

    instance1
      .request<any, any>({
        url: '/user',
        method: 'POST',
      })
      .then(handleResponse)
      .catch(handleError);

    instance1
      .get<any>('/user?id=12345')
      .then(handleResponse)
      .catch(handleError);

    instance1
      .get<any>('/user', { params: { id: 12345 } })
      .then(handleResponse)
      .catch(handleError);

    instance1
      .post<any, any>('/user', { foo: 'bar' })
      .then(handleResponse)
      .catch(handleError);

    instance1
      .post<any, any>('/user', { foo: 'bar' }, { headers: { 'X-FOO': 'bar' } })
      .then(handleResponse)
      .catch(handleError);
  });
});

describe('Defaults', () => {
  it('setters default config', () => {
    axios.defaults.baseURL = 'https://api.example.com/';
    axios.defaults.headers = {
      'common': {
        'Authorization': 'token'
      }
    }
    axios.defaults.headers =  {
      'post': {
        'X-FOO': 'bar'
      }};
    axios.defaults.timeout = 2500;

    const instance: Axios = axios.create();
    instance.defaults.baseURL = 'https://api.example.com/';
    instance.defaults.headers = {
      'common': {
        'Authorization': 'token'
      }
    };
    axios.defaults.headers =  {
      'post': {
        'X-FOO': 'bar'
      }
    };

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
    // $FlowExpectedError[incompatible-type-arg]
    const promise2: Promise<Array<string>> = axios.all(promises);
  });

  it('axios.spread', () => {
    const fn1 = (a: number, b: number, c: number) => `${a}-${b}-${c}`;
    const fn2: (arr: Array<number>) => string = axios.spread(fn1);
    // $FlowExpectedError[incompatible-call]
    const fn3: (arr: Array<string>) => string = axios.spread(fn1);
  });
});

describe('Cancellation', () => {
  it('use a CancelToken', () => {
    const source: CancelTokenSource = axios.CancelToken.source();

    axios.get<any>('/user', {
      cancelToken: source.token,
    });

    // $FlowExpectedError[incompatible-call]
    axios.get('/something', { cancelToken: source });

    (source.cancel: Canceler);
    source.cancel('Operation has been canceled.');
    // $FlowExpectedError[incompatible-call]
    source.cancel(42);
  });
});

describe('Extended', () => {
  it('create extended', () => {
    class AxiosExtended extends axios.Axios {
      specialPut(...args: Array<any>): AxiosPromise<any, any> {
        return super.put(...args);
      }
    }

    const extended = new AxiosExtended();

    extended
      .put<any, any>('/user', { foo: 'bar' })
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

    // $FlowExpectedError[incompatible-type]
    const uri2: number = axios.getUri();
  });
});

describe('options', () => {
  it('accepts string url only', () => {
    //$FlowExpectedError[incompatible-call]
    axios.options(123)
    axios.options<any>('a url')
  });

  it('takes a url and returns a promise', () => {
    axios
      .options<any>('anyUrl')
      .then(handleResponse)
      .catch(handleError);
  });

  it('takes url and config, returns a promise', () => {
    const axiosConfig:$AxiosXHRConfig<mixed> = {
      url: '/foo',
      method: 'OPTIONS',
    };
    axios
      .options('a url', axiosConfig)
      .then(handleResponse)
      .catch(handleError)
  });
});

describe('formData', () => {
  it('returns FormData', () => {
    const form = toFormData({
      val: 123,
      nested: {
        arr: ['hello', 'world']
      }
    });

    form.keys();
    form.get('val');
    form.getAll('arr[]');

    // $FlowExpectedError[incompatible-call]
    toFormData();
    // $FlowExpectedError[incompatible-call] takes object as first arg
    toFormData('');
  });

  it('can accept another FormData', () => {
    declare var formData: FormData;
    toFormData({}, formData);

    // $FlowExpectedError[incompatible-call] second arg must be FormData type
    toFormData({}, '');
  });
});

describe('AxiosError', () => {
  it('contains static error codes', () => {
    (AxiosError.ERR_NETWORK: string);
    (AxiosError.ERR_BAD_OPTION_VALUE: string);
    (AxiosError.ERR_BAD_OPTION: string);
    (AxiosError.ECONNABORTED: string);
    (AxiosError.ETIMEDOUT: string);
    (AxiosError.ERR_NETWORK: string);
    (AxiosError.ERR_FR_TOO_MANY_REDIRECTS: string);
    (AxiosError.ERR_DEPRECATED: string);
    (AxiosError.ERR_BAD_RESPONSE: string);
    (AxiosError.ERR_BAD_REQUEST: string);
    (AxiosError.ERR_CANCELED: string);
  });
});
