// @flow
import { describe, it } from 'flow-typed-test';
import Color from 'color';

describe('color', () => {
  it('constructor', () => {
    Color('rgb(255, 255, 255)');
    Color({r: 255, g: 255, b: 255});
    Color.rgb(255, 255, 255);
    Color.rgb([255, 255, 255]);
  });
});
