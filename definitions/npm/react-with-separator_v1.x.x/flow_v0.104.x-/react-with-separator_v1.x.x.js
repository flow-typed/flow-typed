declare module "react-with-separator" {
  declare module.exports: React$StatelessFunctionalComponent<{
    children?: React$Node,
    leading?: boolean,
    separator: string | React$Element<*>,
    trailing?: boolean,
    ...
  }>;
}
