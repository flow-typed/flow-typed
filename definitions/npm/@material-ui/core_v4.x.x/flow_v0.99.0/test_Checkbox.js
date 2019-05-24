//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Checkbox } from '@material-ui/core';
import type { CheckboxProps } from '@material-ui/core/Checkbox';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Checkbox1 = require('@material-ui/core/Checkbox').default;
    const Checkbox0 = require('@material-ui/core/Checkbox/Checkbox').default;

    <Checkbox1 />;
    <Checkbox0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Checkbox
      classes={{
        root: 'str',
        checked: 'str',
        disabled: 'str',
        input: 'str',
        indeterminate: 'str',
        colorPrimary: 'str',
        colorSecondary: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Checkbox
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Checkbox
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Checkbox
      color={'primary'}
      indeterminate={false}
      indeterminateIcon={<i />}
    />;

    <Checkbox
      color={undefined}
      indeterminate={undefined}
      indeterminateIcon={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Checkbox
      // $ExpectError: `__primary` is missing in enum
      color={'__primary'}
      // $ExpectError: need boolean
      indeterminate={1}
      // $ExpectError: need react node
      indeterminateIcon={{}}
    />;
  });
});

describe('inherited SwitchBase props', () => {
  it('should passes when used properly', () => {
    <Checkbox
      checkedIcon={<i />}
      icon={<i />}
      autoFocus={false}
      checked={false}
      defaultChecked={false}
      disabled={false}
      disableRipple={false}
      inputProps={{}}
      inputRef={React.createRef()}
      name={'name'}
      onChange={() => {}}
      readOnly={false}
      required={false}
      tabIndex={0}
      value={'any'}
    />;

    <Checkbox
      onChange={async (event, checked) => {
        (checked: boolean);

        // $ExpectError: check any
        (checked: string);
      }}
    />;

    <Checkbox
      checkedIcon={undefined}
      icon={undefined}
      autoFocus={undefined}
      checked={undefined}
      defaultChecked={undefined}
      disabled={undefined}
      disableRipple={undefined}
      inputProps={undefined}
      inputRef={undefined}
      name={undefined}
      onChange={undefined}
      readOnly={undefined}
      required={undefined}
      tabIndex={undefined}
      value={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Checkbox
      // $ExpectError: need react node
      checkedIcon={{}}
      // $ExpectError: need react node
      icon={{}}
      // $ExpectError
      autoFocus={'need boolean'}
      // $ExpectError
      checked={'need boolean'}
      // $ExpectError
      defaultChecked={'need boolean'}
      // $ExpectError
      disabled={'need boolean'}
      // $ExpectError
      disableRipple={'need boolean'}
      // $ExpectError: need object
      inputProps={123}
      // $ExpectError: need react ref
      inputRef={{}}
      // $ExpectError: need string
      name={123}
      // $ExpectError: need function
      onChange={123}
      // $ExpectError
      readOnly={'need boolean'}
      // $ExpectError
      required={'need boolean'}
      // $ExpectError: need number
      tabIndex={'0'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Checkbox aria-hidden="true" />;
  });
});

describe('exported props', () => {
  it("shouldn't be any", () => {
    declare var testProps: CheckboxProps;

    (testProps.indeterminate: ?boolean);

    // $ExpectError: check any
    (testProps.indeterminate: ?number);
  });
});
