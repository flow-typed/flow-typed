declare module 'locale' {
  /* Type Helpers */
  declare type ObjectMap<TProp, TVal> = { [TProp]: TVal, ... };

  declare class Locale {
    constructor(str: string): Locale;

    code: string;
    language: string;
    country: string;
    normalized: string;
    score?: number;
    defaulted?: boolean;

    toString: () => string;
    toJSON: () => string;
  }

  declare class Locales {
    @@iterator(): Iterator<Locale>;
	  [key: number]: Locale;
    
    constructor(str: string[] | string, def?: string): Locales;

    default?: Locale;

    length: number;
    index: () => ObjectMap<string, number>;

    best: (supported?: Locales) => Locale;

    sort: Function;
    push: Function;

    toString: () => string;
    toJSON: () => Object;
  }
}
