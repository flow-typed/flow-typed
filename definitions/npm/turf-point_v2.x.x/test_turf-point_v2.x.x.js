// @flow

import turfPoint from 'turf-point';

turfPoint([10, 20]);

// $FlowExpectedError
turfPoint([10, 20, 30]);

turfPoint([20, 30], {foo: 'bar'});

(turfPoint([20, 30], {foo: 'bar'}).properties.foo: string);

// $FlowExpectedError
(turfPoint([20, 30], ({foo: 'bar'}: {|foo: string|}) ).properties.doesNotExist: string);
