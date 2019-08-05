declare module 'cssbeautify' {
  declare type Options = {|
    indent?: string,
    openbrace?: 'end-of-line' | 'separate-line',
    autosemicolon?: boolean,
  |};

  declare module.exports: (str: string, options?: Options) => string;
}
