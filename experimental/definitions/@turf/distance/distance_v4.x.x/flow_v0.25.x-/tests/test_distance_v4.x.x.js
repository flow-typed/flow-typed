// @flow

import distance from '@turf/distance';

const pointA = {
  type: 'Feature',
  geometry: { type: 'Point', coordinates: [10, 20] },
  properties: {}
};

const howFar: number = distance(pointA, pointA, 'miles');

distance(pointA, pointA);

// $ExpectError
distance(pointA, pointA, 'foo');

// $ExpectError
(distance(pointA, pointA, 'meters') : string);

// $ExpectError
distance(pointA, 'meters');
