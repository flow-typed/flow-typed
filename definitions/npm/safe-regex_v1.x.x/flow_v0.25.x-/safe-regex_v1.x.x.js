declare module "safe-regex" {
  declare module.exports: (
    re: RegExp | string,
    options?: { limit: number }
  ) => boolean;
}
