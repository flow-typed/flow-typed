declare type React$AbstractComponentStatics = {
  displayName?: ?string,
  // This is only on function components, but trying to access name when
  // displayName is undefined is a common pattern.
  name?: ?string,
  propTypes?: {[string] : any, ...},
  [key: string]: any,
  ...
};
