// Type definitions for counterpart 0.18 adapted from TypeScript
// Project: https://github.com/martinandert/counterpart
// TS Definitions by: santiagodoldan <https://github.com/santiagodoldan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'counterpart' {
  declare type NotFoundHandler = (
    locale: string,
    key: string,
    fallback: string,
    scope: string
  ) => void;
  declare type MissingEntryGenerator = (value: string) => string;
  declare type LocaleChangeHandler = (
    newLocale: string,
    oldLocale: string
  ) => void;
  declare type KeyTransformer = (
    key: string | string[],
    options?: { ... }
  ) => string | string[];
  declare type ErrorHandler = (
    err: Error,
    entry: string,
    values: { ... }
  ) => void;

  declare function translate(key: string | string[], options?: { ... }): string;

  declare class Counterpart {
    constructor(): this;

    translate: typeof translate;
    getSeparator(): string;
    setSeparator(value: string): string;
    onTranslationNotFound(callback: NotFoundHandler): void;
    offTranslationNotFound(callback: NotFoundHandler): void;
    getMissingEntryGenerator(): MissingEntryGenerator;
    setMissingEntryGenerator(
      callback: MissingEntryGenerator
    ): MissingEntryGenerator;
    getLocale(): string;
    setLocale(value: string): string;
    onLocaleChange(callback: LocaleChangeHandler): void;
    offLocaleChange(callback: LocaleChangeHandler): void;
    getFallbackLocale(): string[];
    setFallbackLocale(value: string | string[]): void;
    getAvailableLocales(): string[];
    setAvailableLocales(value: string[]): string[];
    registerTranslations(locale: string, data: { ... }): void;
    registerInterpolations(data: { ... }): void;
    getKeyTransformer(): KeyTransformer;
    setKeyTransformer(callback: KeyTransformer): KeyTransformer;
    getInterpolate(): boolean;
    setInterpolate(value: boolean): boolean;
    onError(callback: ErrorHandler): void;
    offError(callback: ErrorHandler): void;
    localize(date: Date, options: { ... }): string;
    withLocale(locale: string, callback: () => void, context?: { ... }): void;
    withScope(
      scope: string | string[],
      callback: () => void,
      context?: { ... }
    ): void;
    withSeparator(
      separator: string,
      callback: () => void,
      context?: { ... }
    ): void;
  }

  declare module.exports: {|
    Instance: Class<Counterpart>,
    Translator: Class<Counterpart>,
  |} & Counterpart &
    typeof translate;
}
