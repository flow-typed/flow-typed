declare module 'ms' {
  declare type Options = {long?: boolean};

  declare module.exports: {
    (val: string|number, options?: Options): string|number;
  };
}
