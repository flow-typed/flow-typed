declare module "javascript-natural-sort" {
  declare module.exports: (
    value1: string | number,
    value2: string | number
  ) => 1 | -1 | 0;
}
