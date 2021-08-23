declare module 'stringify-object' {
  declare type AnyObject = { +[key: mixed]: mixed, ... };

  declare export type Options = {|
    /**
     * Preferred indentation.
     * @default '\t'
     */
    indent?: string,
    /**
     * Set to false to get double-quoted strings.
     * @default true
     */
    singleQuotes?: boolean,
    /**
     * Expected to return a boolean of whether to include the property property
     * of the object object in the output.
     */
    filter?: (input: AnyObject, prop: string | symbol) => boolean,
    /**
     * When set, will inline values up to inlineCharacterLimit length for the
     * sake of more terse output.
     */
    transform?: (
      input: AnyObject | Array<mixed>,
      prop: number | string | symbol,
      originalResult: string
    ) => string,
    /**
     * Expected to return a string that transforms the string that resulted from
     * stringifying object[property]. This can be used to detect special types
     * of objects that need to be stringified in a particular way.
     * The transform function might return an alternate string in this case,
     * otherwise returning the originalResult.
     */
    inlineCharacterLimit?: number,
  |};

  declare export default function stringifyObject(
    input: mixed,
    options?: Options,
    pad?: string
  ): string;
}
