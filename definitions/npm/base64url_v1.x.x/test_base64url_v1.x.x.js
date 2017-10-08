/* @flow */

const base64url = require('base64url');

let asBase64url: string;
asBase64url = base64url(new Buffer(10));
asBase64url = base64url.encode(new Buffer(10));
asBase64url = base64url('some string', 'utf8');
asBase64url = base64url.encode('other string', 'utf8');

let asString: string;
asString = base64url.decode(asBase64url);

let asBuffer: Buffer;
asBuffer = base64url.toBuffer(asBase64url);

let asBase64: string;
asBase64 = base64url.toBase64(asBase64url);
asBase64url = base64url.fromBase64(asBase64);

// $ExpectError
asBuffer = base64url.decode(asBase64url);
