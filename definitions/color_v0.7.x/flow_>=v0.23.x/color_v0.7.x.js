type RGBObject = {
  r: number,
  g: number,
  b: number,
};

type HSLObject = {
  h: number,
  s: number,
  l: number,
};

type HSVObject = {
  h: number,
  s: number,
  v: number,
};

type HWBObject = {
  h: number,
  w: number,
  b: number,
};

type CMYKObject = {
  c: number,
  m: number,
  y: number,
  k: number,
};

declare module 'color' {
  declare class Color {
    static (value?: string|RGBObject): Color;
    rgb(): RGBObject;
    rgbArray(): Array<number>;
    rgb(r: number, g: number, b: number): Color;
    rgb(rgb: Array<number>): Color;
    hsl(): HSLObject;
    hslArray(): Array<number>;
    hsl(h: number, s: number, l: number): Color;
    hsl(hsl: HSLObject): Color;
    hsv(): HSVObject;
    hsvArray(): Array<number>;
    hsv(h: number, s: number, v: number): Color;
    hsv(hsv: HSVObject): Color;
    hwb(): HWBObject;
    hwbArray(): Array<number>;
    hwb(h: number, w: number, b: number): Color;
    hwb(hwb: HWBObject): Color;
    cmyk(): CMYKObject;
    cmykArray(): Array<number>;
    cmyk(c: number, m: number, y: number, k: number): Color;
    cmyk(cmyk: CMYKObject): Color;
    alpha(): number;
    alpha(alpha: number): Color;
    red(): number;
    red(red: number): Color;
    green(): number;
    green(green: number): Color;
    blue(): number;
    blue(blue: number): Color;
    hue(): number;
    hue(hue: number): Color;
    saturation(): number;
    saturation(saturation: number): Color;
    saturationv(): number;
    saturationv(saturationv: number): Color;
    lightness(): number;
    lightness(lightness: number): Color;
    whiteness(): number;
    whiteness(whiteness: number): Color;
    blackness(): number;
    blackness(blackness: number): Color;
    cyan(): number;
    cyan(cyan: number): Color;
    magenta(): number;
    magenta(magenta: number): Color;
    yellow(): number;
    yellow(yellow: number): Color;
    black(): number;
    black(black: number): Color;
    hslString(): string;
    hexString(): string;
    rgbString(): string;
    percentString(): string;
    hslString(): string;
    hwbString(): string;
    keyword(): ?string;
    luminosity(): number;
    contrast(color: Color): number;
    light(): bool;
    dark(): bool;
    negate(): Color;
    lighten(value: number): Color;
    darken(value: number): Color;
    saturate(value: number): Color;
    desaturate(value: number): Color;
    grayscale(): Color;
    clearer(value: number): Color;
    opaquer(value: number): Color;
    rotate(value: number): Color;
    mix(color: Color, value?: number): Color;
    clone(): Color;
  }
  declare var exports: typeof Color;
}
