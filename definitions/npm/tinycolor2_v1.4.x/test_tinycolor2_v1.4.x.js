// @flow
import tinycolor from 'tinycolor2';
import type { TinyColorInstance, RgbaColor } from 'tinycolor2';

const color = tinycolor('rgb(0,0,0)');

(color: TinyColorInstance<'rgb(0,0,0)'>);
tinycolor2.fromRatio({ r: 0, g: 0, b: 0 });
color.toRgb().r;
(color.toRgb(): RgbaColor);
// $ExpectError
new color.nope();
