declare module "hoist-non-react-statics" {
  declare module.exports: <Own, Custom>(
    TargetComponent: React$Component<Own>,
    SourceComponent: React$Component<Own & Custom>,
    blacklist?: mixed
  ) => React$Component<Own>;
}
