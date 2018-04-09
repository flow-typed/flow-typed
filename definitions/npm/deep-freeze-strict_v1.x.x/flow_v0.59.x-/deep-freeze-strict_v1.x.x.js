declare module 'deep-freeze-strict' {
  declare module.exports: <T>(o: T) => $ReadOnly<T>
}
