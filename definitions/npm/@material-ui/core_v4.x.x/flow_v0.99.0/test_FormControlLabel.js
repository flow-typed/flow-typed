//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { FormControlLabel } from '@material-ui/core';

const requiredProps = {
  label: [<i />],
  control: <div />,
};

describe('imports', () => {
  it('should passes when used properly', () => {
    const FormControlLabel1 = require('@material-ui/core/FormControlLabel')
      .default;
    const FormControlLabel0 = require('@material-ui/core/FormControlLabel/FormControlLabel')
      .default;

    <FormControlLabel1 {...requiredProps} />;
    <FormControlLabel0 {...requiredProps} />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <FormControlLabel
      classes={{
        root: 'str',
        start: 'str',
        disabled: 'str',
        label: 'str',
      }}
      {...requiredProps}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <FormControlLabel
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
      {...requiredProps}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <FormControlLabel
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
      {...requiredProps}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <FormControlLabel
      checked={false}
      control={<div />}
      disabled={false}
      inputRef={React.createRef()}
      label={[<i />]}
      labelPlacement={'start'}
      name={'name'}
      onChange={() => {}}
      value={123}
    />;

    <FormControlLabel onChange={async () => {}} {...requiredProps} />;

    <FormControlLabel
      checked={undefined}
      disabled={undefined}
      inputRef={undefined}
      labelPlacement={undefined}
      name={undefined}
      onChange={undefined}
      value={undefined}
      {...requiredProps}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: `control` is required prop
    <FormControlLabel label={<i />} />;
    // $ExpectError: `label` is required prop
    <FormControlLabel control={<div />} />;

    <FormControlLabel
      // $ExpectError
      checked={'need boolean'}
      // $ExpectError: react element
      control={'need react element'}
      // $ExpectError
      disabled={'need boolean'}
      // $ExpectError
      inputRef={[]}
      // $ExpectError: need react node
      label={{}}
      // $ExpectError: `__start` is missing in enum
      labelPlacement={'__start'}
      // $ExpectError: need string
      name={1}
      // $ExpectError
      onChange={'need function'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <FormControlLabel aria-hidden="true" {...requiredProps} />;
  });
});
