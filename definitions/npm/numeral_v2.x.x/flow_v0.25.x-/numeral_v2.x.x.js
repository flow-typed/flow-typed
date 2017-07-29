
declare interface NumeralJSLocale {
    delimiters: {
        thousands: string,
        decimal: string
    },
    abbreviations: {
        thousand: string,
        million: string,
        billion: string,
        trillion: string
    },
    ordinal(num: number): string,
    currency: {
        symbol: string
    }
}
declare type RoundingFunction = (value: number) => number;
declare interface NumeralJsFormat {
    regexps: {
        format: RegExp,
        unformat: RegExp
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
     * @param key The key of the registerd type, e.g. 'de' for a german locale definition
     * @param value The locale definition or the format definitiion
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
