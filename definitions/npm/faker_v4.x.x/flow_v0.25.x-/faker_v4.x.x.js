declare module "faker" {
  declare module.exports: {
    address: {
      zipCode: (localeFormat?: string) => string,
      city: (mustacheTemplate?: string) => string,
      cityPrefix: () => string,
      citySuffix: () => string,
      streetName: () => string,
      streetAddress: (useFullAddress?: boolean) => string,
      streetSuffix: () => string,
      streetPrefix: () => string,
      secondaryAddress: () => string,
      county: () => string,
      country: () => string,
      countryCode: () => string,
      state: (useAbbr?: boolean) => string,
      stateAbbr: () => string,
      latitude: () => string,
      longitude: () => string
    },
    commerce: {
      color: () => string,
      department: () => string,
      productName: () => string,
      price: (
        min?: ?number,
        max?: ?number,
        dec?: ?number,
        symbol?: ?string
      ) => string,
      productAdjective: () => string,
      productMaterial: () => string,
      product: () => string
    },
    company: {
      suffixes: () => string,
      companyName: (mustacheTemplate?: string) => string,
      companySuffix: () => string,
      catchPhrase: () => string,
      bs: () => string,
      catchPhraseAdjective: () => string,
      catchPhraseDescriptor: () => string,
      catchPhraseNoun: () => string,
      bsAdjective: () => string,
      bsBuzz: () => string,
      bsNoun: () => string
    },
    database: {
      column: () => string,
      type: () => string,
      collation: () => string,
      engine: () => string
    },
    date: {
      past: (years?: ?number, refDate?: Date) => Date,
      future: (years?: ?number, refDate?: Date) => Date,
      between: (from: Date, to: Date) => Date,
      recent: (days?: number) => Date,
      soon: () => Date,
      month: (options?: {| abbr?: boolean, context?: "wide" |}) => Date,
      weekday: (options?: {| abbr?: boolean, context?: "wide" |}) => Date
    },
    fake: (mustacheTemplate: string) => string,
    finance: {
      account: (length?: number) => string,
      accountName: () => string,
      mask: (length?: ?number, parens?: ?boolean, ellipsis?: boolean) => string,
      amount: (
        min?: ?number,
        max?: ?number,
        dec?: ?number,
        symbol?: ?string
      ) => string,
      transactionType: () => string,
      currencyCode: () => string,
      currencyName: () => string,
      currencySymbol: () => string,
      bitcoinAddress: () => string,
      ethereumAddress: () => string,
      iban: () => string,
      bic: () => string
    },
    hacker: {
      abbreviation: () => string,
      adjective: () => string,
      noun: () => string,
      verb: () => string,
      ingverb: () => string,
      phrase: () => string
    },
    helpers: {
      randomize: <Element>(Array<Element>) => Element,
      slugify: string => string,
      replaceSymbolWithNumber: (string, symbol?: string) => string,
      replaceSymbols: string => string,
      shuffle: <Arr: Array<any>>(Arr) => Arr,
      mustache: (template: string, data: Object) => string,
      createCard: () => string,
      contextualCard: () => string,
      userCard: () => string,
      createTransaction: () => string
    },
    image: {
      image: (width?: ?number, height?: ?number, randomize?: boolean) => string,
      avatar: (
        width?: ?number,
        height?: ?number,
        randomize?: boolean
      ) => string,
      imageUrl: (
        width?: ?number,
        height?: ?number,
        category?: ?string,
        randomize?: boolean
      ) => string,
      abstract: (
        width?: ?number,
        height?: ?number,
        randomize?: boolean
      ) => string,
      animals: (
        width?: ?number,
        height?: ?number,
        randomize?: boolean
      ) => string,
      business: (
        width?: ?number,
        height?: ?number,
        randomize?: boolean
      ) => string,
      cats: (width?: ?number, height?: ?number, randomize?: boolean) => string,
      city: (width?: ?number, height?: ?number, randomize?: boolean) => string,
      food: (width?: ?number, height?: ?number, randomize?: boolean) => string,
      nightlife: (
        width?: ?number,
        height?: ?number,
        randomize?: boolean
      ) => string,
      fashion: (
        width?: ?number,
        height?: ?number,
        randomize?: boolean
      ) => string,
      people: (
        width?: ?number,
        height?: ?number,
        randomize?: boolean
      ) => string,
      nature: (
        width?: ?number,
        height?: ?number,
        randomize?: boolean
      ) => string,
      sports: (
        width?: ?number,
        height?: ?number,
        randomize?: boolean
      ) => string,
      technics: (
        width?: ?number,
        height?: ?number,
        randomize?: boolean
      ) => string,
      transport: (
        width?: ?number,
        height?: ?number,
        randomize?: boolean
      ) => string,
      dataUri: (width?: ?number, height?: ?number) => string
    },
    internet: {
      avatar: () => string,
      email: (
        firstName?: ?string,
        lastName?: ?string,
        provider?: ?string
      ) => string,
      exampleEmail: (firstName?: ?string, lastName?: ?string) => string,
      userName: (firstName?: ?string, lastName?: ?string) => string,
      protocol: () => string,
      url: () => string,
      domainName: () => string,
      domainSuffix: () => string,
      domainWord: () => string,
      ip: () => string,
      ipv6: () => string,
      userAgent: () => string,
      color: (
        baseRed255?: ?number,
        baseGreen255?: ?number,
        baseBlue255?: ?number
      ) => string,
      mac: () => string,
      password: (
        len?: ?number,
        memorable?: ?boolean,
        pattern?: ?string,
        prefix?: ?string
      ) => string
    },
    lorem: {
      word: (count?: number) => string,
      words: (count?: number) => string,
      sentences: (sentenceCount?: ?number, separator?: string) => string,
      slug: (wordCount?: number) => string,
      sentence: (wordCount?: ?number, range?: number) => string,
      paragraph: (sentenceCount?: number) => string,
      paragraphs: (paragraphCount?: ?number, separator?: string) => string,
      text: (times?: number) => string,
      lines: (lineCount?: number) => string
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
      jobType: () => string
    },
    phone: {
      phoneNumber: (format?: string) => string,
      phoneNumberFormat: (formatArrayIndex?: number) => string,
      phoneFormats: () => string
    },
    random: {
      number: (
        options?: number | {| max?: number, min?: number, precision?: number |}
      ) => string,
      arrayElement: <Element>(Array<Element>) => Element,
      objectElement: <Key, Value>(
        object: { [Key]: Value },
        field: Key
      ) => Value,
      uuid: () => string,
      boolean: () => string,
      word: (type?: string) => string,
      words: (count?: number) => string,
      image: () => string,
      locale: () => string,
      alphaNumeric: (count?: number) => string,
      hexaDecimal: () => string
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
      semver: () => string
    }
  };
}
