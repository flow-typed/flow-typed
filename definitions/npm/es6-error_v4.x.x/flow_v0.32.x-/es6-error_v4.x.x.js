declare module "es6-error" {
  declare class ExtendableError extends Error {}

  declare module.exports: Class<ExtendableError>;
}
