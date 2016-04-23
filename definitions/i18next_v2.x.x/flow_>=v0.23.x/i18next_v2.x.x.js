type npm$i18n$TFunction = (key?: ?string, data?: ?Object) => string;
type npm$i18n$CallbackFn = (err: any, t: TFunction) => any;

declare module 'i18next' {
  declare class i18next extends events$EventEmitter {
    t(key?: ?string, data?: ?Object): string;
    init(options: Object, cb?: npm$i18n$CallbackFn): void;
    use(module: any): Class<i18next>;
    exists(key?: string, options: any): bool;
    getFixedT(lng: string, ns?: string): npm$i18n$TFunction;
    changeLanguage(lng: string, callback?: npm$i18n$TFunction): void;
    language: string;
    languages: string[];
    loadNamespaces(ns: string|string[], callback?: npm$i18n$CallbackFn): void;
    loadLanguages(ns: string|string[], callback?: npm$i18n$CallbackFn): void;
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
