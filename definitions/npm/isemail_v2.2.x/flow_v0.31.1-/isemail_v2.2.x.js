declare module 'isemail' {
  declare type Options = {|
    checkDNS?: boolean;
    errorLevel?: number | boolean;
    tldBlacklist?: string | Array<string> | { [blacklisted: string]: any };
    tldWhitelist?: string | Array<string> | { [whitelisted: string]: any };
    minDomainAtoms?: number;
  |};

  declare type Callback = (result: boolean | number) => void;

  declare module.exports: {
    validate(email: string, options?: Options | Callback, callback?: Callback): boolean | number | void;
  };
}
