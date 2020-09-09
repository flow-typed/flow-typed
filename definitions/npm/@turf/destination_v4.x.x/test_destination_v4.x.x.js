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

// $FlowExpectedError
destination(notAPoint, 100, 32, 'meters');

// $FlowExpectedError
destination(pointA, 100, 32);

// $FlowExpectedError
destination(pointA, 100, 32, 'foobar');

// $FlowExpectedError
destination(pointA, 100, 'wow', 'meters');
