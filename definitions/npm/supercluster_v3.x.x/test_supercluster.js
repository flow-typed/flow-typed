// @flow
import supercluster from 'supercluster';

/*
 * Test default function signature
 */

const simpleIndex = supercluster();

simpleIndex.load([
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [0, 0],
    },
    properties: {
      slug: 'foo',
    },
  },
]);

const points = simpleIndex.getClusters([0, 0, 0, 0], 0);

points.forEach(point => {
  // Can't make any assumptions on the shape of properties at this point
  // $FlowExpectedError
  point.properties.slug;

  // Test branching for cluster and a leaf
  if (point.properties.cluster) {
    (point.properties.cluster_id: number);
    // $FlowExpectedError
    (point.properties.slug: string);
  } else {
    (point.properties.slug: string);
    // $FlowExpectedError
    (point.properties.cluster_id: number);
  }
});

simpleIndex.getChildren(123).forEach(point => {
  if (point.properties.cluster) {
    (point.properties.cluster_id: number);
    // $FlowExpectedError
    (point.properties.slug: string);
  } else {
    (point.properties.slug: string);
    // $FlowExpectedError
    (point.properties.cluster_id: number);
  }
});

simpleIndex.getLeaves(123).forEach(leaf => {
  // Can safely assume the leaf shape
  (leaf.properties.slug: string);
  // $FlowExpectedError
  leaf.properties.cluster;
});

simpleIndex.getTile(0, 0, 0).features.forEach(feature => {
  if (feature.tags.cluster) {
    (feature.tags.cluster_id: number);
    // $FlowExpectedError
    (point.properties.slug: string);
  } else {
    (feature.tags.slug: string);
    // $FlowExpectedError
    (point.properties.cluster_id: number);
  }
});

(simpleIndex.getClusterExpansionZoom(123): number);

/*
 * Test function signature with initial and reduce
 */

const reduceIndex = supercluster({
  initial: () => ({ slugs: [] }),
  reduce: (accum, props) => {
    (accum.slugs: []);
    // $FlowExpectedError
    accum.foo;

    (props.slug: string);
    // $FlowExpectedError
    props.foo;

    accum.slugs.push(props.slug);
  },
});

reduceIndex.load([
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [0, 0],
    },
    properties: {
      slug: 'foo',
    },
  },
]);

reduceIndex.getClusters([0, 0, 0, 0], 0).forEach(point => {
  if (point.properties.cluster) {
    (point.properties.cluster_id: number);
    (point.properties.slugs: Array<string>);
    // $FlowExpectedError
    (point.properties.slugs: Array<number>);
  }
});

/*
 * Test function signature with map, initial, and reduce
 */

const mapReduceIndex = supercluster({
  map: props => {
    (props.slug: string);
    // $FlowExpectedError
    props.foo;

    return {
      thumb: `/images/${props.slug}.png`,
    };
  },
  initial: () => ({ thumbs: [] }),
  reduce: (accum, props) => {
    (props.thumb: string);
    // $FlowExpectedError
    props.slug;

    accum.thumbs.push(props.thumb);
  },
});

mapReduceIndex.load([
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [0, 0],
    },
    properties: {
      slug: 'foo',
    },
  },
]);

mapReduceIndex.getClusters([0, 0, 0, 0], 0).forEach(point => {
  if (point.properties.cluster) {
    (point.properties.cluster_id: number);
    (point.properties.thumbs: Array<string>);
    // $FlowExpectedError
    (point.properties.thumbs: Array<number>);
  } else {
    (point.properties.slug: string);
    // $FlowExpectedError
    point.properties.thumb;
  }
});
