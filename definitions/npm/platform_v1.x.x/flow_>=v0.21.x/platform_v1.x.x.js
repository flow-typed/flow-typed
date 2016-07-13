declare module 'platform' {
  declare class Platform extends Object {
    toString(): string;
    parse(userAgent: string): Platform;
    description: ?string;
    layoyt: ?string;
    manufacturer: ?string;
    name: ?string;
    prerelease: ?string;
    product: ?string;
    ua: ?string;
    version: ?string;
    os: {
      toString(): string,
      architecture: ?number,
      version: ?string,
      family: ?string
    }
  }
  declare type $Platform = Platform;
  declare var exports: Platform;
}
