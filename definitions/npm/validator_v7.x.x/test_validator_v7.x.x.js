/* @flow */

import { describe, it } from "flow-typed-test";
import validator from 'validator';

/** Types as variables */
let boolean: boolean = true;
let string: string = 'string';
let number: number = 5;
let date: Date = new Date();

/** Validators */
it('output->boolean input<-(string)', () => {
  boolean = validator.isAscii(string);
  // $FlowExpectedError
  boolean = validator.isAscii(boolean);

  boolean = validator.isBase64(string);
  // $FlowExpectedError
  boolean = validator.isBase64(boolean);

  boolean = validator.isBoolean(string);
  // $FlowExpectedError
  boolean = validator.isBoolean(boolean);

  boolean = validator.isCreditCard(string);
  // $FlowExpectedError
  boolean = validator.isCreditCard(boolean);

  boolean = validator.isDate(string);
  // $FlowExpectedError
  boolean = validator.isDate(boolean);

  boolean = validator.isDecimal(string);
  // $FlowExpectedError
  boolean = validator.isDecimal(boolean);

  boolean = validator.isEmpty(string);
  // $FlowExpectedError
  boolean = validator.isEmpty(boolean);

  boolean = validator.isFullWidth(string);
  // $FlowExpectedError
  boolean = validator.isFullWidth(boolean);

  boolean = validator.isHalfWidth(string);
  // $FlowExpectedError
  boolean = validator.isHalfWidth(boolean);

  boolean = validator.isHexadecimal(string);
  // $FlowExpectedError
  boolean = validator.isHexadecimal(boolean);

  boolean = validator.isHexColor(string);
  // $FlowExpectedError
  boolean = validator.isHexColor(boolean);

  boolean = validator.isISIN(string);
  // $FlowExpectedError
  boolean = validator.isISIN(boolean);

  boolean = validator.isISO8601(string);
  // $FlowExpectedError
  boolean = validator.isISO8601(boolean);

  boolean = validator.isJSON(string);
  // $FlowExpectedError
  boolean = validator.isJSON(boolean);

  boolean = validator.isLowercase(string);
  // $FlowExpectedError
  boolean = validator.isLowercase(boolean);

  boolean = validator.isMACAddress(string);
  // $FlowExpectedError
  boolean = validator.isMACAddress(boolean);

  boolean = validator.isMD5(string);
  // $FlowExpectedError
  boolean = validator.isMD5(boolean);

  boolean = validator.isMongoId(string);
  // $FlowExpectedError
  boolean = validator.isMongoId(boolean);

  boolean = validator.isMultibyte(string);
  // $FlowExpectedError
  boolean = validator.isMultibyte(boolean);

  boolean = validator.isNumeric(string);
  // $FlowExpectedError
  boolean = validator.isNumeric(boolean);

  boolean = validator.isSurrogatePair(string);
  // $FlowExpectedError
  boolean = validator.isSurrogatePair(boolean);

  boolean = validator.isUppercase(string);
  // $FlowExpectedError
  boolean = validator.isUppercase(boolean);

  boolean = validator.isVariableWidth(string);
  // $FlowExpectedError
  boolean = validator.isVariableWidth(boolean);

  boolean = validator.isDataURI(string);
  // $FlowExpectedError
  boolean = validator.isDataURI(boolean);
});

describe('output->boolean input<-(string, {min: number, max: number})', () => {
  it('input<-(string, {min?: number, max?: number}?)', () => {
    boolean = validator.isFloat(string);
    boolean = validator.isFloat(string, { min: number });
    boolean = validator.isFloat(string, { max: number });
    boolean = validator.isFloat(string, { min: number, max: number });
    // $FlowExpectedError
    boolean = validator.isFloat(number);
    // $FlowExpectedError
    boolean = validator.isFloat(string, { min: string, max: number });
    // $FlowExpectedError
    boolean = validator.isFloat(string, { min: boolean, max: number });

    boolean = validator.isInt(string);
    boolean = validator.isInt(string, { min: number });
    boolean = validator.isInt(string, { max: number });
    boolean = validator.isInt(string, { min: number, max: number });
    // $FlowExpectedError
    boolean = validator.isInt(number);
    // $FlowExpectedError
    boolean = validator.isInt(string, { min: string, max: number });
    // $FlowExpectedError
    boolean = validator.isInt(string, { min: boolean, max: number });
  });

  it('input<-(string, {min: number, max?: number})', () => {
    boolean = validator.isLength(string, { min: number, max: number });
    boolean = validator.isLength(string, { min: number });
    // $FlowExpectedError
    boolean = validator.isLength(number);
    // $FlowExpectedError
    boolean = validator.isLength(string);
    // $FlowExpectedError
    boolean = validator.isLength(string, {});
    // $FlowExpectedError
    boolean = validator.isLength(string, { max: number });
    // $FlowExpectedError
    boolean = validator.isLength(string, { min: string, max: number });
    // $FlowExpectedError
    boolean = validator.isLength(string, { min: number, max: boolean });

    boolean = validator.isByteLength(string, { min: number, max: number });
    boolean = validator.isByteLength(string, { min: number });
    // $FlowExpectedError
    boolean = validator.isByteLength(number);
    // $FlowExpectedError
    boolean = validator.isByteLength(string);
    // $FlowExpectedError
    boolean = validator.isByteLength(string, {});
    // $FlowExpectedError
    boolean = validator.isByteLength(string, { max: number });
    // $FlowExpectedError
    boolean = validator.isByteLength(string, { min: string, max: number });
    // $FlowExpectedError
    boolean = validator.isByteLength(string, { min: number, max: boolean });
  });
});

it('output->boolean input<-(string, mixed?)', () => {
  boolean = validator.contains(string, string);
  boolean = validator.contains(string, number);
  boolean = validator.contains(string);
});

it('output->boolean input<-(string, string)', () => {
  boolean = validator.equals(string, string);
  // $FlowExpectedError
  boolean = validator.equals(string, number);
  // $FlowExpectedError
  boolean = validator.equals(number, string);
  // $FlowExpectedError
  boolean = validator.equals(string);

  boolean = validator.isWhitelisted(string, string);
  // $FlowExpectedError
  boolean = validator.isWhitelisted(string, number);
  // $FlowExpectedError
  boolean = validator.isWhitelisted(number, string);
  // $FlowExpectedError
  boolean = validator.isWhitelisted(string);

  boolean = validator.isAfter(string, string);
  boolean = validator.isAfter(string);
  // $FlowExpectedError
  boolean = validator.isAfter(string, number);
  // $FlowExpectedError
  boolean = validator.isAfter(number, string);

  boolean = validator.isBefore(string, string);
  boolean = validator.isBefore(string);
  // $FlowExpectedError
  boolean = validator.isBefore(string, number);
  // $FlowExpectedError
  boolean = validator.isBefore(number, string);
});

it('output->boolean input<-(string, string|number)', () => {
  boolean = validator.isDivisibleBy(string, number);
  boolean = validator.isDivisibleBy(string, string);
  // $FlowExpectedError
  boolean = validator.isDivisibleBy(number, string);
  // $FlowExpectedError
  boolean = validator.isDivisibleBy(string);
  // $FlowExpectedError
  boolean = validator.isDivisibleBy(boolean, string);
  // $FlowExpectedError
  boolean = validator.isDivisibleBy(string, boolean);
});

it('output->boolean input<-(string, Array<string>|string)', () => {
  boolean = validator.isIn(string, string);
  boolean = validator.isIn(string, [string]);
  // $FlowExpectedError
  boolean = validator.isIn(string, boolean);
  // $FlowExpectedError
  boolean = validator.isIn(string, [boolean]);
  // $FlowExpectedError
  boolean = validator.isIn(boolean, string);
});

it('output->boolean input<-(string, enum)', () => {
  boolean = validator.isIP(string);
  boolean = validator.isIP(string, 4);
  boolean = validator.isIP(string, 6);
  // $FlowExpectedError
  boolean = validator.isIP(boolean);
  // $FlowExpectedError
  boolean = validator.isIP(boolean, 6);
  // $FlowExpectedError
  boolean = validator.isIP(string, 10);
});

boolean = validator.isISBN(string);
boolean = validator.isISBN(string, 10);
boolean = validator.isISBN(string, 13);
// $FlowExpectedError
boolean = validator.isISBN(boolean);
// $FlowExpectedError
boolean = validator.isISBN(boolean, 10);
// $FlowExpectedError
boolean = validator.isISBN(string, 20);


boolean = validator.isAlpha(string);
boolean = validator.isAlpha(string, 'ar-JO');
// $FlowExpectedError
boolean = validator.isAlpha(boolean);
// $FlowExpectedError
boolean = validator.isAlpha(string, string);
// $FlowExpectedError
boolean = validator.isAlpha(string, 'fr-BE');

boolean = validator.isAlphanumeric(string);
boolean = validator.isAlphanumeric(string, 'fr-BE');
// $FlowExpectedError
boolean = validator.isAlphanumeric(boolean);
// $FlowExpectedError
boolean = validator.isAlphanumeric(string, string);

boolean = validator.isMobilePhone(string, 'en-US');
// $FlowExpectedError
boolean = validator.isMobilePhone(string);
// $FlowExpectedError
boolean = validator.isMobilePhone(boolean, 'en-US');
// $FlowExpectedError
boolean = validator.isMobilePhone(string, 'ar-JO');

boolean = validator.isUUID(string);
boolean = validator.isUUID(string, 3);
boolean = validator.isUUID(string, 4);
boolean = validator.isUUID(string, 5);
// $FlowExpectedError
boolean = validator.isUUID(boolean);
// $FlowExpectedError
boolean = validator.isUUID(boolean, 3);
// $FlowExpectedError
boolean = validator.isUUID(string, 10);

it('output->boolean input<-(string, options?)', () => {
  boolean = validator.isISSN(string);
  boolean = validator.isISSN(string, {});
  boolean = validator.isISSN(string, { case_sensitive: boolean });
  boolean = validator.isISSN(string, { require_hyphen: boolean });
  boolean = validator.isISSN(string, { case_sensitive: boolean, require_hyphen: boolean });
  // $FlowExpectedError
  boolean = validator.isISSN(boolean);
  // $FlowExpectedError
  boolean = validator.isISSN(string, { case_sensitive: string});
  // $FlowExpectedError
  boolean = validator.isISSN(string, { require_hyphen: string});

  boolean = validator.isCurrency(string);
  boolean = validator.isCurrency(string ,{
    symbol: string,
    require_symbol: boolean,
    allow_space_after_symbol: boolean,
    symbol_after_digits: boolean,
    allow_negatives: boolean,
    parens_for_negatives: boolean,
    negative_sign_before_digits: boolean,
    negative_sign_after_digits: boolean,
    allow_negative_sign_placeholder: boolean,
    thousands_separator: string,
    decimal_separator: string,
    allow_space_after_digits: boolean,
  });
  // $FlowExpectedError
  boolean = validator.isCurrency(boolean);
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { symbol: number });
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { require_symbol: number });
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { allow_space_after_symbol: number });
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { symbol_after_digits: number });
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { allow_negatives: number });
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { parens_for_negatives: number });
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { negative_sign_before_digits: number });
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { negative_sign_after_digits: number });
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { allow_negative_sign_placeholder: number });
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { thousands_separator: number });
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { decimal_separator: number });
  // $FlowExpectedError
  boolean = validator.isCurrency(string, { allow_space_after_digits: number });

  boolean = validator.isEmail(string);
  boolean = validator.isEmail(string, {
    allow_display_name: boolean,
    require_display_name: boolean,
    allow_utf8_local_part: boolean,
    require_tld: boolean,
  })
  // $FlowExpectedError
  boolean = validator.isEmail(boolean);
  // $FlowExpectedError
  boolean = validator.isEmail(string, { allow_display_name: number });
  // $FlowExpectedError
  boolean = validator.isEmail(string, { require_display_name: number });
  // $FlowExpectedError
  boolean = validator.isEmail(string, { allow_utf8_local_part: number });
  // $FlowExpectedError
  boolean = validator.isEmail(string, { require_tld: number });

  boolean = validator.isFQDN(string);
  boolean = validator.isFQDN(string, {
    require_tld: boolean,
    allow_underscores: boolean,
    allow_trailing_dot: boolean,
  })
  // $FlowExpectedError
  boolean = validator.isFQDN(boolean);
  // $FlowExpectedError
  boolean = validator.isFQDN(string, { require_tld: number });
  // $FlowExpectedError
  boolean = validator.isFQDN(string, { allow_underscores: number });
  // $FlowExpectedError
  boolean = validator.isFQDN(string, { allow_trailing_dot: number });

  boolean = validator.isURL(string);
  boolean = validator.isURL(string, {
    protocols: [string],
    require_tld: boolean,
    require_protocol: boolean,
    require_host: boolean,
    require_valid_protocol: boolean,
    allow_underscores: boolean,
    host_whitelist: boolean,
    host_blacklist: boolean,
    allow_trailing_dot: boolean,
    allow_protocol_relative_urls: boolean
  });
  // $FlowExpectedError
  boolean = validator.isURL(boolean);
  // $FlowExpectedError
  boolean = validator.isURL(boolean, { protocols: string });
  // $FlowExpectedError
  boolean = validator.isURL(boolean, { protocols: [number] });
  // $FlowExpectedError
  boolean = validator.isURL(string, { require_tld: number });
  // $FlowExpectedError
  boolean = validator.isURL(string, { require_protocol: number });
  // $FlowExpectedError
  boolean = validator.isURL(string, { require_host: number });
  // $FlowExpectedError
  boolean = validator.isURL(string, { require_valid_protocol: number });
  // $FlowExpectedError
  boolean = validator.isURL(string, { allow_underscores: number });
  // $FlowExpectedError
  boolean = validator.isURL(string, { host_whitelist: number });
  // $FlowExpectedError
  boolean = validator.isURL(string, { host_blacklist: number });
  // $FlowExpectedError
  boolean = validator.isURL(string, { allow_trailing_dot: number });
  // $FlowExpectedError
  boolean = validator.isURL(string, { allow_protocol_relative_urls: number });

//TODO isDataURI
});

it('output->boolean input<-(string, string|regexp, string?)', () => {
  boolean = validator.matches(string, string);
  boolean = validator.matches(string, string, string);
  boolean = validator.matches(string, new RegExp(string), string);
  // $FlowExpectedError
  boolean = validator.matches(string);
  // $FlowExpectedError
  boolean = validator.matches(string, number);
  // $FlowExpectedError
  boolean = validator.matches(string, string, number);
});

/** Sanitizers */
it('output->string input<-(string)', () => {
  string = escape(string);
  // $FlowExpectedError
  string = escape(number);

  string = unescape(string);
  // $FlowExpectedError
  string = unescape(number);
});

it('output->Date input<-(string)', () => {
  date = validator.toDate(string);
  // $FlowExpectedError
  date = validator.toDate(number);
});

it('output->number input<-(string)', () => {
  number = validator.toFloat(string);
  // $FlowExpectedError
  number = validator.toFloat(number);
});

it('output->number input<-(string, (string | number)?)', () => {
  number = validator.toInt(string);
  number = validator.toInt(string, string);
  number = validator.toInt(string, number);
  // $FlowExpectedError
  number = validator.toInt(boolean);
  // $FlowExpectedError
  number = validator.toInt(string, boolean);
});

it('output->boolean input<-(string, boolean?)', () => {
  boolean = validator.toBoolean(string);
  boolean = validator.toBoolean(string, boolean);
  // $FlowExpectedError
  boolean = validator.toBoolean(number);
  // $FlowExpectedError
  boolean = validator.toBoolean(string, number);
});

it('output->string input<-(string, string?)', () => {
  string = validator.trim(string);
  string = validator.trim(string, string);
  // $FlowExpectedError
  string = validator.trim(number);
  // $FlowExpectedError
  string = validator.trim(string, number);

  string = validator.ltrim(string);
  string = validator.ltrim(string, string);
  // $FlowExpectedError
  string = validator.ltrim(number);
  // $FlowExpectedError
  string = validator.ltrim(string, number);

  string = validator.trim(string);
  string = validator.trim(string, string);
  // $FlowExpectedError
  string = validator.trim(number);
  // $FlowExpectedError
  string = validator.trim(string, number);
});

it('output->string input<-(string, string)', () => {
  string = validator.blacklist(string, string);
  // $FlowExpectedError
  string = validator.blacklist(string);
  // $FlowExpectedError
  string = validator.blacklist(number, string);
  // $FlowExpectedError
  string = validator.blacklist(string, number);

  string = validator.whitelist(string, string);
  // $FlowExpectedError
  string = validator.whitelist(string);
  // $FlowExpectedError
  string = validator.whitelist(number, string);
  // $FlowExpectedError
  string = validator.whitelist(string, number);
});

it('output->string input<-(string, boolean)', () => {
  string = validator.stripLow(string);
  string = validator.stripLow(string, boolean);
  // $FlowExpectedError
  string = validator.stripLow(number);
  // $FlowExpectedError
  string = validator.stripLow(string, number);
});

it('output->string input<-(string, options)', () => {
  string = validator.normalizeEmail(string)
  string = validator.normalizeEmail(string, {
    all_lowercase: boolean,
    gmail_lowercase: boolean,
    gmail_remove_dots: boolean,
    gmail_remove_subaddress: boolean,
    gmail_convert_googlemaildotcom: boolean,
    outlookdotcom_lowercase: boolean,
    outlookdotcom_remove_subaddress: boolean,
    yahoo_lowercase: boolean,
    yahoo_remove_subaddress: boolean,
    icloud_lowercase: boolean,
    icloud_remove_subaddress: boolean,
  })
  // $FlowExpectedError
  string = validator.normalizeEmail(boolean);
  // $FlowExpectedError
  string = validator.normalizeEmail(string, boolean);
  // $FlowExpectedError
  string = validator.normalizeEmail(string, { all_lowercase: number });
  // $FlowExpectedError
  string = validator.normalizeEmail(string, { gmail_lowercase: number });
  // $FlowExpectedError
  string = validator.normalizeEmail(string, { gmail_remove_dots: number });
  // $FlowExpectedError
  string = validator.normalizeEmail(string, { gmail_remove_subaddress: number });
  // $FlowExpectedError
  string = validator.normalizeEmail(string, { gmail_convert_googlemaildotcom: number });
  // $FlowExpectedError
  string = validator.normalizeEmail(string, { outlookdotcom_lowercase: number });
  // $FlowExpectedError
  string = validator.normalizeEmail(string, { outlookdotcom_remove_subaddress: number });
  // $FlowExpectedError
  string = validator.normalizeEmail(string, { yahoo_lowercase: number });
  // $FlowExpectedError
  string = validator.normalizeEmail(string, { yahoo_remove_subaddress: number });
  // $FlowExpectedError
  string = validator.normalizeEmail(string, { icloud_lowercase: number });
  // $FlowExpectedError
  string = validator.normalizeEmail(string, { icloud_remove_subaddress: number });
});
