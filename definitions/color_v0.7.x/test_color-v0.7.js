// @flow
import Color from 'color';

const A: Color = Color();
const B: number[] = A.rgbArray();
// $ExpectError contrast needs a Color as parameter
const C: number = A.contrast();
const D: Color = A.negate();
// $ExpectError rgb takes only 3
const E: Color = A.rgb(0, 0, 0, 0);
