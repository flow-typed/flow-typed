declare module 'stringify-object' {
  // Matches the `prop` parameter `mixed` type.
  // Prevent errors when using computed properties.
  declare type AnyObject = { [key: mixed]: mixed };

  declare type Options = {|
    indent?: string,
    singleQuotes?: boolean,
    filter?: (obj: AnyObject, prop: mixed) => boolean,
    transform?: (obj: AnyObject, prop: mixed, originalResult: string) => string,
    inlineCharacterLimit?: number,
  |};

  declare module.exports: (
    input: AnyObject | Array<*>,
    options?: Options,
    pad?: string
  ) => string;
}
