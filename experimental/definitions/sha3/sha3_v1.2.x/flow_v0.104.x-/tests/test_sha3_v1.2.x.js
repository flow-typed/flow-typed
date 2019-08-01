// @flow

import sha3 from 'sha3';

const hash = new sha3.SHA3Hash(224);
hash.update('foo');
hash.digest('hex');

// $ExpectError
const hashFail = new sha3.SHA3Hash(1024);

// $ExpectError
hashFail.digest('base64');
