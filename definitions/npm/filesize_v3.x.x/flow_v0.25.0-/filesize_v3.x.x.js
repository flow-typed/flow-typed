declare module "filesize" {
  declare type Options = {
    base?: number,
    bits?: boolean,
    exponent?: number,
    fullform?: boolean,
    fullforms?: Array<mixed>,
    output?: "array" | "exponent" | "object" | "string",
    round?: number,
    spacer?: string,
    standard?: string,
    symbols?: Object,
    unix?: boolean
  };

  declare module.exports: {
    (arg: number | string, options?: Options): string
  };
}
