import httpStatus from 'http-status';

(httpStatus.IM_A_TEAPOT: 418)
// $FlowExpectedError
const x: 500 = httpStatus.NOT_FOUND;
