declare module 'camelcase-keys' {
  declare function exports<TValue>(
    input: { [key: string]: TValue },
    options?: { exclude?: Array<string|RegExp> }
  ): { [key: string]: TValue }
}
