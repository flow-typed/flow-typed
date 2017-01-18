/**
 * Flowtype definitions for chai-string
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type Chai$Assertion = {
    startsWith(expected: string, message?: string): Chai$Assertion,
    startWith(expected: string, message?: string): Chai$Assertion,
    endsWith(expected: string, message?: string): Chai$Assertion,
    endWith(expected: string, message?: string): Chai$Assertion,
    equalIgnoreCase(expected: string, message?: string): Chai$Assertion,
    equalIgnoreSpaces(expected: string, message?: string): Chai$Assertion,
    singleLine(message?: string): Chai$Assertion,
    reverseOf(message?: string): Chai$Assertion,
    palindrome(message?: string): Chai$Assertion,
    entriesCount(substr: string, expected: number, message?: string): Chai$Assertion
} & LanguageChains & NumericComparison & TypeComparison


declare export interface Chai$Assert {
    startsWith(val: string, exp: string, msg?: string): void,
        notStartsWith(val: string, exp: string, msg?: string): void,
        endsWith(val: string, exp: string, msg?: string): void,
        notEndsWith(val: string, exp: string, msg?: string): void,
        equalIgnoreCase(val: string, exp: string, msg?: string): void,
        notEqualIgnoreCase(val: string, exp: string, msg?: string): void,
        equalIgnoreSpaces(val: string, exp: string, msg?: string): void,
        notEqualIgnoreSpaces(val: string, exp: string, msg?: string): void,
        singleLine(val: string, msg?: string): void,
        notSingleLine(val: string, msg?: string): void,
        reverseOf(val: string, exp: string, msg?: string): void,
        notReverseOf(val: string, exp: string, msg?: string): void,
        palindrome(val: string, msg?: string): void,
        notPalindrome(val: string, msg?: string): void,
        entriesCount(str: string, substr: string, count: number, msg?: string): void
}
declare module 'chai-string' {
    declare module.exports: typeof chaiString

}