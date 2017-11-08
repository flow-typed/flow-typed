declare module "filesize-parser" {
  declare module.exports: (
    input: string,
    options?: { base?: number }
  ) => number;
}
