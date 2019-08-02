declare module 'path-is-absolute' {
  declare module.exports: {
    (filePath: string): boolean,
    posix(filePath: string): boolean,
    win32(filePath: string): boolean,
  };
}
