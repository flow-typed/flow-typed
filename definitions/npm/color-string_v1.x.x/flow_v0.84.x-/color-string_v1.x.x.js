// @flow

declare module 'color-string' {
  declare type Color = number[];
  declare type ToArguments = Array<number | number[]>;
  declare type GetFn = (string) => Color | null;
  declare type ToFn = (...args: ToArguments) => string;

  declare export default {|
    get: {|
      (string): {| model: 'rgb' | 'hsl' | 'hwb', value: Color |},
      rgb: GetFn,
      hsl: GetFn,
      hwb: GetFn
    |},
    to: {|
      hex: ToFn,
      hsl: ToFn,
      hwb: ToFn,
      keyword: (...args: ToArguments) => string | void,
      rgb: {|
        (...args: ToArguments): string,
        percent: ToFn
      |}
    |}
  |};
}
