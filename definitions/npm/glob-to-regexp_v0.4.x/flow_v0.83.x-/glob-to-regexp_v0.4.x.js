declare module 'glob-to-regexp' {
  declare type Options = {|
    extended?: boolean,
    globstar?: boolean,
    flags?: string,
  |};

  declare module.exports: (
    glob: string,
    options?: Options,
  ) => RegExp;
}
