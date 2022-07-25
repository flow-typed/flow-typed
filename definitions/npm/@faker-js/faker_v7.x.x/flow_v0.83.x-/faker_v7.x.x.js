declare module '@faker-js/faker' {
  declare type StringColorFormat = 'css' | 'binary';
  declare type NumberColorFormat = 'decimal';
  declare type ColorFormat = StringColorFormat | NumberColorFormat;

  declare type Casing = 'lower' | 'upper' | 'mixed';
  declare type LowerAlphaChar = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';
  declare type UpperAlphaChar = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
  declare type NumericChar = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  declare type AlphaChar = LowerAlphaChar | UpperAlphaChar;
  declare type AlphaNumericChar = AlphaChar | NumericChar;

  declare type EmojiType = 'smiley' | 'body' | 'person' | 'nature' | 'food' | 'travel' | 'activity' | 'object' | 'symbol' | 'flag';

  declare type HTTPStatusCodeType = 'informational' | 'success' | 'clientError' | 'serverError' | 'redirection';

  declare type GenderType = 'female' | 'male';

  /**
   * bigint is currently unsupported, replace this with real one when it's implemented
   * ref: https://github.com/facebook/flow/issues/6639
   */
  declare type BigInt = number;

  declare type Faker = {|
    locale: string,
    /**
     * Set Faker's locale
     *
     * @param locale The locale to set (e.g. `en` or `en_AU`, `en_AU_ocker`).
     */
    setLocale: (string) => void,
    seed:
      | ((seed?: number) => number)
      | ((seedArray: Array<number>) => Array<number>),
    /**
     * TODO improve inference with generics
     */
    unique: (method: any, args?: any, options: {|
      compare: (obj: { [key: string]: any, ... }, key: string) => -1 | 0,
      currentIterations: number,
      exclude: string | Array<string>,
      maxRetries: number,
      maxTime: number,
      startTime: number,
      store: { [key: string]: any, ... },
    |}) => any,
    address: {|
      buildingNumber: () => string,
      cardinalDirection: (useAbbr?: boolean) => string,
      city: (format?: string | number) => string,
      cityName: () => string,
      cityPrefix: () => string,
      citySuffix: () => string,
      country: () => string,
      countryCode: (alphaCode?: 'alpha-2' | 'alpha-3') => string,
      county: () => string,
      direction: (useAbbr?: boolean) => string,
      latitude: (max?: number, min?: number, precision?: number) => string,
      longitude: (max?: number, min?: number, precision?: number) => string,
      nearbyGPSCoordinate: (coordinate?: [number, number], radius?: number, isMetric?: boolean) => [string, string],
      ordinalDirection: (useAbbr?: boolean) => string,
      secondaryAddress: () => string,
      state: () => string,
      stateAbbr: () => string,
      street: () => string,
      streetAddress: (useFullAddress?: boolean) => string,
      streetName: () => string,
      streetPrefix: () => string,
      streetSuffix: () => string,
      timeZone: () => string,
      zipCode: (format?: string) => string,
      zipCodeByState: (state?: string) => string,
    |},
    animal: {|
      bear: () => string,
      bird: () => string,
      cat: () => string,
      cetacean: () => string,
      cow: () => string,
      crocodilia: () => string,
      dog: () => string,
      fish: () => string,
      horse: () => string,
      insect: () => string,
      lion: () => string,
      rabbit: () => string,
      snake: () => string,
      type: () => string,
    |},
    color: {|
      cmyk: (options?: {|
        format?: ColorFormat
      |}) => string | Array<number>,
      colorByCSSColorSpace: (options?: {|
        format?: ColorFormat,
        space?: 'a98-rgb' | 'display-p3' | 'prophoto-rgb' | 'rec2020' | 'sRGB'
      |}) => string | Array<number>,
      cssSupportedFunction: () => string,
      cssSupportedSpace: () => string,
      hsl: (options?: {|
        format?: ColorFormat,
        includeAlpha?: boolean
      |}) => string | Array<number>,
      human: () => string,
      hwb: (options?: {|
        format?: ColorFormat
      |}) => string | Array<number>,
      lab: (options?: {|
        format?: ColorFormat
      |}) => string | Array<number>,
      lch: (options?: {|
        format?: ColorFormat
      |}) => string | Array<number>,
      rgb: (options?: {|
        casing?: Casing,
        format?: 'hex' | ColorFormat,
        includeAlpha?: boolean,
        prefix?: string
      |}) => string | Array<number>,
      space: () => string,
    |},
    commerce: {|
      /**
       * @deprecated
       */
      color: () => string,
      department: () => string,
      price: (
        min?: ?number,
        max?: ?number,
        dec?: ?number,
        symbol?: ?string
      ) => string,
      product: () => string,
      productAdjective: () => string,
      productDescription: () => string,
      productMaterial: () => string,
      productName: () => string,
    |},
    company: {|
      bs: () => string,
      bsAdjective: () => string,
      bsBuzz: () => string,
      bsNoun: () => string,
      catchPhrase: () => string,
      catchPhraseAdjective: () => string,
      catchPhraseDescriptor: () => string,
      catchPhraseNoun: () => string,
      companyName: (format?: number) => string,
      companySuffix: () => string,
      suffixes: () => Array<string>,
    |},
    database: {|
      collation: () => string,
      column: () => string,
      engine: () => string,
      mongodbObjectId: () => string,
      type: () => string,
    |},
    datatype: {|
      array: (length?: number) => Array<string | number>,
      bigInt: (options?: BigInt | boolean | number | string | {|
        max?: BigInt | boolean | number | string,
        min?: BigInt | boolean | number | string
      |}) => BigInt,
      boolean: () => boolean,
      datetime: (options?: number | {|
        max?: number,
        min?: number
      |}) => Date,
      float: (options?: number | {|
        max?: number,
        min?: number,
        precision?: number
      |}) => number,
      hexadecimal: (length?: number) => string,
      json: () => string,
      number: (options?: number | {|
        max?: number,
        min?: number,
        precision?: number
      |}) => number,
      string: (length?: number) => string,
      uuid: () => string,
    |},
    date: {|
      between: (from?: Date | number | string, to?: Date | number | string) => Date,
      betweens: (from?: Date | number | string, to?: Date | number | string, num?: number) => Array<Date>,
      birthdate: (options?: {|
        max?: number,
        min?: number,
        mode?: 'age' | 'year',
        refDate?: Date | number | string,
      |}) => Date,
      future: (years?: number, refDate?: Date | number | string) => Date,
      month: (options?: {|
        abbr?: boolean,
        context?: boolean,
      |}) => string,
      past: (years?: number, refDate?: Date | number | string) => Date,
      recent: (days?: number, refDate?: Date | number | string) => Date,
      soon: (days?: number, refDate?: Date | number | string) => Date,
      weekday: (options?: {|
        abbr?: boolean,
        context?: boolean
      |}) => string,
    |},
    fake: (str: string) => string,
    finance: {|
      account: (length?: number) => string,
      accountName: () => string,
      amount: (min?: number, max?: number, dec?: number, symbol?: string, autoFormat?: boolean) => string,
      bic: () => string,
      bitcoinAddress: () => string,
      creditCardCVV: () => string,
      creditCardIssuer: () => string,
      creditCardNumber: (issuer?: string) => string,
      currencyCode: () => string,
      currencyName: () => string,
      currencySymbol: () => string,
      ethereumAddress: () => string,
      iban: (formatted?: boolean, countryCode?: string) => string,
      litecoinAddress: () => string,
      mask: (length?: number, parens?: boolean, ellipsis?: boolean) => string,
      pin: (length?: number) => string,
      routingNumber: () => string,
      transactionDescription: () => string,
      transactionType: () => string,
    |},
    git: {|
      branch: () => string,
      commitEntry: (options?: {|
        eol?: 'CRLF' | 'LF',
        merge?: boolean,
      |}) => string,
      commitMessage: () => string,
      commitSha: () => string,
      shortSha: () => string,
    |},
    hacker: {|
      abbreviation: () => string,
      adjective: () => string,
      ingverb: () => string,
      noun: () => string,
      phrase:  () => string,
      verb: () => string,
    |},
    helpers: {|
      arrayElement: <T>(array?: $ReadOnlyArray<T>) => T,
      arrayElements: <T>(array?: $ReadOnlyArray<T>, count?: number) => Array<T>,
      maybe: <T>(callback: () => T, options?: {|
        probability?: number
      |}) => T,
      mustache: (
        str?: string,
        data?: {
          [key: string]: ((substring: string, args: Array<any>) => string) | string,
          ...
        },
      ) => string,
      objectKey: <T = string>(object: { [key: T]: any, ... }) => (T | void),
      objectValue: <T>(object: { [key: string]: T, ... }) => (T | void),
      regexpStyleStringParse: (string?: string) => string,
      repeatString: (string?: string, num?: number) => string,
      replaceCreditCardSymbols: (string?: string, symbol?: string) => string,
      replaceSymbolWithNumber: (string?: string, symbol?: string) => string,
      replaceSymbols: (string?: string) => string,
      shuffle: <T>(o?: Array<T>) => Array<T>,
      slugify: (string?: string) => string,
      uniqueArray: <T>(source?: (() => T) | $ReadOnlyArray<T>, length?: number) => Array<T>,
    |},
    image: {|
      abstract: (width?: number, height?: number, randomize?: boolean) => string,
      animals: (width?: number, height?: number, randomize?: boolean) => string,
      avatar: () => string,
      business: (width?: number, height?: number, randomize?: boolean) => string,
      cats: (width?: number, height?: number, randomize?: boolean) => string,
      city: (width?: number, height?: number, randomize?: boolean) => string,
      dataUri: (width?: number, height?: number, color?: string) => string,
      fashion: (width?: number, height?: number, randomize?: boolean) => string,
      food: (width?: number, height?: number, randomize?: boolean) => string,
      image: (width?: number, height?: number, randomize?: boolean) => string,
      imageUrl: (width?: number, height?: number, category?: string, randomize?: boolean) => string,
      nature: (width?: number, height?: number, randomize?: boolean) => string,
      nightlife: (width?: number, height?: number, randomize?: boolean) => string,
      people: (width?: number, height?: number, randomize?: boolean) => string,
      sports: (width?: number, height?: number, randomize?: boolean) => string,
      technics: (width?: number, height?: number, randomize?: boolean) => string,
      transport: (width?: number, height?: number, randomize?: boolean) => string,
    |},
    internet: {|
      avatar: () => string,
      color: (redBase?: number, greenBase?: number, blueBase?: number) => string,
      domainName: () => string,
      domainSuffix: () => string,
      domainWord: () => string,
      email: (firstName?: string, lastName?: string, provider?: string, options?: {|
        allowSpecialCharacters?: boolean,
      |}) => string,
      emoji: (options?: {|
        types?: $ReadOnlyArray<EmojiType>,
      |}) => string,
      exampleEmail: (firstName?: string, lastName?: string, options?: {|
        allowSpecialCharacters?: boolean
      |}) => string,
      httpMethod: () => 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
      httpStatusCode:(options?: {|
        types?: $ReadOnlyArray<HTTPStatusCodeType>,
      |}) => number,
      ip: () => string,
      ipv4: () => string,
      ipv6: () => string,
      mac: (sep?: string) => string,
      password: (len?: number, memorable?: boolean, pattern?: RegExp, prefix?: string) => string,
      port: () => number,
      protocol: () => 'http' | 'https',
      url: () => string,
      userAgent: () => string,
      userName: (firstName?: string, lastName?: string) => string,
    |},
    lorem: {|
      lines: (lineCount?: number) => string,
      paragraph: (sentenceCount?: number) => string,
      paragraphs: (paragraphCount?: ?number, separator?: string) => string,
      sentence: (wordCount?: number) => string,
      sentences: (sentenceCount?: number, separator?: string) => string,
      slug: (wordCount?: number) => string,
      text: () => string,
      word: (length?: number) => string,
      words: (num?: number) => string,
    |},
    mersenne: {|
      rand: (max?: number, min?: number) => number,
      seed: (S: number) => void,
      seed_array: (A: Array<number>) => void,
    |},
    music: {|
      genre: () => string,
      songName: () => string,
    |},
    name: {|
      findName: (firstName?: string, lastName?: string, gender?: GenderType) => string,
      firstName: (gender?: GenderType) => string,
      gender: (binary?: boolean) => string,
      jobArea: () => string,
      jobDescriptor: () => string,
      jobTitle: () => string,
      jobType: () => string,
      lastName: (gender?: GenderType) => string,
      middleName: (gender?: GenderType) => string,
      prefix: (gender?: GenderType) => string,
      suffix: () => string,
    |},
    phone: {|
      imei: () => string,
      number: (format?: string) => string,
      phoneFormats: () => string,
      phoneNumber: (format?: string) => string,
      phoneNumberFormat: (phoneFormatsArrayIndex?: number) => string,
    |},
    random: {|
      alpha: (options?: number | {|
        bannedChars?: $ReadOnlyArray<AlphaChar> | AlphaChar,
        casing?: Casing,
        count?: number,
        upcase?: boolean,
      |}) => string,
      alphaNumeric: (count?: number, options?: {|
        bannedChars?: $ReadOnlyArray<AlphaNumericChar> | AlphaNumericChar,
        casing?: Casing
      |}) => string,
      locale: () => string,
      numeric: (length?: number, options?: {|
        allowLeadingZeros?: boolean,
        bannedDigits?: $ReadOnlyArray<NumericChar> | NumericChar,
      |}) => string,
      word: () => string,
      words: (count?: number) => string,
    |},
    science: {|
      chemicalElement: () => {|
        /**
         * The symbol for the element (e.g. `'He'`).
         */
        symbol: string,
        /**
         * The name for the element (e.g. `'Cerium'`).
         */
        name: string,
        /**
         * The atomic number for the element (e.g. `52`).
         */
        atomicNumber: number,
      |},
      unit: () => {|
        /**
         * The long version of the unit (e.g. `meter`).
         */
        name: string,
        /**
         * The short version/abbreviation of the element (e.g. `Pa`).
         */
        symbol: string,
      |},
    |},
    system: {|
      commonFileExt: () => string,
      commonFileName: (ext?: string) => string,
      commonFileType: () => string,
      directoryPath: () => string,
      fileExt: (mimeType?: string) => string,
      fileName: () => string,
      filePath: () => string,
      fileType: () => string,
      mimeType: () => string,
      semver: () => string,
    |},
    vehicle: {|
      bicycle: () => string,
      color: () => string,
      fuel: () => string,
      manufacturer: () => string,
      model: () => string,
      type: () => string,
      vehicle: () => string,
      vin: () => string,
      vrm: () => string,
    |},
    word: {|
      adjective: (length?: number) => string,
      adverb: (length?: number) => string,
      conjunction: (length?: number) => string,
      interjection: (length?: number) => string,
      noun: (length?: number) => string,
      preposition: (length?: number) => string,
      verb: (length?: number) => string,
    |},
  |};

  declare module.exports: {|
    faker: Faker,
  |};
}

declare module '@faker-js/faker/locale/af_ZA' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/ar' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/az' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/cz' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/de' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/de_AT' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/de_CH' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/el' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en_AU' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en_AU_ocker' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en_BORK' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en_CA' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en_GB' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en_GH' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en_IE' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en_IND' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en_NG' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en_US' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/en_ZA' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/es' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/es_MX' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/fa' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/fi' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/fr' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/fr_BE' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/fr_CA' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/fr_CH' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/ge' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/he' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/hr' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/hu' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/hy' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/id_ID' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/it' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/ja' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/ko' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/lv' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/mk' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/nb_NO' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/ne' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/nl' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/nl_BE' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/pl' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/pt_BR' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/pt_PT' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/ro' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/ru' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/sk' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/sv' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/tr' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/uk' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/ur' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/vi' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/zh_CN' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/zh_TW' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}

declare module '@faker-js/faker/locale/zu_ZA' {
  declare module.exports: $Exports<'@faker-js/faker'>;
}
