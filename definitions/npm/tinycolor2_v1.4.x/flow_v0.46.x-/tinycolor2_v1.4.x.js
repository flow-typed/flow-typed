declare module 'tinycolor2' {
  declare type Format =
    | 'hex'
    | 'hex6'
    | 'hex3'
    | 'hex4'
    | 'hex8'
    | 'name'
    | 'rgb'
    | 'prgb'
    | 'hsl'
    | 'hsv';

  declare type HsvColor = { h: number, s: number, v: number, a?: number };
  declare type HslColor = { h: number, s: number, l: number, a?: number };
  declare type RgbColor = { r: number, g: number, b: number, a?: number };
  declare type RgbPercentageColor = {
    r: string,
    g: string,
    b: string,
    a?: number
  };

  declare type RatioColor = RgbColor | HslColor | HsvColor;

  declare type Color =
    | HsvColor
    | HslColor
    | RgbColor
    | RgbPercentageColor
    | string;

  declare class Tinycolor {
    (color: mixed, opts?: Object): Color,
    analogous(): Tinycolor,
    brighten(amount?: number): Tinycolor,
    clone(): Tinycolor,
    complement(): Tinycolor,
    darken(amount?: number): Tinycolor,
    desaturate(amount?: number): Tinycolor,
    fromRatio(color: RatioColor, opts: Object): Tinycolor,
    equals(Color, Color): boolean,
    getAlpha(): number,
    getBrightness(): number,
    getFormat(): Format,
    getLuminance(): number,
    getOriginalInput(): mixed,
    greyscale(): Tinycolor,
    isDark(): boolean,
    isLight(): boolean,
    isReadable(Color, Color, ops?: Object): boolean,
    isValid(): boolean,
    lighten(amount?: number): Tinycolor,
    monochromatic(): Tinycolor,
    random(): Color,
    readability(Color, Color): number,
    saturate(amount?: number): Tinycolor,
    setAlpha(): Tinycolor,
    spin(amount?: number): Tinycolor,
    splitcomplement(): Tinycolor,
    tetrad(): Tinycolor,
    toFilter(): string,
    toHex(): string,
    toHex8(): string,
    toHex8String(): string,
    toHexString(): string,
    toHsl(): HslColor,
    toHslString(): string,
    toHsv(): HsvColor,
    toHsvString(): string,
    toName(): string,
    toPercentageRgb(): RgbPercentageColor,
    toPercentageRgbString(): string,
    toRgb(): RgbColor,
    toRgbString(): string,
    toString(): string,
    triad(): Tinycolor
  }
  declare function exports(color: Color): Tinycolor;
}
