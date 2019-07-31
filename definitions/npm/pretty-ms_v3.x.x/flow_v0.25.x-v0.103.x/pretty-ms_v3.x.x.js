type Options = {
  secDecimalDigits?: number,
  msDecimalDigits?: number,
  compact?: boolean,
  verbose?: boolean
};

declare module 'pretty-ms' {
  declare module.exports: (ms: number, opts?: Options) => string;
}
