declare module 'platform' {
    declare class Platform extends Object {
        description: ?string;
        layoyt: ?string;
        manufacturer: ?string;
        name: ?string;
        parse(userAgent: string): Platform;
        prerelease: ?string;
        product: ?string;
        toString(): string;
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
