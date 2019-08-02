declare module 'getit' {
  declare type getit$Callback = (?Error, ?string) => void;

  declare type getit$Options = {|
    cachePath?: string,
    cwd?: string,
    preferLocal?: boolean
  |};

  declare module.exports: {
    (target: string, callback: getit$Callback): void;
    (target: string, opts: getit$Options, callback: getit$Callback): void;
    getUrl(target: string): string;
    isRemote(target: string): boolean;
  }
}
