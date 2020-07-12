// @flow

import turfPolygon from 'turf-polygon';

const ring = [[10, 20], [30, 40], [40, 40], [10, 20]];

turfPolygon(ring);

turfPolygon(ring, {foo: 'bar'});

(turfPolygon(ring, {foo: 'bar'}).properties.foo: string);

// $FlowExpectedError
(turfPolygon(ring, {foo: 'bar'}).properties.foo: number);

// $FlowExpectedError
turfPoint([10, 20, 30]);

// $FlowExpectedError
turfPoint([20, 30], {foo: 'bar'});

// $FlowExpectedError
(turfPoint(ring, ({foo: 'bar'}: {|foo: string|}) ).properties.doesNotExist: string);
