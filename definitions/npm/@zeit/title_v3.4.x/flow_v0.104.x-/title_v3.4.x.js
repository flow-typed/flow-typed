declare module '@zeit/title' {
  declare type Options = {|
    +specials: $ReadOnlyArray<string>,
  |};

  declare module.exports: (str: string, options?: Options) => string;
}
