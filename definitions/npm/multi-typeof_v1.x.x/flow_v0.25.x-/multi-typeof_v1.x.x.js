declare module 'multi-typeof' {
  declare module.exports: (
    input: mixed,
    types: string|Array<string>
  ) => boolean;
}
