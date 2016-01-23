type Pattern = string | number | VerEx;
type Modifiers = 'g' | 'm' | 'i' | 'u' | 'y';

declare class VerEx extends RegExp {
  // INTERNAL:
  _prefixes: string;
  _source: string;
  _suffixes: string;
  _modifiers: string;

  sanitize(value: Pattern): string | number;
  add(value: string): VerEx;

  // PUBLIC API:
  startOfLine(enable?: boolean): VerEx;
  endOfLine(enable?: boolean): VerEx;
  then(value: Pattern): VerEx;
  find(value: Pattern): VerEx;
  maybe(value: Pattern): VerEx;
  anything(): VerEx;
  anythingBut(value: Pattern): VerEx;
  something(): VerEx;
  somethingBut(value: Pattern): VerEx;
  lineBreak(): VerEx;
  br(): VerEx;
  tab(): VerEx;
  word(): VerEx;
  whitespace(): VerEx;
  anyOf(value: Pattern): VerEx;
  any(value: Pattern): VerEx;
  range(...vals: Array<number>): VerEx;
  addModifier(modifier: Modifiers): VerEx;
  removeModifier(modifier: Modifiers): VerEx;
  withAnyCase(enable?: boolean): VerEx;
  stopAtFirst(enable?: boolean): VerEx;
  searchOneLine(enable?: boolean): VerEx;
  repeatPrevious(..args: Array<string | number>): VerEx;
  oneOrMore(): VerEx;
  multiple(value: Pattern): VerEx;
  or(value: Pattern): VerEx;
  begincapture(): VerEx;
  endCapture(): VerEx;

  toRegExp(): RexExp;
  replace(source: any, value: any): string;
}

declare module 'verbal-expressions' {
  declare function exports(): VerEx;
}
