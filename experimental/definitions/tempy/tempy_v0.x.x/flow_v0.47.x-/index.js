type $npm$tempy$Options = {
  extension?: string,
  name?: string
};

declare module "tempy" {
  declare module.exports: {
    directory: () => string,
    file: (options?: $npm$tempy$Options) => string,
    root: string
  };
}
