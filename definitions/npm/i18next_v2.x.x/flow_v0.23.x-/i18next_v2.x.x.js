declare module 'i18next' {
  declare type InterpolationOptions = {
    escapeValue?: bool,
    prefix?: string,
    suffix?: string,
    prefixEscaped?: string,
    suffixEscaped?: string,
    unescapeSuffix?: string,
    unescapePrefix?: string,
    nestingPrefix?: string,
    nestingSuffix?: string,
    nestingPrefixEscaped?: string,
    nestingSuffixEscaped?: string,
    defaultVariables?: string,
  };
  declare type ResourceData = {
    [key: string]: string | ResourceData
  };
  declare type InitOptions = {
    debug?: bool,
    initImmediate?: bool,
    resources?: ResourceData,
    lng?: string,
    fallbackLng?: string,
    ns?: string,
    defaultNS?: string,
    fallbackNS?: string|string[],
    whitelist?: string[],
    lowerCaseLng?: string,
    load?: string,
    preload?: bool,
    keySeparator?: string,
    nsSeparator?: string,
    pluralSeparator?: string,
    contextSeparator?: string,
    saveMissing?: bool,
    saveMissingTo?: string,
    missingKeyHandler?: Function,
    parseMissingKeyHandler?: Function,
    appendNamespaceToMissingKey?: bool,
    postProcess?: bool,
    returnNull?: bool,
    returnEmptyString?: bool,
    returnObjects?: bool,
    returnedObjectHandler?: Function,
    joinArrays?: bool,
    overloadTranslationOptionHandler?: Function,
    interpolation?: InterpolationOptions,
    detection?: Object,
    backend?: Object,
    cache?: Object,
  }
  declare type TFunction = (key?: ?string, data?: ?Object) => string;
  declare type CallbackFn = (err: any, t: TFunction) => any;
  declare class i18next extends events$EventEmitter {
    t(key?: ?string, data?: ?Object): string;
    init(options: InitOptions, cb?: CallbackFn): void;
    use(module: any): this;
    exists(key?: string, options: any): bool;
    getFixedT(lng: string, ns?: string): TFunction;
    changeLanguage(lng: string, callback?: TFunction): void;
    language: string;
    languages: string[];
    loadNamespaces(ns: string|string[], callback?: CallbackFn): void;
    loadLanguages(ns: string|string[], callback?: CallbackFn): void;
    loadResources(callback: Function): void;
    setDefaultNamespace(ns: string): void;
    dir(lng: string): 'rtl'|'ltr';
    getResource(lng: string, ns: string, key: string, options?: any): void;
    addResource(lng: string, ns: string, key: string, value: any, options?: any): void;
    addResources(lng: string, ns: string, resources: Array<{
      key: string,
      value: any,
    }>): void;
    addResourceBundle(lng: string, ns: string, resources: Object, deep?: bool, overwrite?: bool): void;
    hasResourceBundle(lng: string, ns: string): bool;
    getResourceBundle(lng: string, ns: string): bool;
    removeResourceBundle(lng: string, ns: string): bool;
  }
  declare var exports: i18next;
}
