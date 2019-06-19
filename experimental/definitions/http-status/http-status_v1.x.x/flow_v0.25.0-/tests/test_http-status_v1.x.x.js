import httpStatus from 'http-status';

(httpStatus.IM_A_TEAPOT: 418)
// $ExpectError
const x: 500 = httpStatus.NOT_FOUND;
