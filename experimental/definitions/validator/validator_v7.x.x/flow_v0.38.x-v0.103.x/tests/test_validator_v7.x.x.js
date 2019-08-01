/* @flow */

import validator from 'validator';

/** Types as variables */
let boolean: boolean = true;
let string: string = 'string';
let number: number = 5;
let date: Date = new Date();

/** Validators */
// TEST: output->boolean input<-(string)
boolean = validator.isAscii(string);
// $ExpectError
boolean = validator.isAscii(boolean);

boolean = validator.isBase64(string);
// $ExpectError
boolean = validator.isBase64(boolean);

boolean = validator.isBoolean(string);
// $ExpectError
boolean = validator.isBoolean(boolean);

boolean = validator.isCreditCard(string);
// $ExpectError
boolean = validator.isCreditCard(boolean);

boolean = validator.isDate(string);
// $ExpectError
boolean = validator.isDate(boolean);

boolean = validator.isDecimal(string);
// $ExpectError
boolean = validator.isDecimal(boolean);

boolean = validator.isEmpty(string);
// $ExpectError
boolean = validator.isEmpty(boolean);

boolean = validator.isFullWidth(string);
// $ExpectError
boolean = validator.isFullWidth(boolean);

boolean = validator.isHalfWidth(string);
// $ExpectError
boolean = validator.isHalfWidth(boolean);

boolean = validator.isHexadecimal(string);
// $ExpectError
boolean = validator.isHexadecimal(boolean);

boolean = validator.isHexColor(string);
// $ExpectError
boolean = validator.isHexColor(boolean);

boolean = validator.isISIN(string);
// $ExpectError
boolean = validator.isISIN(boolean);

boolean = validator.isISO8601(string);
// $ExpectError
boolean = validator.isISO8601(boolean);

boolean = validator.isJSON(string);
// $ExpectError
boolean = validator.isJSON(boolean);

boolean = validator.isLowercase(string);
// $ExpectError
boolean = validator.isLowercase(boolean);

boolean = validator.isMACAddress(string);
// $ExpectError
boolean = validator.isMACAddress(boolean);

boolean = validator.isMD5(string);
// $ExpectError
boolean = validator.isMD5(boolean);

boolean = validator.isMongoId(string);
// $ExpectError
boolean = validator.isMongoId(boolean);

boolean = validator.isMultibyte(string);
// $ExpectError
boolean = validator.isMultibyte(boolean);

boolean = validator.isNumeric(string);
// $ExpectError
boolean = validator.isNumeric(boolean);

boolean = validator.isSurrogatePair(string);
// $ExpectError
boolean = validator.isSurrogatePair(boolean);

boolean = validator.isUppercase(string);
// $ExpectError
boolean = validator.isUppercase(boolean);

boolean = validator.isVariableWidth(string);
// $ExpectError
boolean = validator.isVariableWidth(boolean);

boolean = validator.isDataURI(string);
// $ExpectError
boolean = validator.isDataURI(boolean);
// END TEST

// TEST: output->boolean input<-(string, {min: number, max: number})
// TEST: input<-(string, {min?: number, max?: number}?)
boolean = validator.isFloat(string);
boolean = validator.isFloat(string, { min: number });
boolean = validator.isFloat(string, { max: number });
boolean = validator.isFloat(string, { min: number, max: number });
// $ExpectError
boolean = validator.isFloat(number);
// $ExpectError
boolean = validator.isFloat(string, { min: string, max: number });
// $ExpectError
boolean = validator.isFloat(string, { min: boolean, max: number });

boolean = validator.isInt(string);
boolean = validator.isInt(string, { min: number });
boolean = validator.isInt(string, { max: number });
boolean = validator.isInt(string, { min: number, max: number });
// $ExpectError
boolean = validator.isInt(number);
// $ExpectError
boolean = validator.isInt(string, { min: string, max: number });
// $ExpectError
boolean = validator.isInt(string, { min: boolean, max: number });
// END TEST

// TEST: input<-(string, {min: number, max?: number})
boolean = validator.isLength(string, { min: number, max: number });
boolean = validator.isLength(string, { min: number });
// $ExpectError
boolean = validator.isLength(number);
// $ExpectError
boolean = validator.isLength(string);
// $ExpectError
boolean = validator.isLength(string, {});
// $ExpectError
boolean = validator.isLength(string, { max: number });
// $ExpectError
boolean = validator.isLength(string, { min: string, max: number });
// $ExpectError
boolean = validator.isLength(string, { min: number, max: boolean });

boolean = validator.isByteLength(string, { min: number, max: number });
boolean = validator.isByteLength(string, { min: number });
// $ExpectError
boolean = validator.isByteLength(number);
// $ExpectError
boolean = validator.isByteLength(string);
// $ExpectError
boolean = validator.isByteLength(string, {});
// $ExpectError
boolean = validator.isByteLength(string, { max: number });
// $ExpectError
boolean = validator.isByteLength(string, { min: string, max: number });
// $ExpectError
boolean = validator.isByteLength(string, { min: number, max: boolean });
// END TEST
// END TEST

// TEST: output->boolean input<-(string, mixed?)
boolean = validator.contains(string, string);
boolean = validator.contains(string, number);
boolean = validator.contains(string);
// END TEST

// TEST: output->boolean input<-(string, string)
boolean = validator.equals(string, string);
// $ExpectError
boolean = validator.equals(string, number);
// $ExpectError
boolean = validator.equals(number, string);
// $ExpectError
boolean = validator.equals(string);

boolean = validator.isWhitelisted(string, string);
// $ExpectError
boolean = validator.isWhitelisted(string, number);
// $ExpectError
boolean = validator.isWhitelisted(number, string);
// $ExpectError
boolean = validator.isWhitelisted(string);

boolean = validator.isAfter(string, string);
boolean = validator.isAfter(string);
// $ExpectError
boolean = validator.isAfter(string, number);
// $ExpectError
boolean = validator.isAfter(number, string);

boolean = validator.isBefore(string, string);
boolean = validator.isBefore(string);
// $ExpectError
boolean = validator.isBefore(string, number);
// $ExpectError
boolean = validator.isBefore(number, string);
// END TEST

// TEST: output->boolean input<-(string, string|number)
boolean = validator.isDivisibleBy(string, number);
boolean = validator.isDivisibleBy(string, string);
// $ExpectError
boolean = validator.isDivisibleBy(number, string);
// $ExpectError
boolean = validator.isDivisibleBy(string);
// $ExpectError
boolean = validator.isDivisibleBy(boolean, string);
// $ExpectError
boolean = validator.isDivisibleBy(string, boolean);
// END TEST

// TEST: output->boolean input<-(string, Array<string>|string)
boolean = validator.isIn(string, string);
boolean = validator.isIn(string, [string]);
// $ExpectError
boolean = validator.isIn(string, boolean);
// $ExpectError
boolean = validator.isIn(string, [boolean]);
// $ExpectError
boolean = validator.isIn(boolean, string);
// END TEST

// TEST: output->boolean input<-(string, enum)
boolean = validator.isIP(string);
boolean = validator.isIP(string, 4);
boolean = validator.isIP(string, 6);
// $ExpectError
boolean = validator.isIP(boolean);
// $ExpectError
boolean = validator.isIP(boolean, 6);
// $ExpectError
boolean = validator.isIP(string, 10);
// END TEST

boolean = validator.isISBN(string);
boolean = validator.isISBN(string, 10);
boolean = validator.isISBN(string, 13);
// $ExpectError
boolean = validator.isISBN(boolean);
// $ExpectError
boolean = validator.isISBN(boolean, 10);
// $ExpectError
boolean = validator.isISBN(string, 20);


boolean = validator.isAlpha(string);
boolean = validator.isAlpha(string, 'ar-JO');
// $ExpectError
boolean = validator.isAlpha(boolean);
// $ExpectError
boolean = validator.isAlpha(string, string);
// $ExpectError
boolean = validator.isAlpha(string, 'fr-BE');

boolean = validator.isAlphanumeric(string);
boolean = validator.isAlphanumeric(string, 'fr-BE');
// $ExpectError
boolean = validator.isAlphanumeric(boolean);
// $ExpectError
boolean = validator.isAlphanumeric(string, string);

boolean = validator.isMobilePhone(string, 'en-US');
// $ExpectError
boolean = validator.isMobilePhone(string);
// $ExpectError
boolean = validator.isMobilePhone(boolean, 'en-US');
// $ExpectError
boolean = validator.isMobilePhone(string, 'ar-JO');

boolean = validator.isUUID(string);
boolean = validator.isUUID(string, 3);
boolean = validator.isUUID(string, 4);
boolean = validator.isUUID(string, 5);
// $ExpectError
boolean = validator.isUUID(boolean);
// $ExpectError
boolean = validator.isUUID(boolean, 3);
// $ExpectError
boolean = validator.isUUID(string, 10);
// END TEST

// TEST: output->boolean input<-(string, options?)
boolean = validator.isISSN(string);
boolean = validator.isISSN(string, {});
boolean = validator.isISSN(string, { case_sensitive: boolean });
boolean = validator.isISSN(string, { require_hyphen: boolean });
boolean = validator.isISSN(string, { case_sensitive: boolean, require_hyphen: boolean });
// $ExpectError
boolean = validator.isISSN(boolean);
// $ExpectError
boolean = validator.isISSN(string, { case_sensitive: string});
// $ExpectError
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
// $ExpectError
boolean = validator.isCurrency(boolean);
// $ExpectError
boolean = validator.isCurrency(string, { symbol: number });
// $ExpectError
boolean = validator.isCurrency(string, { require_symbol: number });
// $ExpectError
boolean = validator.isCurrency(string, { allow_space_after_symbol: number });
// $ExpectError
boolean = validator.isCurrency(string, { symbol_after_digits: number });
// $ExpectError
boolean = validator.isCurrency(string, { allow_negatives: number });
// $ExpectError
boolean = validator.isCurrency(string, { parens_for_negatives: number });
// $ExpectError
boolean = validator.isCurrency(string, { negative_sign_before_digits: number });
// $ExpectError
boolean = validator.isCurrency(string, { negative_sign_after_digits: number });
// $ExpectError
boolean = validator.isCurrency(string, { allow_negative_sign_placeholder: number });
// $ExpectError
boolean = validator.isCurrency(string, { thousands_separator: number });
// $ExpectError
boolean = validator.isCurrency(string, { decimal_separator: number });
// $ExpectError
boolean = validator.isCurrency(string, { allow_space_after_digits: number });

boolean = validator.isEmail(string);
boolean = validator.isEmail(string, {
  allow_display_name: boolean,
  require_display_name: boolean,
  allow_utf8_local_part: boolean,
  require_tld: boolean,
})
// $ExpectError
boolean = validator.isEmail(boolean);
// $ExpectError
boolean = validator.isEmail(string, { allow_display_name: number });
// $ExpectError
boolean = validator.isEmail(string, { require_display_name: number });
// $ExpectError
boolean = validator.isEmail(string, { allow_utf8_local_part: number });
// $ExpectError
boolean = validator.isEmail(string, { require_tld: number });

boolean = validator.isFQDN(string);
boolean = validator.isFQDN(string, {
  require_tld: boolean,
  allow_underscores: boolean,
  allow_trailing_dot: boolean,
})
// $ExpectError
boolean = validator.isFQDN(boolean);
// $ExpectError
boolean = validator.isFQDN(string, { require_tld: number });
// $ExpectError
boolean = validator.isFQDN(string, { allow_underscores: number });
// $ExpectError
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
// $ExpectError
boolean = validator.isURL(boolean);
// $ExpectError
boolean = validator.isURL(boolean, { protocols: string });
// $ExpectError
boolean = validator.isURL(boolean, { protocols: [number] });
// $ExpectError
boolean = validator.isURL(string, { require_tld: number });
// $ExpectError
boolean = validator.isURL(string, { require_protocol: number });
// $ExpectError
boolean = validator.isURL(string, { require_host: number });
// $ExpectError
boolean = validator.isURL(string, { require_valid_protocol: number });
// $ExpectError
boolean = validator.isURL(string, { allow_underscores: number });
// $ExpectError
boolean = validator.isURL(string, { host_whitelist: number });
// $ExpectError
boolean = validator.isURL(string, { host_blacklist: number });
// $ExpectError
boolean = validator.isURL(string, { allow_trailing_dot: number });
// $ExpectError
boolean = validator.isURL(string, { allow_protocol_relative_urls: number });

//TODO isDataURI
// END TEST

// TEST: output->boolean input<-(string, string|regexp, string?)
boolean = validator.matches(string, string);
boolean = validator.matches(string, string, string);
boolean = validator.matches(string, new RegExp(string), string);
// $ExpectError
boolean = validator.matches(string);
// $ExpectError
boolean = validator.matches(string, number);
// $ExpectError
boolean = validator.matches(string, string, number);
// END TEST

/** Sanitizers */
// TEST: output->string input<-(string)
string = escape(string);
// $ExpectError
string = escape(number);

string = unescape(string);
// $ExpectError
string = unescape(number);
// END TEST

// TEST: output->Date input<-(string)
date = validator.toDate(string);
// $ExpectError
date = validator.toDate(number);
// END TEST

// TEST: output->number input<-(string)
number = validator.toFloat(string);
// $ExpectError
number = validator.toFloat(number);
// END TEST

// TEST: output->number input<-(string, (string | number)?)
number = validator.toInt(string);
number = validator.toInt(string, string);
number = validator.toInt(string, number);
// $ExpectError
number = validator.toInt(boolean);
// $ExpectError
number = validator.toInt(string, boolean);
// END TEST

// TEST: output->boolean input<-(string, boolean?)
boolean = validator.toBoolean(string);
boolean = validator.toBoolean(string, boolean);
// $ExpectError
boolean = validator.toBoolean(number);
// $ExpectError
boolean = validator.toBoolean(string, number);
//END TEST


// TEST: output->string input<-(string, string?)
string = validator.trim(string);
string = validator.trim(string, string);
// $ExpectError
string = validator.trim(number);
// $ExpectError
string = validator.trim(string, number);

string = validator.ltrim(string);
string = validator.ltrim(string, string);
// $ExpectError
string = validator.ltrim(number);
// $ExpectError
string = validator.ltrim(string, number);

string = validator.trim(string);
string = validator.trim(string, string);
// $ExpectError
string = validator.trim(number);
// $ExpectError
string = validator.trim(string, number);
// END TEST

// TEST: output->string input<-(string, string)
string = validator.blacklist(string, string);
// $ExpectError
string = validator.blacklist(string);
// $ExpectError
string = validator.blacklist(number, string);
// $ExpectError
string = validator.blacklist(string, number);

string = validator.whitelist(string, string);
// $ExpectError
string = validator.whitelist(string);
// $ExpectError
string = validator.whitelist(number, string);
// $ExpectError
string = validator.whitelist(string, number);
// END TEST

// TEST: output->string input<-(string, boolean)
string = validator.stripLow(string);
string = validator.stripLow(string, boolean);
// $ExpectError
string = validator.stripLow(number);
// $ExpectError
string = validator.stripLow(string, number);
// END TEST

// TEST: output->string input<-(string, options)
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
// $ExpectError
string = validator.normalizeEmail(boolean);
// $ExpectError
string = validator.normalizeEmail(string, boolean);
// $ExpectError
string = validator.normalizeEmail(string, { all_lowercase: number });
// $ExpectError
string = validator.normalizeEmail(string, { gmail_lowercase: number });
// $ExpectError
string = validator.normalizeEmail(string, { gmail_remove_dots: number });
// $ExpectError
string = validator.normalizeEmail(string, { gmail_remove_subaddress: number });
// $ExpectError
string = validator.normalizeEmail(string, { gmail_convert_googlemaildotcom: number });
// $ExpectError
string = validator.normalizeEmail(string, { outlookdotcom_lowercase: number });
// $ExpectError
string = validator.normalizeEmail(string, { outlookdotcom_remove_subaddress: number });
// $ExpectError
string = validator.normalizeEmail(string, { yahoo_lowercase: number });
// $ExpectError
string = validator.normalizeEmail(string, { yahoo_remove_subaddress: number });
// $ExpectError
string = validator.normalizeEmail(string, { icloud_lowercase: number });
// $ExpectError
string = validator.normalizeEmail(string, { icloud_remove_subaddress: number });
// END TEST
