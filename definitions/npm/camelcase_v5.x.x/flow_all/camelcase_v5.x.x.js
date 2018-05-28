declare module "camelcase" {
  declare module.exports: (
    input: string | string[],
    options?: { pascalCase?: boolean }
  ) => string;
}
