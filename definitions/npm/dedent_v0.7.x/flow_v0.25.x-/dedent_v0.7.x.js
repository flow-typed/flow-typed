// @flow

declare module 'dedent' {
  declare module.exports: (
    strings: string | Array<string>,
    ...values: Array<string>
  ) => string;
}
