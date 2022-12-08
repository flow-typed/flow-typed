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
  declare type LocaleChangeHandler = (
    newLocale: string,
    oldLocale: string
  ) => void;

  declare class Counterpart {
    constructor(): this;
    translate: (key: string | string[], options?: { ... }) => string;

    setSeparator(value: string): string;
    onTranslationNotFound(callback: NotFoundHandler): void;
    offTranslationNotFound(callback: NotFoundHandler): void;
    setMissingEntryGenerator(callback: (value: string) => void): void;
    getLocale(): string;
    setLocale(value: string): string;
    onLocaleChange(callback: LocaleChangeHandler): void;
    offLocaleChange(callback: LocaleChangeHandler): void;
    setFallbackLocale(value: string | string[]): void;
    registerTranslations(locale: string, data: { ... }): void;
    registerInterpolations(data: { ... }): void;
    setKeyTransformer(
      callback: (value: string, options: { ... }) => string
    ): string;
    localize(date: Date, options: { ... }): string;
    Instance: Class<Counterpart>;
    Translator: Class<Counterpart>;
  }

  declare module.exports: Counterpart;
}
