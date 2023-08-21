declare module 'copy-dir' {
  declare type Options = {|
    /**
     * keep addTime or modifyTime if true
     */
    utimes?:
      | boolean
      | {|
        atime: string | number | Date,
        mtime: string | number | Date,
      |},
    /**
     * keep file mode if true
     */
    mode?: boolean | number,
    /**
     * cover if file exists
     */
    cover?: boolean,
    /**
     * file filter
     */
    filter?:
      | boolean
      | (state: string, filepath: string, filename: string) => boolean,
  |};

  declare type Callback = (error: Error) => void

  declare module.exports: {|
    (from: string, to: string, options?: Options, callback?: Callback): void,
    sync: (from: string, to: string, options?: Options) => void,
  |};
}
