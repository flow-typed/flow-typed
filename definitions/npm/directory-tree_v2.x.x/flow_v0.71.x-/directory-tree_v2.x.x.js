import type pathType from 'path';

declare module 'directory-tree' {
  declare type directoryNodeType = {|
    path: string,
    name: string,
    size: number,
    type: 'directory' | 'file',
    extension?: string,
    children?: Array<directoryNodeType>,
  |};

  declare type directoryTreeType = (
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

  declare module.exports: directoryTreeType;
}
