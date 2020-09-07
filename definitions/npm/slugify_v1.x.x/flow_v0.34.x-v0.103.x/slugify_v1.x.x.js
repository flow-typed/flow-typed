declare module "slugify" {
  declare type SlugifyOptions = {
    replacement?: string,
    remove?: ?RegExp,
    lower?: boolean
  };
  declare module.exports: {
    (input: string, optionOrReplacement?: string | SlugifyOptions): string,
    extend({ [key: string]: string }): void
  };
}
