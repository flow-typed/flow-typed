declare module 'ansi-regex' {
  declare export type Options = {
    /**
     * Match only the first ANSI escape.
     */
    onlyFirst?: boolean,
  };
  declare function ansiRegex(options?: Options): RegExp;
  declare module.exports: typeof ansiRegex;
}
