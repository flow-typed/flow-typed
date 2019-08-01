declare module 'copy-to-clipboard' {
  declare export type Options = {|
    debug?: boolean,
    message?: string,
  |};

  declare module.exports: (text: string, options?: Options) => boolean;
}
