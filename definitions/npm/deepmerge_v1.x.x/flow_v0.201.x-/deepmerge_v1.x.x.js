type DeepMergeOptionsType = {
  arrayMerge?: (dest: Array<any>, source: Array<any>, options?: DeepMergeOptionsType) => Array<any>,
  clone?: boolean,
  ...
};

type DeepMergeObjects = {
  (a: Object, b: Object, options?: DeepMergeOptionsType): Object,
  all: (objects: Array<Object>, options?: DeepMergeOptionsType) => Object,
  ...
};

type DeepMergeArrays = {
  (a: Array<any>, b: Array<any>, options?: DeepMergeOptionsType): Array<any>,
  all: (objects: Array<Array<any>>, options?: DeepMergeOptionsType) => Array<any>,
  ...
};

declare module 'deepmerge' {
  declare module.exports: DeepMergeObjects & DeepMergeArrays;
}
