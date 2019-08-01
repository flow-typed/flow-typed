declare module "markdown-table" {
  declare type Table = mixed[][];

  declare type Options = {|
    delimiter?: string,
    end?: string,
    start?: string,
    stringLength?: (value: mixed) => number
  |};
  declare function markdownTable(table: Table, options?: Options): string;

  declare module.exports: typeof markdownTable;
}
