declare module 'ignore' {

  declare interface Ignore {
    add(pattern: string | Ignore): Ignore;
    add(patterns: $ReadOnlyArray<(string | Ignore)>): Ignore;

    filter(paths: Array<string> | string): Array<string>;

    createFilter(): (path: ?string) => boolean;

    ignores(path: ?string): boolean;
  }

  declare type Options = {|
    ignorecase?: boolean,
  |};

  declare module.exports: (options?: Options) => Ignore;
}
