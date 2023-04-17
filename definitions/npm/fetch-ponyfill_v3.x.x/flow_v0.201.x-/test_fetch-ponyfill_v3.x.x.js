import _fetch from 'fetch-ponyfill';

const url = 'https://www.github.com';
//$FlowExpectedError
_fetch(url)

import FetchConstructor from 'fetch-ponyfill';
const {fetch, Request: _Request, Response: _Response, Headers: _Headers} = FetchConstructor();
(_Request: Request);
(_Response: Response);
(_Headers: Headers);

fetch(url);

fetch(url, {
  headers: {
    foo: 'bar'
  },
  mode: 'cors',
  method: 'PATCH',
  cache: 'default',
})
.then(function(res: Response) {
  //$FlowExpectedError
  res.xml();
  res.arrayBuffer();
  res.blob();
  res.formData();
  res.text();
  return res.json();
})
.then(function(json: string) {
  return json.split(',');
})


const _fetch1 = FetchConstructor({Promise, XMLHttpRequest}).fetch;
//$FlowExpectedError
const _fetch1 = FetchConstructor({Promise: () => null}).fetch;
