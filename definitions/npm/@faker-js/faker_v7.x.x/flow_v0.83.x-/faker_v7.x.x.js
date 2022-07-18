declare module "@faker-js/faker" {
  declare type SeedType = number | $ReadOnlyArray<number>;

  declare type StringColorFormat = 'css' | 'binary';
  declare type NumberColorFormat = 'decimal';
  declare type ColorFormat = StringColorFormat | NumberColorFormat;

  declare type Casing = 'lower' | 'upper' | 'mixed';

  declare type EmojiType = 'smiley' | 'body' | 'person' | 'nature' | 'food' | 'travel' | 'activity' | 'object' | 'symbol' | 'flag';

  declare type HTTPStatusCodeType = 'informational' | 'success' | 'clientError' | 'serverError' | 'redirection';

  /**
   * bigint is currently unsupported, replace this with real one when it's implemented
   * ref: https://github.com/facebook/flow/issues/6639
   */
  declare type BigInt = number;

  declare type Faker = {
    seedValue: ?SeedType,
    seed: (SeedType) => void,
    setLocale: (string) => void,
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
        format: ColorFormat
      |}) => string | Array<number>,
      colorByCSSColorSpace: (options?: {|
        format: ColorFormat,
        space: 'a98-rgb' | 'display-p3' | 'prophoto-rgb' | 'rec2020' | 'sRGB'
      |}) => string | Array<number>,
      cssSupportedFunction: () => string,
      cssSupportedSpace: () => string,
      hsl: (options?: {|
        format: ColorFormat,
        includeAlpha: boolean
      |}) => string | Array<number>,
      human: () => string,
      hwb: (options?: {|
        format: ColorFormat
      |}) => string | Array<number>,
      lab: (options?: {|
        format: ColorFormat
      |}) => string | Array<number>,
      lch: (options?: {|
        format: ColorFormat
      |}) => string | Array<number>,
      rgb: (options?: {|
        casing: Casing,
        format: 'hex' | ColorFormat,
        includeAlpha: boolean,
        prefix: string
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
        max: BigInt | boolean | number | string,
        min: BigInt | boolean | number | string
      |}) => BigInt,
      boolean: () => boolean,
      datetime: (options?: number | {|
        max: number,
        min: number
      |}) => Date,
      float: (options?: number | {|
        max: number,
        min: number,
        precision: number
      |}) => number,
      hexadecimal: (length?: number) => string,
      json: () => string,
      number: (options?: number | {|
        max: number,
        min: number,
        precision: number
      |}) => number,
      string: (length?: number) => string,
      uuid: () => string,
    |},
    date: {|
      between: (from?: Date | number | string, to?: Date | number | string) => Date,
      betweens: (from?: Date | number | string, to?: Date | number | string, num: number) => Array<Date>,
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
      mustache: (str?: string, data?: { [key: string]: ((substring: string, args: Array<any>) => string) | string, ... }) => string,
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
        allowSpecialCharacters: boolean
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
    lorem: {
      word: (count?: number) => string,
      words: (count?: number) => string,
      sentences: (sentenceCount?: ?number, separator?: string) => string,
      slug: (wordCount?: number) => string,
      sentence: (wordCount?: ?number, range?: number) => string,
      paragraph: (sentenceCount?: number) => string,
      paragraphs: (paragraphCount?: ?number, separator?: string) => string,
      text: (times?: number) => string,
      lines: (lineCount?: number) => string,
      ...
    },
    name: {
      firstName: (gender?: mixed) => string,
      lastName: (gender?: mixed) => string,
      findName: (
        firstName?: ?string,
        lastName?: ?string,
        gender?: mixed
      ) => string,
      jobTitle: () => string,
      prefix: () => string,
      suffix: () => string,
      title: () => string,
      jobDescriptor: () => string,
      jobArea: () => string,
      jobType: () => string,
      ...
    },
    phone: {
      phoneNumber: (format?: string) => string,
      phoneNumberFormat: (formatArrayIndex?: number) => string,
      phoneFormats: () => string,
      ...
    },
    random: {
      number: (
        options?: number | {| max?: number, min?: number, precision?: number |}
      ) => number,
      arrayElement: <Element>(Array<Element>) => Element,
      objectElement: <Key, Value>(
        object: { [Key]: Value, ... },
        field: Key
      ) => Value,
      uuid: () => string,
      boolean: () => boolean,
      word: (type?: string) => string,
      words: (count?: number) => string,
      image: () => string,
      locale: () => string,
      alphaNumeric: (count?: number) => string,
      hexaDecimal: () => string,
      ...
    },
    system: {
      fileName: (ext?: ?string, type?: string) => string,
      commonFileName: () => string,
      mimeType: () => string,
      commonFileType: (ext?: ?string, type?: string) => string,
      commonFileExt: (type?: string) => string,
      fileType: () => string,
      fileExt: (mimeType?: string) => string,
      directoryPath: () => string,
      filePath: () => string,
      semver: () => string,
      ...
    },
    ...
  };

  declare module.exports: {|
    faker: Faker,
  |};
}
