declare module 'path-exists' {
  declare function exports(filePath: string): Promise<boolean>;
  declare function sync(filePath: string): boolean; 
}
