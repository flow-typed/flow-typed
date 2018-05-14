declare module 'directory-tree' {
  import typeof pathType from 'path';

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
    |} | null,
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
