declare module 'pluralize' {
  declare var exports: {
    (word: string, count?: number, inclusive?: boolean): string;

    addIrregularRule(single: string, plural: string): void;
    addPluralRule(rule: string|RegExp, replacemant: string): void;
    addSingularRule(rule: string|RegExp, replacemant: string): void;
    addUncountableRule(ord: string|RegExp): void;
    plural(word: string): string;
    singular(word: string): string;
  }
}
