declare module 'ms' {
  declare type Options = {long?: boolean};
  
  declare module.exports: {
    (val: string, options?: Options): number;
    (val: number, options?: Options): string;
  };
}
