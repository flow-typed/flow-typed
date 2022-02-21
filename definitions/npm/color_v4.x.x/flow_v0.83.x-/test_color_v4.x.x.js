// @flow
import { describe, it } from 'flow-typed-test';
import Color, { type Color as ColorType } from 'color';

describe('color', () => {
  it('constructor', () => {
    Color('rgb(255, 255, 255)');
    Color({r: 255, g: 255, b: 255});
    Color.rgb(255, 255, 255);
    Color.rgb([255, 255, 255]);
  });

  it('getters', () => {
    const color = Color();

    const hex: string = color.hex();
    const percent: string = color.percentString();
    const keyword: string = color.keyword();
    const alpha: number = color.alpha();
    const red: number = color.red();
    const green: number = color.green();
    const blue: number = color.blue();
    const hue: number = color.hue();
    const saturationl: number = color.saturationl();
    const lightness: number = color.lightness();
    const saturationv: number = color.saturationv();
    const value: number = color.value();
    const cyan: number = color.cyan();
    const magenta: number = color.magenta();
    const yellow: number = color.yellow();
    const black: number = color.black();
    const luminosity: number = color.luminosity();
    const contrast: number = color.contrast(Color('black'));
    const isDark: boolean = color.isDark();
    const isLight: boolean = color.isLight();
    const level: string = color.level(Color('black'));

    const x: number = color.x();
    const y: number = color.y();
    const z: number = color.z();
    const l: number = color.l();
    const a: number = color.a();
    const b: number = color.b();
    const rgbNumber: number = color.rgbNumber();
  });

  it('chains', () => {
    const chain: ColorType = Color()
      .alpha(0)
      .red(0)
      .green(0)
      .blue(0)
      .hue(0)
      .saturationl(0)
      .lightness(0)
      .saturationv(0)
      .value(0)
      .cyan(0)
      .magenta(0)
      .yellow(0)
      .black(0)
      .negate()
      .lighten(0)
      .darken(0)
      .saturate(0)
      .desaturate(0)
      .grayscale()
      .whiten(0)
      .blacken(0)
      .opaquer(0)
      .rotate(0)
      .mix(Color(), 0)
      .hsl();
  });
});
