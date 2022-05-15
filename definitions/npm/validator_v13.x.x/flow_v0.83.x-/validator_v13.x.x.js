declare module 'validator' {
  declare module.exports: {|
    blacklist: $Exports<'validator/lib/blacklist'>,
    contains: $Exports<'validator/lib/contains'>,
    equals: $Exports<'validator/lib/equals'>,
    escape: $Exports<'validator/lib/escape'>,
    isAfter: $Exports<'validator/lib/isAfter'>,
    isAlpha: $Exports<'validator/lib/isAlpha'>,
    isAlphanumeric: $Exports<'validator/lib/isAlphanumeric'>,
    isBase32: $Exports<'validator/lib/isBase32'>,
    isBase58: $Exports<'validator/lib/isBase58'>,
    isBase64: $Exports<'validator/lib/isBase64'>,
    isBefore: $Exports<'validator/lib/isBefore'>,
    isBIC: $Exports<'validator/lib/isBIC'>,
    isBoolean: $Exports<'validator/lib/isBoolean'>,
    isBtcAddress: $Exports<'validator/lib/isBtcAddress'>,
    isByteLength: $Exports<'validator/lib/isByteLength'>,
    isCreditCard: $Exports<'validator/lib/isCreditCard'>,
    isCurrency: $Exports<'validator/lib/isCurrency'>,
    isDataURI: $Exports<'validator/lib/isDataURI'>,
    isDate: $Exports<'validator/lib/isDate'>,
    isDecimal: $Exports<'validator/lib/isDecimal'>,
    isDivisibleBy: $Exports<'validator/lib/isDivisibleBy'>,
    isEAN: $Exports<'validator/lib/isEAN'>,
    isEmail: $Exports<'validator/lib/isEmail'>,
    isEmpty: $Exports<'validator/lib/isEmpty'>,
    isEthereumAddress: $Exports<'validator/lib/isEthereumAddress'>,
    isFloat: $Exports<'validator/lib/isFloat'>,
    isFQDN: $Exports<'validator/lib/isFQDN'>,
    isFullWidth: $Exports<'validator/lib/isFullWidth'>,
    isHalfWidth: $Exports<'validator/lib/isHalfWidth'>,
    isHash: $Exports<'validator/lib/isHash'>,
    isHexadecimal: $Exports<'validator/lib/isHexadecimal'>,
    isHexColor: $Exports<'validator/lib/isHexColor'>,
    isHSL: $Exports<'validator/lib/isHSL'>,
    isIBAN: $Exports<'validator/lib/isIBAN'>,
    isIdentityCard: $Exports<'validator/lib/isIdentityCard'>,
    isIMEI: $Exports<'validator/lib/isIMEI'>,
    isIn: $Exports<'validator/lib/isIn'>,
    isInt: $Exports<'validator/lib/isInt'>,
    isIP: $Exports<'validator/lib/isIP'>,
    isIPRange: $Exports<'validator/lib/isIPRange'>,
    isISBN: $Exports<'validator/lib/isISBN'>,
    isISIN: $Exports<'validator/lib/isISIN'>,
    isISO31661Alpha2: $Exports<'validator/lib/isISO31661Alpha2'>,
    isISO31661Alpha3: $Exports<'validator/lib/isISO31661Alpha3'>,
    isISO4217: $Exports<'validator/lib/isISO4217'>,
    isISO8601: $Exports<'validator/lib/isISO8601'>,
    isISRC: $Exports<'validator/lib/isISRC'>,
    isISSN: $Exports<'validator/lib/isISSN'>,
    isJSON: $Exports<'validator/lib/isJSON'>,
    isJWT: $Exports<'validator/lib/isJWT'>,
    isLatLong: $Exports<'validator/lib/isLatLong'>,
    isLength: $Exports<'validator/lib/isLength'>,
    isLicensePlate: $Exports<'validator/lib/isLicensePlate'>,
    isLocale: $Exports<'validator/lib/isLocale'>,
    isLowercase: $Exports<'validator/lib/isLowercase'>,
    isMACAddress: $Exports<'validator/lib/isMACAddress'>,
    isMagnetURI: $Exports<'validator/lib/isMagnetURI'>,
    isMD5: $Exports<'validator/lib/isMD5'>,
    isMimeType: $Exports<'validator/lib/isMimeType'>,
    isMobilePhone: $Exports<'validator/lib/isMobilePhone'>,
    isMongoId: $Exports<'validator/lib/isMongoId'>,
    isMultibyte: $Exports<'validator/lib/isMultibyte'>,
    isNumeric: $Exports<'validator/lib/isNumeric'>,
    isOctal: $Exports<'validator/lib/isOctal'>,
    isPassportNumber: $Exports<'validator/lib/isPassportNumber'>,
    isPort: $Exports<'validator/lib/isPort'>,
    isPostalCode: $Exports<'validator/lib/isPostalCode'>,
    isRFC3339: $Exports<'validator/lib/isRFC3339'>,
    isRgbColor: $Exports<'validator/lib/isRgbColor'>,
    isSemVer: $Exports<'validator/lib/isSemVer'>,
    isSlug: $Exports<'validator/lib/isSlug'>,
    isStrongPassword: $Exports<'validator/lib/isStrongPassword'>,
    isSurrogatePair: $Exports<'validator/lib/isSurrogatePair'>,
    isTaxID: $Exports<'validator/lib/isTaxID'>,
    isUppercase: $Exports<'validator/lib/isUppercase'>,
    isURL: $Exports<'validator/lib/isURL'>,
    isUUID: $Exports<'validator/lib/isUUID'>,
    isVariableWidth: $Exports<'validator/lib/isVariableWidth'>,
    isVAT: $Exports<'validator/lib/isVAT'>,
    isWhitelisted: $Exports<'validator/lib/isWhitelisted'>,
    ltrim: $Exports<'validator/lib/ltrim'>,
    matches: $Exports<'validator/lib/matches'>,
    normalizeEmail: $Exports<'validator/lib/normalizeEmail'>,
    rtrim: $Exports<'validator/lib/rtrim'>,
    stripLow: $Exports<'validator/lib/stripLow'>,
    toBoolean: $Exports<'validator/lib/toBoolean'>,
    toDate: $Exports<'validator/lib/toDate'>,
    toFloat: $Exports<'validator/lib/toFloat'>,
    toInt: $Exports<'validator/lib/toInt'>,
    trim: $Exports<'validator/lib/unescape'>,
    whitelist: $Exports<'validator/lib/whitelist'>,
  |};
}

// ===========================================================
// es exports
// ===========================================================

declare module 'validator/es/lib/blacklist' {
  declare module.exports: $Exports<'validator/lib/blacklist'>;
}

declare module 'validator/es/lib/contains' {
  declare module.exports: $Exports<'validator/lib/contains'>;
}

declare module 'validator/es/lib/equals' {
  declare module.exports: $Exports<'validator/lib/equals'>;
}

declare module 'validator/es/lib/escape' {
  declare module.exports: $Exports<'validator/lib/escape'>;
}

declare module 'validator/es/lib/isAfter' {
  declare module.exports: $Exports<'validator/lib/isAfter'>;
}

declare module 'validator/es/lib/isAlpha' {
  declare module.exports: $Exports<'validator/lib/isAlpha'>;
}

declare module 'validator/es/lib/isAlphanumeric' {
  declare module.exports: $Exports<'validator/lib/isAlphanumeric'>;
}

declare module 'validator/es/lib/isAscii' {
  declare module.exports: $Exports<'validator/lib/isAscii'>;
}

declare module 'validator/es/lib/isBase32' {
  declare module.exports: $Exports<'validator/lib/isBase32'>;
}

declare module 'validator/es/lib/isBase58' {
  declare module.exports: $Exports<'validator/lib/isBase58'>;
}

declare module 'validator/es/lib/isBase64' {
  declare module.exports: $Exports<'validator/lib/isBase64'>;
}

declare module 'validator/es/lib/isBefore' {
  declare module.exports: $Exports<'validator/lib/isBefore'>;
}

declare module 'validator/es/lib/isBIC' {
  declare module.exports: $Exports<'validator/lib/isBIC'>;
}

declare module 'validator/es/lib/isBoolean' {
  declare module.exports: $Exports<'validator/lib/isBoolean'>;
}

declare module 'validator/es/lib/isBtcAddress' {
  declare module.exports: $Exports<'validator/lib/isBtcAddress'>;
}

declare module 'validator/es/lib/isByteLength' {
  declare module.exports: $Exports<'validator/lib/isByteLength'>;
}

declare module 'validator/es/lib/isCreditCard' {
  declare module.exports: $Exports<'validator/lib/isCreditCard'>;
}

declare module 'validator/es/lib/isCurrency' {
  declare module.exports: $Exports<'validator/lib/isCurrency'>;
}

declare module 'validator/es/lib/isDataURI' {
  declare module.exports: $Exports<'validator/lib/isDataURI'>;
}

declare module 'validator/es/lib/isDate' {
  declare module.exports: $Exports<'validator/lib/isDate'>;
}

declare module 'validator/es/lib/isDecimal' {
  declare module.exports: $Exports<'validator/lib/isDecimal'>;
}

declare module 'validator/es/lib/isDivisibleBy' {
  declare module.exports: $Exports<'validator/lib/isDivisibleBy'>;
}

declare module 'validator/es/lib/isEAN' {
  declare module.exports: $Exports<'validator/lib/isEAN'>;
}

declare module 'validator/es/lib/isEmail' {
  declare module.exports: $Exports<'validator/lib/isEmail'>;
}

declare module 'validator/es/lib/isEmpty' {
  declare module.exports: $Exports<'validator/lib/isEmpty'>;
}

declare module 'validator/es/lib/isEthereumAddress' {
  declare module.exports: $Exports<'validator/lib/isEthereumAddress'>;
}

declare module 'validator/es/lib/isFloat' {
  declare module.exports: $Exports<'validator/lib/isFloat'>;
}

declare module 'validator/es/lib/isFQDN' {
  declare module.exports: $Exports<'validator/lib/isFQDN'>;
}

declare module 'validator/es/lib/isFullWidth' {
  declare module.exports: $Exports<'validator/lib/isFullWidth'>;
}

declare module 'validator/es/lib/isHalfWidth' {
  declare module.exports: $Exports<'validator/lib/isHalfWidth'>;
}

declare module 'validator/es/lib/isHash' {
  declare module.exports: $Exports<'validator/lib/isHash'>;
}

declare module 'validator/es/lib/isHexadecimal' {
  declare module.exports: $Exports<'validator/lib/isHexadecimal'>;
}

declare module 'validator/es/lib/isHexColor' {
  declare module.exports: $Exports<'validator/lib/isHexColor'>;
}

declare module 'validator/es/lib/isHSL' {
  declare module.exports: $Exports<'validator/lib/isHSL'>;
}

declare module 'validator/es/lib/isIBAN' {
  declare module.exports: $Exports<'validator/lib/isIBAN'>;
}

declare module 'validator/es/lib/isIdentityCard' {
  declare module.exports: $Exports<'validator/lib/isIdentityCard'>;
}

declare module 'validator/es/lib/isIMEI' {
  declare module.exports: $Exports<'validator/lib/isIMEI'>;
}

declare module 'validator/es/lib/isIn' {
  declare module.exports: $Exports<'validator/lib/isIn'>;
}

declare module 'validator/es/lib/isInt' {
  declare module.exports: $Exports<'validator/lib/isInt'>;
}

declare module 'validator/es/lib/isIP' {
  declare module.exports: $Exports<'validator/lib/isIP'>;
}

declare module 'validator/es/lib/isIPRange' {
  declare module.exports: $Exports<'validator/lib/isIPRange'>;
}

declare module 'validator/es/lib/isISBN' {
  declare module.exports: $Exports<'validator/lib/isISBN'>;
}

declare module 'validator/es/lib/isISIN' {
  declare module.exports: $Exports<'validator/lib/isISIN'>;
}

declare module 'validator/es/lib/isISO31661Alpha2' {
  declare module.exports: $Exports<'validator/lib/isISO31661Alpha2'>;
}

declare module 'validator/es/lib/isISO31661Alpha3' {
  declare module.exports: $Exports<'validator/lib/isISO31661Alpha3'>;
}

declare module 'validator/es/lib/isISO4217' {
  declare module.exports: $Exports<'validator/lib/isISO4217'>;
}

declare module 'validator/es/lib/isISO8601' {
  declare module.exports: $Exports<'validator/lib/isISO8601'>;
}

declare module 'validator/es/lib/isISRC' {
  declare module.exports: $Exports<'validator/lib/isISRC'>;
}

declare module 'validator/es/lib/isISSN' {
  declare module.exports: $Exports<'validator/lib/isISSN'>;
}

declare module 'validator/es/lib/isJSON' {
  declare module.exports: $Exports<'validator/lib/isJSON'>;
}

declare module 'validator/es/lib/isJWT' {
  declare module.exports: $Exports<'validator/lib/isJWT'>;
}

declare module 'validator/es/lib/isLatLong' {
  declare module.exports: $Exports<'validator/lib/isLatLong'>;
}

declare module 'validator/es/lib/isLength' {
  declare module.exports: $Exports<'validator/lib/isLength'>;
}

declare module 'validator/es/lib/isLicensePlate' {
  declare module.exports: $Exports<'validator/lib/isLicensePlate'>;
}

declare module 'validator/es/lib/isLocale' {
  declare module.exports: $Exports<'validator/lib/isLocale'>;
}

declare module 'validator/es/lib/isLowercase' {
  declare module.exports: $Exports<'validator/lib/isLowercase'>;
}

declare module 'validator/es/lib/isMACAddress' {
  declare module.exports: $Exports<'validator/lib/isMACAddress'>;
}

declare module 'validator/es/lib/isMagnetURI' {
  declare module.exports: $Exports<'validator/lib/isMagnetURI'>;
}

declare module 'validator/es/lib/isMD5' {
  declare module.exports: $Exports<'validator/lib/isMD5'>;
}

declare module 'validator/es/lib/isMimeType' {
  declare module.exports: $Exports<'validator/lib/isMimeType'>;
}

declare module 'validator/es/lib/isMobilePhone' {
  declare module.exports: $Exports<'validator/lib/isMobilePhone'>;
}

declare module 'validator/es/lib/isMongoId' {
  declare module.exports: $Exports<'validator/lib/isMongoId'>;
}

declare module 'validator/es/lib/isMultibyte' {
  declare module.exports: $Exports<'validator/lib/isMultibyte'>;
}

declare module 'validator/es/lib/isNumeric' {
  declare module.exports: $Exports<'validator/lib/isNumeric'>;
}

declare module 'validator/es/lib/isOctal' {
  declare module.exports: $Exports<'validator/lib/isOctal'>;
}

declare module 'validator/es/lib/isPassportNumber' {
  declare module.exports: $Exports<'validator/lib/isPassportNumber'>;
}

declare module 'validator/es/lib/isPort' {
  declare module.exports: $Exports<'validator/lib/isPort'>;
}

declare module 'validator/es/lib/isPostalCode' {
  declare module.exports: $Exports<'validator/lib/isPostalCode'>;
}

declare module 'validator/es/lib/isRFC3339' {
  declare module.exports: $Exports<'validator/lib/isRFC3339'>;
}

declare module 'validator/es/lib/isRgbColor' {
  declare module.exports: $Exports<'validator/lib/isRgbColor'>;
}

declare module 'validator/es/lib/isSemVer' {
  declare module.exports: $Exports<'validator/lib/isSemVer'>;
}

declare module 'validator/es/lib/isSlug' {
  declare module.exports: $Exports<'validator/lib/isSlug'>;
}

declare module 'validator/es/lib/isStrongPassword' {
  declare module.exports: $Exports<'validator/lib/isStrongPassword'>;
}

declare module 'validator/es/lib/isSurrogatePair' {
  declare module.exports: $Exports<'validator/lib/isSurrogatePair'>;
}

declare module 'validator/es/lib/isTaxID' {
  declare module.exports: $Exports<'validator/lib/isTaxID'>;
}

declare module 'validator/es/lib/isUppercase' {
  declare module.exports: $Exports<'validator/lib/isUppercase'>;
}

declare module 'validator/es/lib/isURL' {
  declare module.exports: $Exports<'validator/lib/isURL'>;
}

declare module 'validator/es/lib/isUUID' {
  declare module.exports: $Exports<'validator/lib/isUUID'>;
}

declare module 'validator/es/lib/isVariableWidth' {
  declare module.exports: $Exports<'validator/lib/isVariableWidth'>;
}

declare module 'validator/es/lib/isVAT' {
  declare module.exports: $Exports<'validator/lib/isVAT'>;
}

declare module 'validator/es/lib/isWhitelisted' {
  declare module.exports: $Exports<'validator/lib/isWhitelisted'>;
}

declare module 'validator/es/lib/ltrim' {
  declare module.exports: $Exports<'validator/lib/ltrim'>;
}

declare module 'validator/es/lib/matches' {
  declare module.exports: $Exports<'validator/lib/matches'>;
}

declare module 'validator/es/lib/normalizeEmail' {
  declare module.exports: $Exports<'validator/lib/normalizeEmail'>;
}

declare module 'validator/es/lib/rtrim' {
  declare module.exports: $Exports<'validator/lib/rtrim'>;
}

declare module 'validator/es/lib/stripLow' {
  declare module.exports: $Exports<'validator/lib/stripLow'>;
}

declare module 'validator/es/lib/toBoolean' {
  declare module.exports: $Exports<'validator/lib/toBoolean'>;
}

declare module 'validator/es/lib/toDate' {
  declare module.exports: $Exports<'validator/lib/toDate'>;
}

declare module 'validator/es/lib/toFloat' {
  declare module.exports: $Exports<'validator/lib/toFloat'>;
}

declare module 'validator/es/lib/toInt' {
  declare module.exports: $Exports<'validator/lib/toInt'>;
}

declare module 'validator/es/lib/trim' {
  declare module.exports: $Exports<'validator/lib/trim'>;
}

declare module 'validator/es/lib/unescape' {
  declare module.exports: $Exports<'validator/lib/unescape'>;
}

declare module 'validator/es/lib/whitelist' {
  declare module.exports: $Exports<'validator/lib/whitelist'>;
}

// ===========================================================
// lib exports
// ===========================================================

declare module 'validator/lib/blacklist' {
  /**
   * Remove characters that appear in the blacklist.
   *
   * @param chars - The characters are used in a `RegExp` and so you will need to escape some chars, e.g. `blacklist(input, '\\[\\]')`.
   */
  declare module.exports: (input: string, chars: string) => string;
}

declare module 'validator/lib/contains' {
  /**
   * Check if the string contains the seed.
   *
   * @param seed - Seed
   */
  declare module.exports: (str: string, seed: any) => boolean;
}

declare module 'validator/lib/equals' {
  /**
   * Check if the string matches the comparison.
   *
   * @param comparison - String to compare
   */
  declare module.exports: (str: string, comparison: string) => boolean;
}

declare module 'validator/lib/escape' {
  /**
   * Replace `<`, `>`, `&`, `'`, `"` and `/` with HTML entities.
   */
  declare module.exports: (input: string) => string;
}

declare module 'validator/lib/isAfter' {
  /**
   * Check if the string is a date that's after the specified date.
   *
   * @param [date] - Date string (defaults to now)
   */
  declare module.exports: (str: string, date?: string) => boolean;
}

declare module 'validator/lib/isAlpha' {
  declare type AlphaLocale =
    | 'en-US'
    | 'bg-BG'
    | 'cs-CZ'
    | 'da-DK'
    | 'de-DE'
    | 'el-GR'
    | 'es-AR'
    | 'es-ES'
    | 'fr-FR'
    | 'it-IT'
    | 'nb-NO'
    | 'nl-NL'
    | 'nn-NO'
    | 'hu-HU'
    | 'pl-PL'
    | 'pt-PT'
    | 'ru-RU'
    | 'sl-SI'
    | 'sk-SK'
    | 'sr-RS@latin'
    | 'sr-RS'
    | 'sv-SE'
    | 'tr-TR'
    | 'uk-UA'
    | 'ku-IQ'
    | 'ar'
    | 'he'
    | 'fa-IR'
    | 'en-AU'
    | 'en-GB'
    | 'en-HK'
    | 'en-IN'
    | 'en-NZ'
    | 'en-ZA'
    | 'en-ZM'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-QM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SD'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'pt-BR'
    | 'pl-Pl';

  declare type IsAlphaOptions = {|
    /**
     * @default undefined
     */
    ignore?: string | RegExp | void,
  |};

  /**
   * Check if the string contains only letters (a-zA-Z).
   *
   * @param [locale] - AlphaLocale
   * @param [options] - IsAlphaOptions
   */
  declare module.exports: (str: string, locale?: AlphaLocale, options?: IsAlphaOptions) => boolean;
}

declare module 'validator/lib/isAlphanumeric' {
  declare type AlphanumericLocale =
    | 'en-US'
    | 'bg-BG'
    | 'cs-CZ'
    | 'da-DK'
    | 'de-DE'
    | 'el-GR'
    | 'es-AR'
    | 'es-ES'
    | 'fr-FR'
    | 'it-IT'
    | 'hu-HU'
    | 'nb-NO'
    | 'nl-NL'
    | 'nn-NO'
    | 'pl-PL'
    | 'pt-PT'
    | 'ru-RU'
    | 'sl-SI'
    | 'sk-SK'
    | 'sr-RS@latin'
    | 'sr-RS'
    | 'sv-SE'
    | 'tr-TR'
    | 'uk-UA'
    | 'ku-IQ'
    | 'ar'
    | 'he'
    | 'fa-IR'
    | 'en-AU'
    | 'en-GB'
    | 'en-HK'
    | 'en-IN'
    | 'en-NZ'
    | 'en-ZA'
    | 'en-ZM'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-QM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SD'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'pt-BR'
    | 'pl-Pl';

  declare type IsAlphanumericOptions = {|
    /**
     * @default undefined
     */
    ignore?: string | RegExp | void,
  |};

  /**
   * Check if the string contains only letters and numbers.
   *
   * @param [locale] - AlphanumericLocale
   * @param [options] - IsAlphanumericOptions
   */
  declare module.exports: (str: string, locale?: AlphanumericLocale, options?: IsAlphanumericOptions) => boolean;
}

declare module 'validator/lib/isAscii' {
  /**
   * Check if the string contains ASCII chars only.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isBase32' {
  /**
   * Check if a string is base32 encoded.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isBase58' {
  /**
   * check if a string is base58 encoded
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isBase64' {
  declare type IsBase64Options = {|
    /**
     * @default false
     */
    urlSafe?: boolean,
  |};

  /**
   * Check if a string is base64 encoded.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsBase64Options) => boolean;
}

declare module 'validator/lib/isBefore' {
  /**
   * Check if the string is a date that's before the specified date.
   *
   * @param [date] - Date string (defaults to now)
   */
  declare module.exports: (str: string, date?: string) => boolean;
}

declare module 'validator/lib/isBIC' {
  /**
   * Check if a string is a BIC (Bank Identification Code) or SWIFT code.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isBoolean' {
  declare type Options = {|
    /**
     * If loose is is set to false, the validator will strictly match ['true', 'false', '0', '1'].
     * If loose is set to true, the validator will also match 'yes', 'no', and will match a valid boolean string of any case. (eg: ['true', 'True', 'TRUE']).
     * @default false
     */
    loose?: boolean,
  |};

  /**
   * check if a string is a boolean.
   */
  declare module.exports: (str: string, options?: Options) => boolean;
}

declare module 'validator/lib/isBtcAddress' {
  /**
   * Check if the string is a valid BTC address.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isByteLength' {
   declare type IsByteLengthOptions = {|
    /**
     * @default 0
     */
    min?: number,
    /**
     * @default undefined
     */
    max?: number,
  |};

  /**
   * Check if the string's length (in UTF-8 bytes) falls in a range.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsByteLengthOptions) => boolean;
}

declare module 'validator/lib/isCreditCard' {
  /**
   * Check if the string is a credit card.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isCurrency' {
  declare type IsCurrencyOptions = {|
    /**
     * @default '$'
     */
    symbol?: string,
    /**
     * @default false
     */
    require_symbol?: boolean,
    /**
     * @default false
     */
    allow_space_after_symbol?: boolean,
    /**
     * @default false
     */
    symbol_after_digits?: boolean,
    /**
     * @default true
     */
    allow_negatives?: boolean,
    /**
     * @default false
     */
    parens_for_negatives?: boolean,
    /**
     * @default false
     */
    negative_sign_before_digits?: boolean,
    /**
     * @default false
     */
    negative_sign_after_digits?: boolean,
    /**
     * @default false
     */
    allow_negative_sign_placeholder?: boolean,
    /**
     * @default ','
     */
    thousands_separator?: string,
    /**
     * @default '.'
     */
    decimal_separator?: string,
    /**
     * @default true
     */
    allow_decimal?: boolean,
    /**
     * @default false
     */
    require_decimal?: boolean,
    /**
     * The array `digits_after_decimal` is filled with the exact number of digits allowed not a range, for example a range `1` to `3` will be given as `[1, 2, 3]`.
     *
     * @default [2]
     */
    digits_after_decimal?: Array<number>,
    /**
     * @default false
     */
    allow_space_after_digits?: boolean,
  |};

  /**
   * Check if the string is a valid currency amount.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsCurrencyOptions) => boolean;
}

declare module 'validator/lib/isDataURI' {
  /**
   * Check if the string is a [data uri format](https://developer.mozilla.org/en-US/docs/Web/HTTP/data_URIs).
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isDate' {
  declare type IsDateOptions = {|
    /**
     * @default false
     */
    format?: string,
    /**
     * If strictMode is set to true,
     * the validator will reject inputs different from format.
     *
     * @default false
     */
    strictMode?: boolean,
    /**
     * `delimiters` is an array of allowed date delimiters
     *
     * @default ['/', '-']
     */
    delimiters?: Array<string>,
  |};

  /**
   * Check if the string is a valid date.
   */
  declare module.exports: (str: string, options?: IsDateOptions) => boolean;
}

declare module 'validator/lib/isDecimal' {
  import type { FloatLocale } from 'validator/lib/isFloat';

  declare type DecimalLocale = FloatLocale;

  declare type IsDecimalOptions = {|
    /**
     * @default false
     */
    force_decimal?: boolean,
    /**
     * `decimal_digits` is given as a range like `'1,3'`,
     * a specific value like `'3'` or min like `'1,'`
     *
     * @default '1,'
     */
    decimal_digits?: string,
    /**
     * DecimalLocale
     *
     * @default 'en-US'
     */
    locale?: DecimalLocale,
  |};

  /**
   * Check if the string represents a decimal number,
   * such as `0.1`, `.3`, `1.1`, `1.00003`, `4.0` etc.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsDecimalOptions) => boolean;
}

declare module 'validator/lib/isDivisibleBy' {
  /**
   * Check if the string is a number that's divisible by another.
   *
   * @param number - Divider number
   */
  declare module.exports: (str: string, number: number) => boolean;
}

declare module 'validator/lib/isEAN' {
  /**
   * Check if the string is an EAN (European Article Number).
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isEmail' {
  declare type IsEmailOptions = {|
    /**
     * If `allow_display_name` is set to `true`, the validator will also match `Display Name <email-address>`.
     *
     * @default false
     */
    allow_display_name?: boolean,
    /**
     * If `require_display_name` is set to `true`, the validator will reject strings without the format `Display Name <email-address>`.
     *
     * @default false
     */
    require_display_name?: boolean,
    /**
     * If `allow_utf8_local_part` is set to `false`, the validator will not allow any non-English UTF8 character in email address' local part.
     *
     * @default true
     */
    allow_utf8_local_part?: boolean,
    /**
     * If `require_tld` is set to `false`, e-mail addresses without having TLD in their domain will also be matched.
     *
     * @default true
     */
    require_tld?: boolean,
    /**
     * If `ignore_max_length` is set to `true`, the validator will not check for the standard max length of an email.
     *
     * @default false
     */
    ignore_max_length?: boolean,
    /**
     * If `allow_ip_domain` is set to `true`, the validator will allow IP addresses in the host part.
     *
     * @default false
     */
    allow_ip_domain?: boolean,
    /**
     * If `domain_specific_validation` is `true`, some additional validation will be enabled,
     * e.g. disallowing certain syntactically valid email addresses that are rejected by GMail.
     *
     * @default false
     */
    domain_specific_validation?: boolean,
    /**
     *  If host_blacklist is set to an array of strings
     *  and the part of the email after the @ symbol matches one of the strings defined in it,
     *  the validation fails.
     */
    host_blacklist?: Array<string>,
  |};

  /**
   * Canonicalizes an email address. (This doesn't validate that the input is an email, if you want to validate the email use `isEmail` beforehand)
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsEmailOptions) => boolean;
}

declare module 'validator/lib/isEmpty' {
  declare type IsEmptyOptions = {|
    /**
     * @default false
     */
    ignore_whitespace?: boolean,
  |};

  /**
   * Check if the string has a length of zero.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsEmptyOptions) => boolean;
}

declare module 'validator/lib/isEthereumAddress' {
  /**
   * Check if the string is an [Ethereum](https://ethereum.org/) address using basic regex. Does not validate address checksums.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isFloat' {
  declare type FloatLocale =
    | 'en-US'
    | 'ar'
    | 'en-AU'
    | 'en-GB'
    | 'en-HK'
    | 'en-IN'
    | 'en-NZ'
    | 'en-ZA'
    | 'en-ZM'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LB'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-QM'
    | 'ar-QA'
    | 'ar-SA'
    | 'ar-SD'
    | 'ar-SY'
    | 'ar-TN'
    | 'ar-YE'
    | 'bg-BG'
    | 'cs-CZ'
    | 'da-DK'
    | 'de-DE'
    | 'el-GR'
    | 'es-ES'
    | 'fr-FR'
    | 'it-IT'
    | 'ku-IQ'
    | 'hu-HU'
    | 'nb-NO'
    | 'nn-NO'
    | 'nl-NL'
    | 'pl-PL'
    | 'pt-PT'
    | 'ru-RU'
    | 'sl-SI'
    | 'sr-RS@latin'
    | 'sr-RS'
    | 'sv-SE'
    | 'tr-TR'
    | 'uk-UA'
    | 'pt-BR'
    | 'pl-Pl';

  declare type IsFloatOptions = {|
    /**
     * less or equal
     */
    min?: number,
    /**
     * greater or equal
     */
    max?: number,
    /**
     * greater than
     */
    gt?: number,
    /**
     * less than
     */
    lt?: number,
    /**
     * FloatLocale
     */
    locale?: FloatLocale,
  |};

  /**
   * Check if the string is a float.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsFloatOptions) => boolean;
}

declare module 'validator/lib/isFQDN' {
  declare type IsFQDNOptions = {|
    /**
     * @default true
     */
    require_tld?: boolean,
    /**
     * @default false
     */
    allow_underscores?: boolean,
    /**
     * @default false
     */
    allow_trailing_dot?: boolean,
    /**
     * @default false
     */
    allow_numeric_tld?: boolean,
    /**
     * If `allow_wildcard` is set to true, the validator will allow domain starting with `*.` (e.g. `*.example.com` or `*.shop.example.com`).
     * @default false
     */
    allow_wildcard?: boolean,
  |};

  /**
   * Check if the string is a fully qualified domain name (e.g. `domain.com`).
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsFQDNOptions) => boolean;
}

declare module 'validator/lib/isFullWidth' {
  /**
   * Check if the string contains any full-width chars.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isHalfWidth' {
  /**
   * Check if the string contains any half-width chars.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isHash' {
  declare type HashAlgorithm =
    | 'md4'
    | 'md5'
    | 'sha1'
    | 'sha256'
    | 'sha384'
    | 'sha512'
    | 'ripemd128'
    | 'ripemd160'
    | 'tiger128'
    | 'tiger160'
    | 'tiger192'
    | 'crc32'
    | 'crc32b';

  /**
   * Check if the string is a hash of type algorithm.
   *
   * @param algorithm - HashAlgorithm
   */
  declare module.exports: (str: string, algorithm: HashAlgorithm) => boolean;
}

declare module 'validator/lib/isHexadecimal' {
  /**
   * Check if the string is a hexadecimal number.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isHexColor' {
  /**
   * Check if the string is a hexadecimal color.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isHSL' {
  /**
   * Check if the string is an HSL (hue, saturation, lightness, optional alpha) color based on CSS Colors Level 4 specification.
   * Comma-separated format supported. Space-separated format supported with the exception of a few edge cases (ex: hsl(200grad+.1%62%/1)).
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isIBAN' {
  /**
   * Check if a string is a IBAN (International Bank Account Number).
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isIdentityCard' {
  declare type IdentityCardLocale = 'ES' | 'he-IL' | 'zh-TW';

  /**
   * Check if the string is a valid identity card code.
   *
   * @param [locale="any"] - IdentityCardLocale
   */
  declare module.exports: (str: string, locale?: 'any' | IdentityCardLocale) => boolean;
}

declare module 'validator/lib/isIMEI' {
  declare type Options = {|
    /**
     * @default false
     */
    allow_hyphens?: boolean,
  |};

  /**
   * check if the string is a valid IMEI number. Imei should be of format ############### or ##-######-######-#.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: Options) => boolean;
}

declare module 'validator/lib/isIn' {
  /**
   * Check if the string is in a array of allowed values.
   *
   * @param values - Allowed values.
   */
  declare module.exports: (str: string, values: Array<any>) => boolean;
}

declare module 'validator/lib/isInt' {
  declare type IsIntOptions = {|
    /**
     * to check the integer min boundary
     */
    min?: number,
    /**
     * to check the integer max boundary
     */
    max?: number,
    /**
     * if `false`, will disallow integer values with leading zeroes
     * @default true
     */
    allow_leading_zeroes?: boolean,
    /**
     * enforce integers being greater than the value provided
     */
    lt?: number,
    /**
     * enforce integers being less than the value provided
     */
    gt?: number,
  |};

  /**
   * Check if the string is an integer.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsIntOptions) => boolean;
}

declare module 'validator/lib/isIP' {
  declare type IPVersion = '4' | '6' | 4 | 6;

  /**
   * Check if the string is an IP (version 4 or 6).
   *
   * @param [version] - IP Version
   */
  declare module.exports: (str: string, version?: IPVersion) => boolean;
}

declare module 'validator/lib/isIPRange' {
  import type { IPVersion } from 'validator/lib/isIP';

  /**
   * Check if the string is an IP Range (version 4 or 6).
   */
  declare module.exports: (str: string, version?: IPVersion) => boolean;
}

declare module 'validator/lib/isISBN' {
  declare type ISBNVersion = '10' | '13' | 10 | 13;

  /**
   * Check if the string is an ISBN (version 10 or 13).
   *
   * @param [version] - ISBN Version
   */
  declare module.exports: (str: string, version?: ISBNVersion) => boolean;
}

declare module 'validator/lib/isISIN' {
  /**
   * Check if the string is an [ISIN](https://en.wikipedia.org/wiki/International_Securities_Identification_Number) (stock/security identifier).
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isISO31661Alpha2' {
  /**
   * Check if the string is a valid [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) officially assigned country code.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isISO31661Alpha3' {
  /**
   * Check if the string is a valid [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) officially assigned country code.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isISO4217' {
  /**
   * Check if the string is a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) officially assigned currency code.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isISO8601' {
  declare type IsISO8601Options = {|
    /**
     * If `strict` is `true`, performs additional checks for valid dates,
     * e.g. invalidates dates like `2009-02-29`.
     *
     * @default false
     */
    strict?: boolean,
  |};

  /**
   * Check if the string is a valid [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsISO8601Options) => boolean;
}

declare module 'validator/lib/isISRC' {
  /**
   * Check if the string is a [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code).
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isISSN' {
  declare type IsISSNOptions = {|
    /**
     * If `case_sensitive` is `true`, ISSNs with a lowercase `x` as the check digit are rejected.
     *
     * @default false
     */
    case_sensitive?: boolean,
    /**
     * @default false
     */
    require_hyphen?: boolean,
  |};

  /**
   * Check if the string is an [ISSN](https://en.wikipedia.org/wiki/International_Standard_Serial_Number).
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsISSNOptions) => boolean;
}

declare module 'validator/lib/isJSON' {
  /**
   * Check if the string is valid JSON (note: uses `JSON.parse`).
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isJWT' {
  /**
   * Check if the string is valid JWT token.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isLatLong' {
  /**
   * Check if the string is a valid latitude-longitude coordinate in the format:
   *
   * `lat,long` or `lat, long`.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isLength' {
  declare type IsLengthOptions = {|
    /**
     * @default 0
     */
    min?: number,
    /**
     * @default undefined
     */
    max?: number,
  |};

  /**
   * Check if the string's length falls in a range.
   *
   * Note: this function takes into account surrogate pairs.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsLengthOptions) => boolean;
}

declare module 'validator/lib/isLicensePlate' {
  declare type Locale = 'cs-CZ' | 'de-DE' | 'de-LI' | 'fi-FI' | 'pt-PT' | 'sq-AL' | 'pt-BR';

  /**
   * check if string matches the format of a country's license plate.
   *
   * (locale is one of ['cs-CZ', 'de-DE', 'de-LI', 'fi-FI', pt-PT', 'sq-AL', 'pt-BR'] or any)
   */
  declare module.exports: (str: string, locale?: Locale) => boolean;
}

declare module 'validator/lib/isLocale' {
  /**
   * Check if the string is a locale.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isLowercase' {
  /**
   * Check if the string is lowercase.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isMACAddress' {
  declare type IsMACAddressOptions = {|
    /**
     * If `no_colons` is `true`, the validator will allow MAC addresses without the colons.
     * Also, it allows the use of hyphens or spaces.
     *
     * e.g. `01 02 03 04 05 ab` or `01-02-03-04-05-ab`.
     *
     * @default false
     */
    no_colons?: boolean,
  |};

  /**
   * Check if the string is a MAC address.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsMACAddressOptions) => boolean;
}

declare module 'validator/lib/isMagnetURI' {
  /**
   * Check if the string is a [magnet uri format](https://en.wikipedia.org/wiki/Magnet_URI_scheme).
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isMD5' {
  /**
   * Check if the string is a MD5 hash.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isMimeType' {
  /**
   * Check if the string matches to a valid [MIME type](https://en.wikipedia.org/wiki/Media_type) format.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isMobilePhone' {
  declare type PhoneLocale =
    | 'am-AM'
    | 'ar-AE'
    | 'ar-BH'
    | 'ar-DZ'
    | 'ar-LB'
    | 'ar-EG'
    | 'ar-IQ'
    | 'ar-JO'
    | 'ar-KW'
    | 'ar-LY'
    | 'ar-MA'
    | 'ar-OM'
    | 'ar-SA'
    | 'ar-SY'
    | 'ar-TN'
    | 'az-AZ'
    | 'bs-BA'
    | 'be-BY'
    | 'bg-BG'
    | 'bn-BD'
    | 'ca-AD'
    | 'cs-CZ'
    | 'da-DK'
    | 'de-DE'
    | 'de-AT'
    | 'de-CH'
    | 'de-LU'
    | 'el-GR'
    | 'en-AU'
    | 'en-GB'
    | 'en-GG'
    | 'en-GH'
    | 'en-HK'
    | 'en-MO'
    | 'en-IE'
    | 'en-IN'
    | 'en-KE'
    | 'en-MT'
    | 'en-MU'
    | 'en-NG'
    | 'en-NZ'
    | 'en-PK'
    | 'en-PH'
    | 'en-RW'
    | 'en-SG'
    | 'en-SL'
    | 'en-TZ'
    | 'en-UG'
    | 'en-US'
    | 'en-ZA'
    | 'en-ZM'
    | 'en-ZW'
    | 'es-AR'
    | 'es-BO'
    | 'es-CO'
    | 'es-CL'
    | 'es-CR'
    | 'es-DO'
    | 'es-HN'
    | 'es-EC'
    | 'es-ES'
    | 'es-PE'
    | 'es-MX'
    | 'es-PA'
    | 'es-PY'
    | 'es-UY'
    | 'es-VE'
    | 'et-EE'
    | 'fa-IR'
    | 'fi-FI'
    | 'fj-FJ'
    | 'fo-FO'
    | 'fr-FR'
    | 'fr-GF'
    | 'fr-GP'
    | 'fr-MQ'
    | 'fr-RE'
    | 'he-IL'
    | 'hu-HU'
    | 'id-ID'
    | 'it-IT'
    | 'it-SM'
    | 'ja-JP'
    | 'ka-GE'
    | 'kk-KZ'
    | 'kl-GL'
    | 'ko-KR'
    | 'lt-LT'
    | 'lv-LV'
    | 'ms-MY'
    | 'mz-MZ'
    | 'nb-NO'
    | 'ne-NP'
    | 'nl-BE'
    | 'nl-NL'
    | 'nn-NO'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'pt-AO'
    | 'ro-RO'
    | 'ru-RU'
    | 'si-LK'
    | 'sl-SI'
    | 'sk-SK'
    | 'sq-AL'
    | 'sr-RS'
    | 'sv-SE'
    | 'th-TH'
    | 'tr-TR'
    | 'uk-UA'
    | 'uz-UZ'
    | 'vi-VN'
    | 'zh-CN'
    | 'zh-TW';
  declare type PhoneLocaleAlias = 'en-CA' | 'fr-CA' | 'fr-BE' | 'zh-HK' | 'zh-MO' | 'ga-IE' | 'fr-CH' | 'it-CH';

  declare type MobilePhoneLocale = PhoneLocale | PhoneLocaleAlias;

  declare type IsMobilePhoneOptions = {|
    /**
     * If this is set to `true`, the mobile phone number must be supplied with the country code and therefore must start with `+`.
     *
     * @default false
     */
    strictMode?: boolean,
  |}

  /**
   * Check if the string is a mobile phone number.
   *
   * @param [locale] - MobilePhoneLocale(s)
   * @param [options] - Options
   */
  declare module.exports: (
    str: string,
    locale?: 'any' | MobilePhoneLocale | Array<MobilePhoneLocale>,
    options?: IsMobilePhoneOptions,
  ) => boolean;
}

declare module 'validator/lib/isMongoId' {
  /**
   * Check if the string is a valid hex-encoded representation of a [MongoDB ObjectId](http://docs.mongodb.org/manual/reference/object-id/).
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isMultibyte' {
  /**
   * Check if the string contains one or more multibyte chars.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isNumeric' {
  declare type IsNumericOptions = {|
    /**
     * If `no_symbols` is true, the validator will reject numeric strings that feature a symbol (e.g. `+`, `-`, or `.`).
     *
     * @default false
     */
    no_symbols?: boolean,
  |};

  /**
   * Check if the string contains only numbers.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsNumericOptions) => boolean;
}

declare module 'validator/lib/isOctal' {
  /**
   * Check if the string is a valid octal number.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isPassportNumber' {
  /**
   * Check if the string is a valid passport number relative to a specific country code.
   *
   * @param [countryCode] - Country code
   */
  declare module.exports: (str: string, countryCode?: string) => boolean;
}

declare module 'validator/lib/isPort' {
  /**
   * Check if the string is a valid port number.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isPostalCode' {
  declare type PostalCodeLocale =
    | 'AD'
    | 'AT'
    | 'AU'
    | 'BE'
    | 'BG'
    | 'BR'
    | 'CA'
    | 'CH'
    | 'CZ'
    | 'DE'
    | 'DK'
    | 'DZ'
    | 'EE'
    | 'ES'
    | 'FI'
    | 'FR'
    | 'GB'
    | 'GR'
    | 'HR'
    | 'HU'
    | 'ID'
    | 'IE'
    | 'IL'
    | 'IN'
    | 'IS'
    | 'IT'
    | 'JP'
    | 'KE'
    | 'LI'
    | 'LT'
    | 'LU'
    | 'LV'
    | 'MX'
    | 'MT'
    | 'NL'
    | 'NO'
    | 'NZ'
    | 'PL'
    | 'PR'
    | 'PT'
    | 'RO'
    | 'RU'
    | 'SA'
    | 'SE'
    | 'SI'
    | 'SK'
    | 'TN'
    | 'TW'
    | 'UA'
    | 'US'
    | 'ZA'
    | 'ZM';

  /**
   * Check if the string is a postal code
   *
   * @param locale - PostalCodeLocale
   */
  declare module.exports: (str: string, locale: 'any' | PostalCodeLocale) => boolean;
}

declare module 'validator/lib/isRFC3339' {
  /**
   * Check if the string is a valid [RFC 3339](https://tools.ietf.org/html/rfc3339) date.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isRgbColor' {
  /**
   * Check if the string is a rgb or rgba color.
   *
   * @param [includePercentValues=true] - If you don't want to allow to set rgb or rgba values with percents, like rgb(5%,5%,5%), or rgba(90%,90%,90%,.3), then set it to false. (defaults to true)
   */
  declare module.exports: (str: string, includePercentValues?: boolean) => boolean;
}

declare module 'validator/lib/isSemVer' {
  /**
   * Check if the string is a Semantic Versioning Specification (SemVer).
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isSlug' {
  /**
   * Check if the string is of type slug.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isStrongPassword' {
  declare type StrongPasswordOptions = {|
    minLength?: number,
    minLowercase?: number,
    minUppercase?: number,
    minNumbers?: number,
    minSymbols?: number,
    returnScore?: boolean,
    pointsPerUnique?: number,
    pointsPerRepeat?: number,
    pointsForContainingLower?: number,
    pointsForContainingUpper?: number,
    pointsForContainingNumber?: number,
    pointsForContainingSymbol?: number,
  |};

  /**
   * Check if string is considered a strong password. Allows options to be added
   */
  declare module.exports: (str: string, options?: StrongPasswordOptions) => boolean;
}

declare module 'validator/lib/isSurrogatePair' {
  /**
   * Check if the string contains any surrogate pairs chars.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isTaxID' {
  /**
   * Validator function
   * Return true if the passed string is a valid tax identification number
   * for the specified locale.
   * Throw an error exception if the locale is not supported.
   * @param str
   * @param [locale=en-US]
   */
  declare module.exports: (str: string, locale?: string) => boolean;
}

declare module 'validator/lib/isUppercase' {
  /**
   * Check if the string is uppercase.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isURL' {
  declare type IsURLOptions = {|
    /**
     * @default ['http','https','ftp']
     */
    protocols?: Array<string>,
    /**
     * @default true
     */
    require_tld?: boolean,
    /**
     * @default false
     */
    require_protocol?: boolean,
    /**
     * @default true
     */
    require_host?: boolean,
    /**
     * if set as true isURL will check if port is present in the URL
     * @default false
     */
    require_port?: boolean,
    /**
     * @default true
     */
    require_valid_protocol?: boolean,
    /**
     * @default false
     */
    allow_underscores?: boolean,
    /**
     * @default false
     */
    host_whitelist?: Array<string | RegExp>,
    /**
     * @default false
     */
    host_blacklist?: Array<string | RegExp>,
    /**
     * @default false
     */
    allow_trailing_dot?: boolean,
    /**
     * @default false
     */
    allow_protocol_relative_urls?: boolean,
    /**
     * @default false
     */
    disallow_auth?: boolean,
    /**
     * @default true
     */
    allow_fragments?: boolean,
    /**
     * @default true
     */
    allow_query_components?: boolean,
  |};

  /**
   * Check if the string is an URL.
   *
   * @param [options] - Options
   */
  declare module.exports: (str: string, options?: IsURLOptions) => boolean;
}

declare module 'validator/lib/isUUID' {
  declare type UUIDVersion = 3 | 4 | 5 | '3' | '4' | '5' | 'all';

  /**
   * Check if the string is a UUID (version 3, 4 or 5).
   *
   * @param [version="all"] - UUID version
   */
  declare module.exports: (str: string, version?: UUIDVersion) => boolean;
}

declare module 'validator/lib/isVariableWidth' {
  /**
   * Check if the string contains a mixture of full and half-width chars.
   */
  declare module.exports: (str: string) => boolean;
}

declare module 'validator/lib/isVAT' {
  /**
   * Checks that the string is a [valid VAT number
   */
  declare module.exports: any;
}

declare module 'validator/lib/isWhitelisted' {
  declare module.exports: (str: string, countryCode: string) => boolean;
}

declare module 'validator/lib/ltrim' {
  /**
   * Trim characters from the left-side of the input.
   *
   * @param [chars] - characters (defaults to whitespace)
   */
  declare module.exports: (input: string, chars?: string) => string;
}

declare module 'validator/lib/matches' {
  /**
   * Check if string matches the pattern.
   *
   * @param pattern - `/foo/i`
   */
  declare type MatchesRegex = (str: string, pattern: RegExp) => boolean;

  /**
   * Check if string matches the pattern.
   *
   * @param pattern - `'foo'`
   * @param [modifiers] - `'i'`
   */
  declare type MatchesPattern = (str: string, pattern: string, modifiers?: string) => boolean;

  declare module.exports: MatchesRegex | MatchesPattern;
}

declare module 'validator/lib/normalizeEmail' {
  declare type NormalizeEmailOptions = {|
    /**
     * Transforms the local part (before the @ symbol) of all email addresses to lowercase.
     * Please note that this may violate RFC 5321, which gives providers the possibility
     * to treat the local part of email addresses in a case sensitive way
     * (although in practice most - yet not all - providers don't).
     * The domain part of the email address is always lowercased, as it's case insensitive per RFC 1035.
     *
     * @default true
     */
    all_lowercase?: boolean,
    /**
     * GMail addresses are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
     * Please note that when `all_lowercase` is `true`, GMail addresses are lowercased regardless of the value of this setting.
     *
     * @default true
     */
    gmail_lowercase?: boolean,
    /**
     * Removes dots from the local part of the email address, as GMail ignores them
     * (e.g. `"john.doe"` and `"johndoe"` are considered equal).
     *
     * @default true
     */
    gmail_remove_dots?: boolean,
    /**
     * Normalizes addresses by removing "sub-addresses", which is the part following a `"+"` sign
     * (e.g. `"foo+bar@gmail.com"` becomes `"foo@gmail.com"`).
     *
     * @default true
     */
    gmail_remove_subaddress?: boolean,
    /**
     * Converts addresses with domain `@googlemail.com` to `@gmail.com`, as they're equivalent.
     *
     * @default true
     */
    gmail_convert_googlemaildotcom?: boolean,
    /**
     * Outlook.com addresses (including Windows Live and Hotmail) are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
     * Please note that when `all_lowercase` is `true`, Outlook.com addresses are lowercased regardless of the value of this setting.
     *
     * @default true
     */
    outlookdotcom_lowercase?: boolean,
    /**
     * Normalizes addresses by removing "sub-addresses", which is the part following a `"+"` sign
     * (e.g. `"foo+bar@outlook.com"` becomes `"foo@outlook.com"`).
     *
     * @default true
     */
    outlookdotcom_remove_subaddress?: boolean,
    /**
     * Yahoo Mail addresses are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
     * Please note that when `all_lowercase` is `true`, Yahoo Mail addresses are lowercased regardless of the value of this setting.
     *
     * @default true
     */
    yahoo_lowercase?: boolean,
    /**
     * Normalizes addresses by removing "sub-addresses", which is the part following a `"-"` sign
     * (e.g. `"foo-bar@yahoo.com"` becomes `"foo@yahoo.com"`).
     *
     * @default true
     */
    yahoo_remove_subaddress?: boolean,
    /**
     * iCloud addresses (including MobileMe) are known to be case-insensitive, so this switch allows lowercasing them even when `all_lowercase` is set to `false`.
     * Please note that when `all_lowercase` is `true`, iCloud addresses are lowercased regardless of the value of this setting.
     *
     * @default true
     */
    icloud_lowercase?: boolean,
    /**
     * Normalizes addresses by removing "sub-addresses", which is the part following a `"+"` sign
     * (e.g. `"foo+bar@icloud.com"` becomes `"foo@icloud.com"`).
     *
     * @default true
     */
    icloud_remove_subaddress?: boolean,
  |};

  /**
   * Canonicalizes an email address. (This doesn't validate that the input is an email, if you want to validate the email use `isEmail` beforehand)
   *
   * @param [options] - Options
   */
  declare module.exports: (email: string, options?: NormalizeEmailOptions) => string | false;
}

declare module 'validator/lib/rtrim' {
  /**
   * Trim characters from the right-side of the input.
   *
   * @param [chars] - characters (defaults to whitespace)
   */
  declare module.exports: (input: string, chars?: string) => string;
}

declare module 'validator/lib/stripLow' {
  /**
   * Remove characters with a numerical value < `32` and `127`, mostly control characters.
   * Unicode-safe in JavaScript.
   *
   * @param [keep_new_lines=false] - if `true`, newline characters are preserved (`\n` and `\r`, hex `0xA` and `0xD`).
   */
  declare module.exports: (input: string, keep_new_lines?: boolean) => string;
}

declare module 'validator/lib/toBoolean' {
  /**
   * Convert the input string to a boolean.
   * Everything except for `'0'`, `'false'` and `''` returns `true`.
   *
   * @param [strict=false] - in `strict` mode, only `'1'` and `'true'` return `true`.
   */
  declare module.exports: (input: string, strict?: boolean) => boolean;
}

declare module 'validator/lib/toDate' {
  /**
   * Convert the input string to a `Date`, or `null` if the input is not a date.
   */
  declare module.exports: (input: string) => Date | null;
}

declare module 'validator/lib/toFloat' {
  /**
   * Convert the input string to a float, or `NaN` if the input is not a float.
   */
  declare module.exports: (input: string) => number;
}

declare module 'validator/lib/toInt' {
  /**
   * Convert the input string to an integer, or `NaN` if the input is not an integer.
   *
   * @param [radix=10] - radix or base (defaults to 10)
   */
  declare module.exports: (input: string, radix?: number) => number;
}

declare module 'validator/lib/trim' {
  /**
   * Trim characters from both sides of the input.
   *
   * @param [chars] - characters (defaults to whitespace)
   */
  declare module.exports: (input: string, chars?: string) => string;
}

declare module 'validator/lib/unescape' {
  /**
   * Replaces HTML encoded entities with `<`, `>`, `&`, `'`, `"` and `/`.
   */
  declare module.exports: (input: string) => string;
}

declare module 'validator/lib/whitelist' {
  /**
   * Remove characters that do not appear in the whitelist.
   *
   * @param chars - The characters are used in a `RegExp` and so you will need to escape some chars, e.g. `whitelist(input, '\\[\\]')`.
   */
  declare module.exports: (input: string, chars: string) => string;
}
