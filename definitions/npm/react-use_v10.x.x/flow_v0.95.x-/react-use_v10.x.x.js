declare module 'react-use' {
  declare module.exports: {
    usePrevious<T>(state: T): ?T,
    useEffectOnce(effect: () => (() => void) | void): void,
  };
}
