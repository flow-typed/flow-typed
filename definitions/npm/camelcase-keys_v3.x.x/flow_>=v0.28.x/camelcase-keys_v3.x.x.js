declare module 'camelcase-keys' {
  declare module.exports: <TValue>(
    input: { [key: string]: TValue },
    options?: { exclude?: Array<string|RegExp> }
  ) => { [key: string]: TValue }
}
