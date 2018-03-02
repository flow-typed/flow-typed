declare module 'react-loadable' {
  declare type LoaderResult<T> = T | { 'default': T };

  declare module.exports: <P>(opts: {
    loader(): Promise<LoaderResult<React$ComponentType<P>>>,
    loading: React$ComponentType<*>,
    delay?: number,
    timeout?: number,
    render?: (r: LoaderResult<React$ComponentType<P>>, p: P) => React$Node,
    webpack?: () => Array<string>,
    modules?: Array<string>
  }) => React$ComponentType<P>;
}
