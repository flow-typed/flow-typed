// @flow

const url = require('url');
url.format(url.parse('https://example.com/foo'));

// $FlowExpectedError[incompatible-cast]
(url.parse('http://example.com/?foo=bar').query: empty); // error, string | null
// $FlowExpectedError[incompatible-cast]
(url.parse('http://example.com/?foo=bar', true).query: empty); // error, object

function f(parseQueryString: boolean) {
  // $FlowExpectedError[incompatible-cast]
  (url.parse('http://example.com/?foo=bar', parseQueryString).query: empty); // error, string | null | object
}

(url.fileURLToPath('file:///'): string);
