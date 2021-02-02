// @flow

import distance from '@turf/distance';

const pointA = {
  type: 'Feature',
  geometry: { type: 'Point', coordinates: [10, 20] },
  properties: {}
};

const howFar: number = distance(pointA, pointA, 'miles');

distance(pointA, pointA);

// $FlowExpectedError
distance(pointA, pointA, 'foo');

// $FlowExpectedError
(distance(pointA, pointA, 'meters') : string);

// $FlowExpectedError
distance(pointA, 'meters');
