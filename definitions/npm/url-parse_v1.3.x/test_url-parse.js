/* @flow */

import URL, { type Url } from 'url-parse';

const url: Url = new URL('address', 'location', true);

const url2 = new URL('address', 'location', (queryString: string) => ({}));

// $FlowExpectedError Parameter 'parser' must be a function or a boolean
const url3 = new URL('address', 'location', 'badParam');

// $FlowExpectedError number. This type is incompatible with string
const url4 = new URL('address', 'location', (queryString: number) => ({}));

// $FlowExpectedError Function 'parser' must return an Object
const url5 = new URL('address', 'location', (queryString: string) => 'string');

// $FlowExpectedError Function 'parser' must be provided a single parameter
const url6 = new URL('address', 'location', (queryString: string, secondParam: string) => ({}));

const url7 = new URL('address', true);
const url8 = new URL('address', 'location');

// $FlowExpectedError Second parameter must be a string, a boolean, an object or a function
const url9 = new URL('address', 1);
const url10 = new URL('address');
// $FlowExpectedError First parameter must be a string
const url11 = new URL(1);
// $FlowExpectedError The function must be provided 1, 2 or 3 parameters
const url12 = new URL('address', 'location', true, 2);
// $FlowExpectedError string. This type is incompatible with Url
const url13: string = new URL('address', 'location', true);

const protocol: string = url.protocol;
// $FlowExpectedError number. This type is incompatible with string
const protocol2: number = url.protocol;

const slashes: boolean = url.slashes;
// $FlowExpectedError number. This type is incompatible with boolean
const slashes2: number = url.slashes;

const auth: string = url.auth;
// $FlowExpectedError number. This type is incompatible with string
const auth2: number = url.auth;

const username: string = url.username;
// $FlowExpectedError number. This type is incompatible with string
const username2: number = url.username;

const password: string = url.password;
// $FlowExpectedError number. This type is incompatible with boolean
const password2: number = url.password;

const host: string = url.host;
// $FlowExpectedError number. This type is incompatible with boolean
const host2: number = url.host;

const hostname: string = url.hostname;
// $FlowExpectedError number. This type is incompatible with boolean
const hostname2: number = url.hostname;

const port: string = url.port;
// $FlowExpectedError number. This type is incompatible with boolean
const port2: number = url.port;

const pathname: string = url.pathname;
// $FlowExpectedError number. This type is incompatible with boolean
const pathname2: number = url.pathname;

const query: Object = url.query;
const query2: { [key: string]: string } = url.query;

// $FlowExpectedError number. This type is incompatible with Object
const query3: number = url.query;

const hash: string = url.hash;
// $FlowExpectedError number. This type is incompatible with boolean
const hash2: number = url.hash;

const href: string = url.href;
// $FlowExpectedError number. This type is incompatible with boolean
const href2: number = url.href;

const origin: string = url.origin;
// $FlowExpectedError number. This type is incompatible with boolean
const origin2: number = url.origin;

const newUrl: Url = url.set('key', 'value');
// $FlowExpectedError string. This type is incompatible with Url
const newUrl2: string = url.set('key', 'value');

url.set('key', 'value', (query: mixed) => ({}));

url.set('key', 'value', (query: mixed) => {
  // $FlowExpectedError Return type void is incompatible with return type Object
  return;
});

url.set('key', 'value', true);

// $FlowExpectedError Third parameter must be a boolean or an Object
url.set('key', 'value', 'thirdParam');

// $FlowExpectedError Function must not have more than 3 parameters
url.set('key', 'value', true, 'fourthParam');

// $FlowExpectedError First parameter must be a string
url.set(1, 'value');

const stringified: string = url.toString();
// $FlowExpectedError number. This type is incompatible with string
const stringified2: number = url.toString();
// $FlowExpectedError toString(). This function doesn't take any parameters
const stringified3 = url.toString('string');

const loc: Object = url.lolcation();
// $FlowExpectedError string. This type is incompatible with Object
const loc2: string = url.lolcation();

const loc3 = url.lolcation({});
const loc4 = url.lolcation('location');

// $FlowExpectedError This function requires an Object or string parameter
const loc5 = url.lolcation(1);

// $FlowExpectedError Too many parameters. This function takes 0 or 1 parameters.
const loc6 = url.lolcation('location', 'secondParam');
