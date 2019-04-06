declare module "jsuri" {
  declare class URI {
    constructor(path: ?string): this;

    addQueryParam: (key: string, val: string, index: ?number) => this;
    deleteQueryParam: (key: string, val: ?string) => this;
    replaceQueryParam: (key: string, newVal: string, oldVal: ?string) => this;
    addTrailingSlash: () => this;

    setProtocol: (val: string) => this;
    protocol: (val: ?string) => string;
    setHasAuthorityPrefix: (val: boolean) => this;
    hasAuthorityPrefix: (val: ?boolean) => boolean;
    setIsColonUri: (val: boolean) => this;
    isColonUri: (val: ?boolean) => boolean;
    setUserInfo: (val: string) => this;
    userInfo: (val: ?string) => string;
    setHost: (val: string) => this;
    host: (val: ?string) => string;
    setPort: (val: string) => this;
    port: (val: ?string) => string;
    setPath: (val: string) => this;
    path: (val: ?string) => string;
    setQuery: (val: string) => this;
    query: (query: ?string) => string;
    setAnchor: (val: string) => this;
    anchor: (val: ?string) => string;

    getQueryParamValues: (key: string) => Array<string>;
    getQueryParamValue: (key: string) => string;
    hasQueryParam: (key: string) => boolean;
    clone: () => URI;
    origin: () => string;
    scheme: () => string;
    toString: () => string;
  }

  declare module.exports: typeof URI;
}
