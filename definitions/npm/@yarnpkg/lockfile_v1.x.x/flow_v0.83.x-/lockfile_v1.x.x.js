declare module '@yarnpkg/lockfile' {
  declare type Dependencies = {|
    [packageName: string]: string,
  |};

  declare type FirstLevelDependency = {|
    version: string,
    resolved?: string,
    integrity?: string,
    dependencies?: Dependencies,
  |};

  declare type LockFileObject = {|
    [packageName: string]: FirstLevelDependency,
  |};

  declare module.exports: {|
    parse: (
      file: string,
      fileLoc?: string,
    ) => {|
      type: 'success' | 'merge' | 'conflict';
      object: LockFileObject;
    |},
    stringify: (
      json: LockFileObject,
      noHeader?: boolean,
      enableVersions?: boolean,
    ) => string,
  |};
}
