type SlugMode = 'rfc3986' | 'pretty'

declare module 'slug' {
  declare type SlugOptions = {
    mode: SlugMode,
    replacement: string,
    multicharmap: { [key: string]: string },
    charmap: { [key: string]: string },
    remove: RegExp,
    lower: boolean,
    symbol: boolean,
  }
  declare module.exports: {
      (input: string, optionOrReplacement?: string | SlugOptions): string,
      defaults: {
        mode: 'pretty',
        charmap: { [key: string]: string },
        multicharmap: { [key: string]: string },
        modes: { [key: SlugMode]: SlugOptions }
      }
  }
}
