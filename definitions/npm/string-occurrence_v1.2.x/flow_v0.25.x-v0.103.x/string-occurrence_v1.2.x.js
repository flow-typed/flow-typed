declare module "string-occurrence" {
  declare module.exports: (
    input: string,
    search: string | string[],
    opts?: { caseInsensitive?: boolean }
  ) => number;
}
