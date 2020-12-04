import HttpCodes from 'http-codes';

(HttpCodes.IM_A_TEAPOT: 418)
// $FlowExpectedError
const x: 500 = HttpCodes.NOT_FOUND;
