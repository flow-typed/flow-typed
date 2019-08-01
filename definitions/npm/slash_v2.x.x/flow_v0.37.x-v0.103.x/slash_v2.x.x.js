declare module "slash" {
  declare function slash(path: string): string;

  declare module.exports: typeof slash;
}
