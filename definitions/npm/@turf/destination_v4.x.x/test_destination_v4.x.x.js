// @flow

import destination from '@turf/destination';

const pointA = {
  type: 'Feature',
  geometry: { type: 'Point', coordinates: [10, 20] },
  properties: {}
}

destination(pointA, 100, 32, 'meters');

const notAPoint = {
  type: 'NotAFeature',
  geometry: { type: 'NotAType', coordinates: [] },
  properties: {}
}

// $ExpectError
destination(notAPoint, 100, 32, 'meters');

// $ExpectError
destination(pointA, 100, 32);

// $ExpectError
destination(pointA, 100, 32, 'foobar');

// $ExpectError
destination(pointA, 100, 'wow', 'meters');
