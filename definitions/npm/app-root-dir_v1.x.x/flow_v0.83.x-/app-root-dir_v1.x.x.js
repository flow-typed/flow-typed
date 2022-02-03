declare module 'app-root-dir' {
  declare module.exports: {|
    /**
     * Get the application's root directory
     */
    get: () => string,
    /**
     * Set the application's root directory
     * this will set a global so that no matter
     * how many instances of app-root-dir module are installed,
     * they will all return the same directory
     */
    set: (dirname: string) => void,
  |};
}
