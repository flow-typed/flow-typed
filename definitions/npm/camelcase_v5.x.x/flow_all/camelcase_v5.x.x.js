declare module "camelcase" {
  declare module.exports: (
    input: string,
    options?: { pascalCase?: boolean }
  ) => string;
}

