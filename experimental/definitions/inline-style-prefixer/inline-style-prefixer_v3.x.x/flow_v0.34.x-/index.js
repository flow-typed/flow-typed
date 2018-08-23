declare module "inline-style-prefixer" {
  declare type Config = {
    userAgent?: string,
    keepUnprefixed?: boolean
  };
  declare class Prefixer {
    constructor(config?: Config): Prefixer;
    prefix(styles: Object): Object;
  }

  declare module.exports: typeof Prefixer;
}

declare module "inline-style-prefixer/static" {
  declare module.exports: Object => Object;
}
