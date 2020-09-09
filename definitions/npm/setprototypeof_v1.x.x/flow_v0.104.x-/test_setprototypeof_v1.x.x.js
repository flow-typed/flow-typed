// @flow

import setprototypeof from 'setprototypeof';

const proto = {};
setprototypeof({}, proto);
setprototypeof({}, null);

// $FlowExpectedError
setprototypeof({});

// $FlowExpectedError
setprototypeof(123, NaN);

// $FlowExpectedError
setprototypeof({}, undefined);

// $FlowExpectedError
setprototypeof({}, 'invalid_arg_type');
