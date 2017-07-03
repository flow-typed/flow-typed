declare module 'tinycolor2' {
  declare type Format =
    | 'hex3'
    | 'hex6'
    | 'hex8'
    | 'hsl'
    | 'hsv'
    | 'name'
    | 'prgb'
    | 'rgb';

  declare type HsvColor = { h: number, s: number, v: number };
  declare type HsvaColor = HsvColor & { a: number };
  declare type HslColor = { h: number, s: number, l: number };
  declare type HslaColor = HslColor & { a: number };
  declare type RgbColor = { r: number, g: number, b: number };
  declare type RgbaColor = RgbColor & { a: number };
  declare type PercentageRgbaColor = {
    r: string,
    g: string,
    b: string,
    a: number,
  };
  declare type HexColor = string;
  declare type RatioColor =
    | HsvColor
    | HsvaColor
    | HslColor
    | HslaColor
    | RgbColor
    | RgbaColor;
  declare type Color = RatioColor | HexColor;
  declare type Options = {
    format: Format,
  };
  declare type ReadableOptions = {
    level: 'AA' | 'AAA',
    size: 'small' | 'large',
  };
  declare type MostReadableOptions = ReadableOptions & {
    includeFallbackColors: boolean,
  };

  declare type TinyColor = {
    <C>(color: C, opts?: Options): TinyColorInstance<C>,
  };

  declare type TinyColorInstance<C> = {
    fromRatio<RC>(ratio: RC): TinyColorInstance<RC>,
    getFormat(): Format,
    getOriginalInput(): C,
    isValid(): boolean,
    getBrightness(): number,
    isLight(): boolean,
    isDark(): boolean,
    getLuminance(): number,
    getAlpha(): number,
    setAlpha(number): TinyColorInstance<C>,
    toHsv(): HsvaColor,
    toHsvString(): string,
    toHsl(): HslaColor,
    toHslString(): string,
    toHex(): string,
    toHexString(): string,
    toHex8(): string,
    toHex8String(): string,
    toRgb(): RgbaColor,
    toRgbString(): string,
    toPercentageRgb(): PercentageRgbaColor,
    toPercentageRgbString(): string,
    toName(): string,
    toFilter(): string,
    toString(format?: Format): string,
    lighten(amount?: number): TinyColorInstance<C>,
    brighten(amount?: number): TinyColorInstance<C>,
    darken(amount?: number): TinyColorInstance<C>,
    desaturate(amount?: number): TinyColorInstance<C>,
    saturate(amount?: number): TinyColorInstance<C>,
    greyscale(): TinyColorInstance<C>,
    spin(amount?: number): TinyColorInstance<C>,
    analogous(): Array<TinyColorInstance<C>>,
    monochromatic(): Array<TinyColorInstance<C>>,
    splitcomplement(): Array<TinyColorInstance<C>>,
    triad(): Array<TinyColorInstance<C>>,
    tetrad(): Array<TinyColorInstance<C>>,
    complement(): TinyColorInstance<C>,
    equals(color1: Color, color2: Color): boolean,
    mix(color1: Color, color2: Color, amount?: number): TinyColorInstance<C>,
    random(): TinyColorInstance<C>,
    readability(color1: Color, color2: Color): number,
    isReadable(color1: Color, color2: Color, opts?: ReadableOptions): boolean,
    mostReadable(
      color: Color,
      list: Array<Color>,
      opts?: MostReadableOptions
    ): TinyColorInstance<C>,
    clone(): TinyColorInstance<C>,
  };

  declare module.exports: TinyColor;
}
