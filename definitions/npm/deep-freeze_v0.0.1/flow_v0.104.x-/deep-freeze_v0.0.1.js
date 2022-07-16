declare module 'deep-freeze' {
  declare type deepFreezeFnType = {|
    <T>(a: $ReadOnlyArray<T>): $ReadOnlyArray<DeepReadOnly<T>>,
    <T>(a: T[]): $ReadOnlyArray<DeepReadOnly<T>>,
    <T: boolean|string|number>(p: T): T,
    <T>(o: T): $ReadOnly<
      $ObjMapi<T, <P>(P) => DeepReadOnly<$ElementType<T, P>>>
    >,
    <T: Function>(f: T): T,
  |};

  declare export type DeepReadOnly<T> = $Call<deepFreezeFnType, T>

  declare module.exports: deepFreezeFnType;
}
