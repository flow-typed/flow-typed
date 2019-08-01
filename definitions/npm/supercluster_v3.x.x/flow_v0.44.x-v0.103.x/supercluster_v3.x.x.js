declare module 'supercluster' {
  declare type ClusterId = number;

  declare type BBox = [number, number, number, number];

  declare type Zoom = number;

  declare type Feature<T> = {|
    type: 'Feature',
    geometry: {|
      type: 'Point',
      coordinates: [number, number],
    |},
    properties: T,
  |};

  declare type Tile<T> = {|
    features: Array<{|
      type: 1,
      geometry: Array<[number, number]>,
      tags: T,
    |}>,
  |};

  declare class Supercluster<A, B> {
    load(points: Array<Feature<A>>): void;
    getClusters(bbox: BBox, zoom: Zoom): Array<Feature<A | B>>;
    getChildren(clusterId: ClusterId): Array<Feature<A | B>>;
    getLeaves(clusterId: ClusterId): Array<Feature<A>>;
    getTile(zoom: Zoom, x: number, y: number): Tile<A | B>;
    getClusterExpansionZoom(clusterId: ClusterId): Zoom;
  }

  declare type ClusterProps = {|
    cluster: true,
    cluster_id: ClusterId,
    point_count: number,
    point_count_abbreviated: number | string,
  |};

  declare type SuperclusterOptions = {|
    minZoom?: number,
    maxZoom?: number,
    radius?: number,
    extent?: number,
    nodeSize?: number,
    log?: boolean,
  |};

  declare function supercluster<A>(
    options?: SuperclusterOptions
  ): Supercluster<A, ClusterProps>;

  declare function supercluster<A, B>({|
    ...SuperclusterOptions,
    map: (props: A) => B,
  |}): Supercluster<A, ClusterProps>;

  declare function supercluster<A, B: {}>({|
    ...SuperclusterOptions,
    reduce: (accum: B, props: A) => void,
  |}): Supercluster<A, $Exact<{ ...B, ...ClusterProps }>>;

  declare function supercluster<A, B>({|
    ...SuperclusterOptions,
    initial: () => B,
    reduce: (accum: B, props: A) => void,
  |}): Supercluster<A, $Exact<{ ...B, ...ClusterProps }>>;

  declare function supercluster<A, B, C>({|
    ...SuperclusterOptions,
    map: (props: A) => B,
    initial: () => C,
    reduce: (accum: C, props: B) => void,
  |}): Supercluster<A, $Exact<{ ...C, ...ClusterProps }>>;

  declare module.exports: typeof supercluster;
}
