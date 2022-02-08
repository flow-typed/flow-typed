declare module 'copy-pkg' {
  declare type Options = {|
    normalize?: boolean,
    ignore?: Array<string>,
    only?: Array<string>,
  |};

  declare module.exports: {|
    (src: string, dest: string, options?: Options): Promise<void>,
    sync: (src: string, dest: string, options?: Options) => void,
  |};
}
