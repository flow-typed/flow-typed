// @flow

import setprototypeof from 'setprototypeof';

const proto = {};
setprototypeof({}, proto);
setprototypeof({}, null);

// $ExpectError
setprototypeof({});

// $ExpectError
setprototypeof(123, NaN);

// $ExpectError
setprototypeof({}, undefined);

// $ExpectError
setprototypeof({}, 'invalid_arg_type');
