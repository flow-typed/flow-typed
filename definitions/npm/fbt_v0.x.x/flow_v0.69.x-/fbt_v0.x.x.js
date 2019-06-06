declare module 'fbt' {
  declare opaque type GC$NOT_A_PERSON: number;
  declare opaque type GC$FEMALE_SINGULAR: number;
  declare opaque type GC$MALE_SINGULAR: number;
  declare opaque type GC$FEMALE_SINGULAR_GUESS: number;
  declare opaque type GC$MALE_SINGULAR_GUESS: number;
  declare opaque type GC$MIXED_SINGULAR: number;
  declare opaque type GC$MIXED_PLURAL: number;
  declare opaque type GC$NEUTER_SINGULAR: number;
  declare opaque type GC$UNKNOWN_SINGULAR: number;
  declare opaque type GC$FEMALE_PLURAL: number;
  declare opaque type GC$MALE_PLURAL: number;
  declare opaque type GC$NEUTER_PLURAL: number;
  declare opaque type GC$UNKNOWN_PLURAL: number;

  declare export var GenderConst: {|
    NOT_A_PERSON: GC$NOT_A_PERSON,
    FEMALE_SINGULAR: GC$FEMALE_SINGULAR,
    MALE_SINGULAR: GC$MALE_SINGULAR,
    FEMALE_SINGULAR_GUESS: GC$FEMALE_SINGULAR_GUESS,
    MALE_SINGULAR_GUESS: GC$MALE_SINGULAR_GUESS,
    MIXED_SINGULAR: GC$MIXED_SINGULAR,
    MIXED_PLURAL: GC$MIXED_PLURAL,
    NEUTER_SINGULAR: GC$NEUTER_SINGULAR,
    UNKNOWN_SINGULAR: GC$UNKNOWN_SINGULAR,
    FEMALE_PLURAL: GC$FEMALE_PLURAL,
    MALE_PLURAL: GC$MALE_PLURAL,
    NEUTER_PLURAL: GC$NEUTER_PLURAL,
    UNKNOWN_PLURAL: GC$UNKNOWN_PLURAL,
  |};

  declare opaque type IV$BITMASK_NUMBER: number;
  declare opaque type IV$BITMASK_GENDER: number;
  declare opaque type IV$NUMBER_ZERO: number;
  declare opaque type IV$NUMBER_ONE: number;
  declare opaque type IV$NUMBER_TWO: number;
  declare opaque type IV$NUMBER_FEW: number;
  declare opaque type IV$NUMBER_MANY: number;
  declare opaque type IV$NUMBER_OTHER: number;
  declare opaque type IV$GENDER_MALE: number;
  declare opaque type IV$GENDER_FEMALE: number;
  declare opaque type IV$GENDER_UNKNOWN: number;

  declare type IntlGenderVariations = {|
    GENDER_MALE: IV$GENDER_MALE,
    GENDER_FEMALE: IV$GENDER_FEMALE,
    GENDER_UNKNOWN: IV$GENDER_UNKNOWN,
  |};

  declare export var IntlVariations: {|
    ...IntlGenderVariations,
    BITMASK_NUMBER: IV$BITMASK_NUMBER,
    BITMASK_GENDER: IV$BITMASK_GENDER,
    NUMBER_ZERO: IV$NUMBER_ZERO,
    NUMBER_ONE: IV$NUMBER_ONE,
    NUMBER_TWO: IV$NUMBER_TWO,
    NUMBER_FEW: IV$NUMBER_FEW,
    NUMBER_MANY: IV$NUMBER_MANY,
    NUMBER_OTHER: IV$NUMBER_OTHER,
  |};

  declare export type IntlVariationsValues = $Values<typeof IntlVariations>;

  declare export var IntlViewerContext: {|
    GENDER: IntlVariationsValues,
    locale: string,
  |};

  declare export type Translations = {
    [locale: string]: {
      [key: string]: string,
    },
  };

  declare export var init: ({|
    translations: Translations,
  |}) => void;

  declare export type Options = {|
    author?: string,
    project?: string,
    preserveWhitespace?: boolean,
    subject?: IntlVariationsValues,
    common?: boolean,
    doNotExtract?: boolean,
  |};

  declare export var FbtTranslations: {
    getTranslatedPayload<T>(
      hashKey: string,
      enumHashKey?: string,
      args?: T
    ): ?{|
      table: string,
      args: T,
    |},
    isComponentScript(): boolean,
    registerTranslations(Translations): void,
  };

  declare export type PluralOptions = {|
    many?: string,
    showCount?: 'yes' | 'no' | 'ifMany',
    name?: string,
    value?: mixed,
  |};

  declare export type ParamOptions = {|
    gender?: $Values<IntlGenderVariations>,
    number?: number | true,
  |};

  declare export type EnumValue = string | number;

  // https://github.com/facebookincubator/fbt/blob/c2d363a40b622d5aaf80ff1d249b38604fd869f6/transform/babel-plugin-fbt/FbtConstants.js#L22-L27  ===> https://github.com/facebookincubator/fbt/blob/ffadd5fadd68179a2f0c3cde36ed080a49804203/runtime/shared/fbt.js#L64-L70

  declare export type PronounType =
    | 'object'
    | 'possessive'
    | 'reflexive'
    | 'subject';

  declare export type PronounOptions = {|
    human?: boolean,
    capitalize?: boolean,
  |};

  declare export type FbtResult = string;

  declare export interface Fbt {
    (source: string, desc: string, options?: Options): FbtResult;

    param(paramName: string, value: mixed, options?: ParamOptions): FbtResult;
    sameParam(paramName: string): FbtResult;
    name(name: string, gender: $Values<IntlGenderVariations>): FbtResult;
    plural(
      singularPhrase: string,
      count: number,
      options?: PluralOptions
    ): FbtResult;
    enum<Range: { [enumKey: string]: EnumValue }, RangeKeys: $Keys<Range>>(
      enumKey: RangeKeys,
      enumRange: Range
    ): FbtResult;
    enum(index: number, enumRange: Array<EnumValue>): FbtResult;
    pronoun(
      type: PronounType,
      gender: $Values<typeof GenderConst>,
      options: PronounOptions
    ): FbtResult;
  }

  declare export var fbt: Fbt;

  declare export default Fbt;
}
