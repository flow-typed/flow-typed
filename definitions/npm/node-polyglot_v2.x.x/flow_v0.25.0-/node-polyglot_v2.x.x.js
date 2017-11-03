declare module "node-polyglot" {
  declare type onMissingKeyType = (
    key: string,
    opts: Object,
    locale: string
  ) => string;

  declare class Polyglot {
    constructor(options?: {
      phrases?: Object,
      locale?: string,
      allowMissing?: boolean,
      onMissingKey?: onMissingKeyType
    }): Polyglot,
    extend(phrases: Object): void,
    t(id: string, props?: Object): string,
    locale(id?: string): string,
    unset(idOrPhrases: string | Object): void,
    clear(): void,
    replace(phrases: Object): void,

    static transformPhrase(
      phrase: string,
      substitutions?: Object,
      locale?: string
    ): string
  }

  declare module.exports: Class<Polyglot>;
}
