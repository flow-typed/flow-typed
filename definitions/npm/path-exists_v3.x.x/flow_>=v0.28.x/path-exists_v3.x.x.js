declare module 'path-exists' {
  declare module.exports: {
    (filePath: string): Promise<boolean>,
    sync(filePath: string): boolean,
  };
}
