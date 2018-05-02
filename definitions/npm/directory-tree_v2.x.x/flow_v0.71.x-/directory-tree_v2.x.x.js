import type pathType from 'path';

type directoryNodeType = {|
  path: string,
  name: string,
  size: number,
  type: 'directory' | 'file',
  extension?: string,
  children?: Array<directoryNodeType>,
|};

type directoryTreeType = (
  path: string,
  options?: {|
    normalizePath?: (path: string) => string,
    exclude?: (string | Array<string>),
    extensions?: Array<string>,
  |}, 
  onEachFile?: (
    item: {|
      path: string,
      name: string,
    |},
    PATH: pathType,
  ) => void,
) => directoryNodeType;

declare module 'directory-tree' {
  declare module.exports: directoryTreeType
}
