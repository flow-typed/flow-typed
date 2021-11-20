declare module 'universal-cookie' {
  declare type Cookie = $NonMaybeType<mixed>;

  declare type CookieParseOptions = {|
    decode: (value: string) => string,
  |};

  declare type CookieGetOptions = {|
    doNotParse?: boolean,
  |};

  declare type CookieSetOptions = {|
    path?: string,
    expires?: Date,
    maxAge?: number,
    domain?: string,
    secure?: boolean,
    httpOnly?: boolean,
    sameSite?: boolean | 'none' | 'lax' | 'strict',
    encode?: (value: string) => string,
  |};

  declare type CookieChangeOptions = {|
    name: string,
    value?: any,
    options?: CookieSetOptions,
  |};

  declare type CookieChangeListener = (options: CookieChangeOptions) => void;

  declare class Cookies {
    constructor(
      cookies?:
        | string
        | {| [key: string]: any |}
        | null,
      options?: CookieParseOptions,
    ): this;

    /**
     * Get a cookie value
     */
    get<T>(name: string, options?: CookieGetOptions): T;
    get(name: string, options?: CookieGetOptions, parseOptions?: CookieParseOptions): any;

    /**
     * Get all cookies
     */
    getAll<T>(options?: CookieGetOptions): T;
    getAll(options?: CookieGetOptions, parseOptions?: CookieParseOptions): any;

    /**
     * Set a cookie value
     */
    set(name: string, value: Cookie, options?: CookieSetOptions): void;

    /**
     * Remove a cookie
     */
    remove(name: string, options?: CookieSetOptions): void;

    /**
     * Add a listener to when a cookie is set or removed.
     */
    addChangeListener(callback: CookieChangeListener): void;

    /**
     * Remove a listener from the change callback.
     */
    removeChangeListener(callback: CookieChangeListener): void;
  }

  declare module.exports: typeof Cookies;
}
