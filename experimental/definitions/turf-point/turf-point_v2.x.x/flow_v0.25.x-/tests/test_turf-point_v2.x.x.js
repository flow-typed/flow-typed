// @flow

import turfPoint from 'turf-point';

turfPoint([10, 20]);

// $ExpectError
turfPoint([10, 20, 30]);

turfPoint([20, 30], {foo: 'bar'});

(turfPoint([20, 30], {foo: 'bar'}).properties.foo: string);

// $ExpectError
(turfPoint([20, 30], ({foo: 'bar'}: {|foo: string|}) ).properties.doesNotExist: string);
