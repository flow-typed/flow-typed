declare module 'hoist-non-react-statics' {
  declare module.exports: <OP, CP>(
    target: React$ComponentType<OP>,
    source: React$ComponentType<OP & CP>,
    blacklist?: { [key: string]: mixed }
  ) => React$ComponentType<OP>;
}
