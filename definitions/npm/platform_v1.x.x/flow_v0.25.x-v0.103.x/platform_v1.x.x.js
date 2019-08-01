declare module "platform" {
  declare class Platform extends Object {
    toString(): string;
    parse(userAgent: string): Platform;
    description: ?string;
    layout: ?string;
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
    };
  }
  declare module.exports: Platform;
}
