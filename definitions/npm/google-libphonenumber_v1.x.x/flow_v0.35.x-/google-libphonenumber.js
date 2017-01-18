/**
 * Flowtype definitions for google-libphonenumber
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface libphonenumber$PhoneNumber {}

declare export class PhoneNumberUtil {
    getInstance(): libphonenumber$PhoneNumberUtil;
    parse(number: string, region: string): libphonenumber$PhoneNumber;
    isValidNumber(phoneNumber: libphonenumber$PhoneNumber): boolean;
    isPossibleNumber(phoneNumber: libphonenumber$PhoneNumber): boolean;
    isValidNumberForRegion(phoneNumber: libphonenumber$PhoneNumber): boolean;
    getRegionCodeForNumber(phoneNumber: libphonenumber$PhoneNumber): string;
    isNANPACountry(regionCode: string): boolean;
    format(phoneNumber: libphonenumber$PhoneNumber, format: PhoneNumberFormat): string
}

declare export class AsYouTypeFormatter {
    constructor(region: string): this;
    inputDigit(digit: string): string;
    clear(): void
}
declare module 'google-libphonenumber' {
    declare module.exports: typeof libphonenumber
}