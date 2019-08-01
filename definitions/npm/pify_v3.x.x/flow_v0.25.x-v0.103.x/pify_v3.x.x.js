type $npm$pify$CPSFunction = (...args: any[]) => any;

type $npm$pify$Options = {
  multiArgs?: boolean,
  include?: Array<string | RegExp>,
  exclude?: Array<string | RegExp>,
  excludeMain?: boolean,
  errorFirst?: boolean,
  promiseModule?: () => any
};

type $npm$pify$PromisifiedFunction = (...args: any[]) => Promise<*>;

declare module "pify" {
  declare module.exports: (
    input: $npm$pify$CPSFunction | Object,
    options?: $npm$pify$Options
  ) => (...args: any[]) => Promise<*> | Object;
}
