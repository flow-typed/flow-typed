declare module 'module-alias' {
  /**
   * module intialis options type
   */
  declare export type Options = {|
    base: string,
  |};

  declare module.exports: {|
    /**
     * Import aliases from package.json
     */
    (options?: string | Options): void,
    isPathMatchesAlias(path: string, alias: string): boolean,
    /**
     * Register a custom modules directory
     */
    addPath(path: string): void,
    /**
     * Register a single alias
     */
    addAlias(alias: string, path: string): void,
    /**
     * Register multiple aliases
     */
    addAliases(aliases: { [alias: string]: string }): void,
    /**
     * Reset any changes maded (resets all registered aliases
     * and custom module directories)
     * The function is undocumented and for testing purposes only
     */
    reset(): void,
  |};
}
