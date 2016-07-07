declare module 'path-is-absolute' {
  declare function exports(filePath: string): boolean;
  declare function posix(filePath: string): boolean;
  declare function win32(filePath: string): boolean;
}
