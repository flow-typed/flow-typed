//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { ZoomOutTwoTone as SvgIcon } from '@material-ui/icons';

describe('classes', () => {
  it('should passes when used properly', () => {
    <SvgIcon
      classes={{
        root: 'custom-class-name',
        colorSecondary: 'custom-class-name',
        colorAction: 'custom-class-name',
        colorDisabled: 'custom-class-name',
        colorError: 'custom-class-name',
        colorPrimary: 'custom-class-name',
        fontSizeInherit: 'custom-class-name',
        fontSizeSmall: 'custom-class-name',
        fontSizeLarge: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <SvgIcon
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <SvgIcon
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <SvgIcon
      component={() => null}
      color={'disabled'}
      fontSize={'default'}
      htmlColor="red"
      shapeRendering="optimizeSpeed"
      titleAccess="title"
      viewBox="0 0 69 69"
      className="some-class"
      style={{ width: '100%' }}
    />;

    <SvgIcon
      component={undefined}
      color={undefined}
      fontSize={undefined}
      htmlColor={undefined}
      shapeRendering={undefined}
      titleAccess={undefined}
      viewBox={undefined}
      className={undefined}
      style={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <SvgIcon
      // $ExpectError: need an exact value from enum
      color={111}
      // $ExpectError: need an exact value from enum
      fontSize={'default__'}
      // $ExpectError: need string value
      htmlColor={69}
      // $ExpectError: need string value
      shapeRendering={69}
      // $ExpectError: need string valueimizeSpeed"
      titleAccess={69}
      // $ExpectError: need string value
      viewBox={69}
      // $ExpectError: need string value
      className={69}
      // $ExpectError: need object
      style={[{ width: '100%' }]}
    />;
  });
});

describe('SVG props', () => {
  it('should passes when pass some SVG props', () => {
    <SvgIcon strokeDasharray="10%" />;
  });
});
