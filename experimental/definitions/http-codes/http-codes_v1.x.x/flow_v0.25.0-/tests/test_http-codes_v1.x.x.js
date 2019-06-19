import HttpCodes from 'http-codes';

(HttpCodes.IM_A_TEAPOT: 418)
// $ExpectError
const x: 500 = HttpCodes.NOT_FOUND;
