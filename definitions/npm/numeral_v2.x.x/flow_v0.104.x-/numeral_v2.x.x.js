
declare interface NumeralJSLocale {
    delimiters: {
      thousands: string,
      decimal: string,
      ...
    },
    abbreviations: {
      thousand: string,
      million: string,
      billion: string,
      trillion: string,
      ...
    },
    ordinal(num: number): string,
    currency: { symbol: string, ... }
}
declare type RoundingFunction = (value: number) => number;
declare interface NumeralJsFormat {
    regexps: {
      format: RegExp,
      unformat: RegExp,
      ...
    },
    format(value: any, format: string, roundingFunction: RoundingFunction): string,
    unformat(value: string): number
}
declare type RegisterType = 'format' | 'locale';
declare interface Numeral {
    (value?: any): Numeral,
    version: string,
    isNumeral: boolean,

    /**
     * This function sets the current locale.  If no arguments are passed in,
     * it will simply return the current global locale key.
     */
    locale(key?: string): string,

    /**
     * Registers a language definition or a custom format definition.
     * @param what Allowed values are: either 'format' or 'locale'
     * @param key The key of the registered type, e.g. 'de' for a german locale definition
     * @param value The locale definition or the format definition
     */
    register(
        what: RegisterType,
        key: string,
        value: NumeralJSLocale | NumeralJsFormat): NumeralJSLocale | NumeralJsFormat,
    zeroFormat(format: string): void,
    nullFormat(format: string): void,
    defaultFormat(format: string): void,
    clone(): Numeral,
    format(inputString?: string, roundingFunction?: RoundingFunction): string,
    formatCurrency(inputString?: string): string,
    unformat(inputString: string): number,
    value(): number,
    valueOf(): number,
    set(value: any): Numeral,
    add(value: any): Numeral,
    subtract(value: any): Numeral,
    multiply(value: any): Numeral,
    divide(value: any): Numeral,
    difference(value: any): number,
    validate(value: any, culture: any): boolean
}

declare var numeral: Numeral;

declare module 'numeral' {
    declare module.exports: typeof numeral
}


declare module 'numeral/locales' {
  declare module.exports: void
}

declare module 'numeral/locales/bg' {
  declare module.exports: void
}

declare module 'numeral/locales/chs' {
  declare module.exports: void
}

declare module 'numeral/locales/cs' {
  declare module.exports: void
}

declare module 'numeral/locales/da-dk' {
  declare module.exports: void
}

declare module 'numeral/locales/de-ch' {
  declare module.exports: void
}

declare module 'numeral/locales/de' {
  declare module.exports: void
}

declare module 'numeral/locales/en-au' {
  declare module.exports: void
}

declare module 'numeral/locales/en-gb' {
  declare module.exports: void
}

declare module 'numeral/locales/en-za' {
  declare module.exports: void
}

declare module 'numeral/locales/es-es' {
  declare module.exports: void
}

declare module 'numeral/locales/es' {
  declare module.exports: void
}

declare module 'numeral/locales/et' {
  declare module.exports: void
}

declare module 'numeral/locales/fi' {
  declare module.exports: void
}

declare module 'numeral/locales/fr-ca' {
  declare module.exports: void
}

declare module 'numeral/locales/fr-ch' {
  declare module.exports: void
}

declare module 'numeral/locales/fr' {
  declare module.exports: void
}

declare module 'numeral/locales/hu' {
  declare module.exports: void
}

declare module 'numeral/locales/it' {
  declare module.exports: void
}

declare module 'numeral/locales/ja' {
  declare module.exports: void
}

declare module 'numeral/locales/lv' {
  declare module.exports: void
}

declare module 'numeral/locales/nl-be' {
  declare module.exports: void
}

declare module 'numeral/locales/nl-nl' {
  declare module.exports: void
}

declare module 'numeral/locales/no' {
  declare module.exports: void
}

declare module 'numeral/locales/pl' {
  declare module.exports: void
}

declare module 'numeral/locales/pt-br' {
  declare module.exports: void
}

declare module 'numeral/locales/pt-pt' {
  declare module.exports: void
}

declare module 'numeral/locales/ru-ua' {
  declare module.exports: void
}

declare module 'numeral/locales/ru' {
  declare module.exports: void
}

declare module 'numeral/locales/sk' {
  declare module.exports: void
}

declare module 'numeral/locales/sl' {
  declare module.exports: void
}

declare module 'numeral/locales/th' {
  declare module.exports: void
}

declare module 'numeral/locales/tr' {
  declare module.exports: void
}

declare module 'numeral/locales/uk-ua' {
  declare module.exports: void
}

declare module 'numeral/locales/vi' {
  declare module.exports: void
}
