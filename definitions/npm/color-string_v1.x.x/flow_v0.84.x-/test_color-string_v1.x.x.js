// @flow

import colors from 'color-string';
import { it, describe } from 'flow-typed-test';

describe('get', function () {
  it('parses input', function () {
    const parsed = colors.get('#fafafa');

    if (parsed) {
      const { model, value } = parsed;
      const [a,b,c,d] = value;
    }

    // $FlowExpectedError
    colors.get(123)
  });

  it('parses as rgba', function () {
    const parsed = colors.get.rgb('#fafafa');

    if (parsed) {
      const [a,b,c,d] = parsed;
    }

    // $FlowExpectedError
    colors.get.rgb(123);
  });

  it('parses as hsla', function () {
    const parsed = colors.get.hsl('#fafafa');

    if (parsed) {
      const [a,b,c,d] = parsed;
    }

    // $FlowExpectedError
    colors.get.hsl(123);
  });

  it('parses as hwba', function () {
    const parsed = colors.get.hwb('#fafafa');

    if (parsed) {
      const [a,b,c,d] = parsed;
    }

    // $FlowExpectedError
    colors.get.hwb(123);
  });
});

describe('to', function () {
  it('serializes to color keyword', () => {
    let keyword = colors.to.keyword([0, 0, 0]);

    if (keyword) {
      keyword.trimLeft();
    }

    keyword = colors.to.keyword(0, 0, 0);

    if (keyword) {
      keyword.trimLeft();
    }

    // $FlowExpectedError
    colors.to.keyword('abc');
  });

  it('serializes to hex', function () {
    let color: string = colors.to.hex([255, 255, 255]);
    color = colors.to.hex(0, 0, 255);
    color = colors.to.hex([0, 0, 255], 0.4);
    color = colors.to.hex([0, 0, 255, 0.4]);
    color = colors.to.hex(0, 0, 255, 0.4);

    // $FlowExpectedError
    colors.to.hex('foo');
  });

  it('serializes to hsl', function () {
    let color: string = colors.to.hsl([255, 255, 255]);
    color = colors.to.hsl(0, 0, 255);
    color = colors.to.hsl([0, 0, 255], 0.4);
    color = colors.to.hsl([0, 0, 255, 0.4]);
    color = colors.to.hsl(0, 0, 255, 0.4);

    // $FlowExpectedError
    colors.to.hsl('foo');
  });

  it('serializes to hwb', function () {
    let color: string = colors.to.hwb([255, 255, 255]);
    color = colors.to.hwb(0, 0, 255);
    color = colors.to.hwb([0, 0, 255], 0.4);
    color = colors.to.hwb([0, 0, 255, 0.4]);
    color = colors.to.hwb(0, 0, 255, 0.4);

    // $FlowExpectedError
    colors.to.hwb('foo');
  });

  it('serializes to rgb', function () {
    let color: string = colors.to.rgb([255, 255, 255]);
    color = colors.to.rgb(0, 0, 255);
    color = colors.to.rgb([0, 0, 255], 0.4);
    color = colors.to.rgb([0, 0, 255, 0.4]);
    color = colors.to.rgb(0, 0, 255, 0.4);

    // $FlowExpectedError
    colors.to.rgb('foo');
  });

  it('serializes to rgb with %', function () {
    let color: string = colors.to.rgb.percent([255, 255, 255]);
    color = colors.to.rgb.percent(0, 0, 255);
    color = colors.to.rgb.percent([0, 0, 255], 0.4);
    color = colors.to.rgb.percent([0, 0, 255, 0.4]);
    color = colors.to.rgb.percent(0, 0, 255, 0.4);

    // $FlowExpectedError
    colors.to.rgb.percent('foo');
  });
});
