declare module 'color' {
  declare type ColorParam =
    | Color
    | string
    | Array<number>
    | number
    | { [key: string]: any, ... };

  declare interface Color {
    toString(): string;
    toJSON(): Color;
    string(places?: number): string;
    percentString(places?: number): string;
    array(): Array<number>;
    object(): {|
      alpha?: number,
      [key: string]: number,
    |};
    unitArray(): Array<number>;
    unitObject(): {|
      r: number,
      g: number,
      b: number,
      alpha?: number,
    |};
    round(places?: number): Color;
    alpha(): number;
    alpha(val: number): Color;
    red(): number;
    red(val: number): Color;
    green(): number;
    green(val: number): Color;
    blue(): number;
    blue(val: number): Color;
    hue(): number;
    hue(val: number): Color;
    saturationl(): number;
    saturationl(val: number): Color;
    lightness(): number;
    lightness(val: number): Color;
    saturationv(): number;
    saturationv(val: number): Color;
    value(): number;
    value(val: number): Color;
    chroma(): number;
    chroma(val: number): Color;
    gray(): number;
    gray(val: number): Color;
    white(): number;
    white(val: number): Color;
    wblack(): number;
    wblack(val: number): Color;
    cyan(): number;
    cyan(val: number): Color;
    magenta(): number;
    magenta(val: number): Color;
    yellow(): number;
    yellow(val: number): Color;
    black(): number;
    black(val: number): Color;
    x(): number;
    x(val: number): Color;
    y(): number;
    y(val: number): Color;
    z(): number;
    z(val: number): Color;
    l(): number;
    l(val: number): Color;
    a(): number;
    a(val: number): Color;
    b(): number;
    b(val: number): Color;
    keyword(): string;
    keyword(val: string): Color;
    hex(): string;
    hex(val: string): Color;
    hexa(): string;
    hexa(val: string): Color;
    rgbNumber(): number;
    luminosity(): number;
    contrast(color2: Color): number;
    level(color2: Color): 'AAA' | 'AA' | '';
    isDark(): boolean;
    isLight(): boolean;
    negate(): Color;
    lighten(ratio: number): Color;
    darken(ratio: number): Color;
    saturate(ratio: number): Color;
    desaturate(ratio: number): Color;
    whiten(ratio: number): Color;
    blacken(ratio: number): Color;
    grayscale(): Color;
    fade(ratio: number): Color;
    opaquer(ratio: number): Color;
    rotate(degrees: number): Color;
    mix(mixinColor: Color, weight?: number): Color;

    rgb(...args: Array<number>): Color;
    hsl(...args: Array<number>): Color;
    hsv(...args: Array<number>): Color;
    hwb(...args: Array<number>): Color;
    cmyk(...args: Array<number>): Color;
    xyz(...args: Array<number>): Color;
    lab(...args: Array<number>): Color;
    lch(...args: Array<number>): Color;
    ansi16(...args: Array<number>): Color;
    ansi256(...args: Array<number>): Color;
    hcg(...args: Array<number>): Color;
    apple(...args: Array<number>): Color;
  }

  declare type ConvertColors =
    | 'rgb'
    | 'hsl'
    | 'hsv'
    | 'hwb'
    | 'cmyk'
    | 'xyz'
    | 'lab'
    | 'lch'
    | 'hex'
    | 'keyword'
    | 'ansi16'
    | 'ansi256'
    | 'hcg'
    | 'apple'
    | 'gray';

  declare interface ColorConstructor {
    (obj?: ColorParam, model?: ConvertColors): Color;
    rgb(...val: Array<number>): Color;
    rgb(color: ColorParam): Color;
    hsl(...val: Array<number>): Color;
    hsl(color: ColorParam): Color;
    hsv(...val: Array<number>): Color;
    hsv(color: ColorParam): Color;
    hwb(...val: Array<number>): Color;
    hwb(color: ColorParam): Color;
    cmyk(...val: Array<number>): Color;
    cmyk(color: ColorParam): Color;
    xyz(...val: Array<number>): Color;
    xyz(color: ColorParam): Color;
    lab(...val: Array<number>): Color;
    lab(color: ColorParam): Color;
    lch(...val: Array<number>): Color;
    lch(color: ColorParam): Color;
    ansi16(...val: Array<number>): Color;
    ansi16(color: ColorParam): Color;
    ansi256(...val: Array<number>): Color;
    ansi256(color: ColorParam): Color;
    hcg(...val: Array<number>): Color;
    hcg(color: ColorParam): Color;
    apple(...val: Array<number>): Color;
    apple(color: ColorParam): Color;
  }

  declare module.exports: ColorConstructor;
}
