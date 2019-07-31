declare module "cuid" {
  declare type cuid = {
    slug: () => string,
    fingerprint: () => string
  } & (() => string);

  declare module.exports: cuid;
}
