// @flow

import turfPolygon from 'turf-polygon';

const ring = [[10, 20], [30, 40], [40, 40], [10, 20]];

turfPolygon(ring);

turfPolygon(ring, {foo: 'bar'});

(turfPolygon(ring, {foo: 'bar'}).properties.foo: string);

// $ExpectError
(turfPolygon(ring, {foo: 'bar'}).properties.foo: number);

// $ExpectError
turfPoint([10, 20, 30]);

// $ExpectError
turfPoint([20, 30], {foo: 'bar'});

// $ExpectError
(turfPoint(ring, ({foo: 'bar'}: {|foo: string|}) ).properties.doesNotExist: string);
