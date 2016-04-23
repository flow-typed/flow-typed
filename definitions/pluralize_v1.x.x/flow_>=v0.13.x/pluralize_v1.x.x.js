declare module 'pluralize' {
  declare class Pluralize {
    (word: string, count?: number, inclusive?: boolean): string;
    plural(word: string): string;
    singular(word: string): string;
    addPluralRule(rule: string|RegExp, replacemant: string): void;
    addSingularRule(rule: string|RegExp, replacemant: string): void;
    addIrregularRule(single: string, plural: string): void;
    addUncountableRule(ord: string|RegExp): void;
  }
  declare var exports: Pluralize;
}
