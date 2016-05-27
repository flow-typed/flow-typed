declare module "underscore.string" {

  declare type $npm$wrap$options = {
    width?: number,
    seperator?: string,
    trailingSpaces?: boolean,
    cut?: boolean,
    preserveSpaces?: boolean,
  };
  declare type $npm$pad$type = 'left' | 'right' | 'both';

  declare class S {
    // TODO: fix it
    static chain(string: string): any;
    static(value: string): any;

    static numberFormat(number: number, decimals: ?number, decimalSeparator: ?string, orderSeparator: ?string): string;
    static levenshtein(string1: string, string2: string): number;
    static capitalize(string: string, lowercaseRest: ?boolean): string;
    static decapitalize(string: string): string;
    static chop(string: string, step: number): Array<string>;
    static clean(string: string): string;
    static swapCase(string: string): string;
    static include(string: string, substring: string): boolean;
    static contains(string: string, substring: string): boolean; // Alias
    static count(string: string, substring: string): number;
    static escapeHTML(string: string): string;
    static unescapeHTML(string: string): string;
    static insert(string: string, index: number, substring: string): string;
    static replaceAll(string: string, find: string, replace: string, ignorecase: ?boolean): string;
    static isBlank(string: string): boolean;
    static join(separator: string, ...strings: Array<string>): string;
    static lines(string: string): Array<string>;
    static wrap(string: string, options: $npm$wrap$options): string;
    static dedent(string: string, pattern: ?string): string;
    static reverse(string: string): string;
    static splice(string: string, index: number, howmany: number, substring: string): string;
    static startsWith(string: string, starts: string, position: ?number): boolean;
    static endsWith(string: string, ends: string, position: ?number): boolean;
    static pred(string: string): string;
    static succ(string: string): string;
    static titleize(string: string): string;
    static camelize(string: string, decapitalize: ?boolean): string;
    static camelcase(string: string, decapitalize: ?boolean): string; // Alias
    static classify(string: string): string;
    static underscored(string: string): string;
    static dasherize(string: string): string;
    static humanize(string: string): string;
    static trim(string: string, characters: ?string): string;
    static strip(string: string, characters: ?string): string; // Alias
    static ltrim(string: string, characters: ?string): string;
    static lstrip(string: string, characters: ?string): string; // Alias
    static rtrim(string: string, characters: ?string): string;
    static rstrip(string: string, characters: ?string): string; // Alias
    static truncate(string: string, length: number, truncateString: ?string): string;
    static prune(string: string, length: number, pruneString: string): string;
    static words(string: string, delimiter: string|RegExp): Array<string>;
    static sprintf(string: string, ...arguments: Array<*>): string;
    static pad(string: string, length: number, padStr: ?string, type: ?$npm$pad$type): string;
    static lpad(string: string, length: number, padStr: ?string): string;
    static rjust(string: string, length: number, padStr: ?string): string; // Alias
    static rpad(string: string, length: number, padStr: ?string): string;
    static ljust(string: string, length: number, padStr: ?string): string; // Alias
    static lrpad(string: string, length: number, padStr: ?string): string;
    static center(string: string, length: number, padStr: ?string): string; // Alias
    static toNumber(string: string, decimals: ?number): number;
    static strRight(string: string, pattern: string): string;
    static strRightBack(string: string, pattern: string): string;
    static strLeft(string: string, pattern: string): string;
    static strLeftBack(string: string, pattern: string): string;
    static stripTags(string: string): string;
    static toSentence(array: Array<string>, delimiter: ?string, lastDelimiter: ?string): string;
    static toSentenceSerial(array: Array<string>, delimiter: ?string, lastDelimiter: ?string): string;
    static repeat(string: string, count: number, separator: ?string): string;
    static surround(string: string, wrap: string): string;
    static quote(string: string, quoteChar: ?string): string;
    static q(string: string, quoteChar: ?string): string; // Alias
    static unquote(string: string, quoteChar: ?string): string;
    static slugify(string: string): string;
    static naturalCmp(string1: string, string2: string): number;
    static toBoolean(string: string, truthy: ?Array<string|RegExp>, falsy: ?Array<string|RegExp>): ?boolean;
    static toBool(string: string, truthy: ?Array<string|RegExp>, falsy: ?Array<string|RegExp>): ?boolean; // Alias
    static map(string: string, function: (character: string) => string): string;
  }

  declare var exports: typeof S;
}
