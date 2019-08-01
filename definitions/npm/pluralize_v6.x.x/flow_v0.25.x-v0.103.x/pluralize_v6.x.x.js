declare module "pluralize" {
  declare module.exports: {
    (word: string, count?: number, inclusive?: boolean): string,

    addIrregularRule(single: string, plural: string): void,
    addPluralRule(rule: string | RegExp, replacement: string): void,
    addSingularRule(rule: string | RegExp, replacement: string): void,
    addUncountableRule(ord: string | RegExp): void,
    plural(word: string): string,
    singular(word: string): string,
    isPlural(word: string): boolean,
    isSingular(word: string): boolean
  };
}
