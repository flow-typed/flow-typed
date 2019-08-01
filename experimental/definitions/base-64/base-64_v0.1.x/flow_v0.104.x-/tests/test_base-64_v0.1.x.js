/* @flow */

const base64 = require('base-64');

let asBase64: string;
asBase64 = base64.encode('some string');

let asString: string;
asString = base64.decode('c29tZSBzdHJpbmc=');

// $ExpectError
asString = base64.decode(null);
