//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Input } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Input1 = require('@material-ui/core/Input').default;
    const Input0 = require('@material-ui/core/Input/Input').default;

    <Input1 />;
    <Input0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Input
      classes={{
        root: 'str',
        formControl: 'str',
        focused: 'str',
        disabled: 'str',
        underline: 'str',
        error: 'str',
        multiline: 'str',
        fullWidth: 'str',
        input: 'str',
        inputMarginDense: 'str',
        inputMultiline: 'str',
        inputTypeSearch: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Input
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Input
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Input disableUnderline={false} />;

    <Input disableUnderline={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Input
      // $ExpectError
      disableUnderline={'need boolean'}
    />;
  });
});

describe('inherited InputBase props', () => {
  describe('events', () => {
    it('should passes when used properly', () => {
      <Input
        // $ExpectError: function must return react node
        renderPrefix={() => ({})}
      />;

      <Input
        renderPrefix={state => {
          (state.disabled: ?boolean);
          (state.error: ?boolean);
          (state.filled: ?boolean);
          (state.focused: ?boolean);
          (state.margin: ?'dense' | 'none' | 'normal');
          (state.required: ?boolean);
          (state.startAdornment: ?React$Node);

          // $ExpectError: check any
          (state.disabled: ?number);

          return 'react node';
        }}
      />;

      <Input renderPrefix={undefined} onFilled={undefined} />;

      <Input onFilled={() => {}} />;

      <Input onFilled={async () => {}} />;
    });
  });

  it('should passes when used properly', () => {
    <Input
      autoComplete={'str'}
      autoFocus={false}
      defaultValue={'mixed'}
      disabled={false}
      endAdornment={<i />}
      error={false}
      fullWidth={false}
      id={'str'}
      inputComponent={'input'}
      inputProps={{}}
      margin={'dense'}
      multiline={false}
      name={'str'}
      placeholder={'str'}
      readOnly={false}
      required={false}
      rows={1}
      rowsMax={1}
      startAdornment={<i />}
      type={'str'}
      value={'mixed'}
    />;

    <Input margin={'none'} rows={'1'} rowsMax={'1'} />;

    <Input
      autoComplete={undefined}
      autoFocus={undefined}
      defaultValue={undefined}
      disabled={undefined}
      endAdornment={undefined}
      error={undefined}
      fullWidth={undefined}
      id={undefined}
      inputComponent={undefined}
      inputProps={undefined}
      margin={undefined}
      multiline={undefined}
      name={undefined}
      placeholder={undefined}
      readOnly={undefined}
      required={undefined}
      rows={undefined}
      rowsMax={undefined}
      startAdornment={undefined}
      type={undefined}
      value={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Input
      // $ExpectError: need string
      autoComplete={69}
      // $ExpectError
      autoFocus={'need string'}
      // $ExpectError
      disabled={'need string'}
      // $ExpectError: need react node
      endAdornment={() => {}}
      // $ExpectError
      error={'need string'}
      // $ExpectError
      fullWidth={'need string'}
      // $ExpectError: need string
      id={69}
      // $ExpectError: invalid react component
      inputComponent={{}}
      // $ExpectError: need object
      inputProps={0}
      // $ExpectError: `__dense` is missing in enum
      margin={'__dense'}
      // $ExpectError
      multiline={'need string'}
      // $ExpectError: need string
      name={69}
      // $ExpectError: need string
      placeholder={69}
      // $ExpectError
      readOnly={'need string'}
      // $ExpectError
      required={'need string'}
      // $ExpectError: need string or number
      rows={true}
      // $ExpectError: need string or number
      rowsMax={true}
      // $ExpectError: need react node
      startAdornment={() => {}}
      // $ExpectError: need string
      type={69}
      // $ExpectError
      renderPrefix={'need func'}
      // $ExpectError
      onFilled={'need func'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Input aria-hidden="true" />;
  });
});
