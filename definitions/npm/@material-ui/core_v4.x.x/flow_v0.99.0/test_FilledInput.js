//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { FilledInput } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const FilledInput1 = require('@material-ui/core/FilledInput').default;
    const FilledInput0 = require('@material-ui/core/FilledInput/FilledInput')
      .default;

    <FilledInput1 />;
    <FilledInput0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <FilledInput
      classes={{
        root: 'str',
        underline: 'str',
        focused: 'str',
        disabled: 'str',
        adornedStart: 'str',
        adornedEnd: 'str',
        error: 'str',
        multiline: 'str',
        input: 'str',
        inputMarginDense: 'str',
        inputMultiline: 'str',
        inputAdornedStart: 'str',
        inputAdornedEnd: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <FilledInput
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <FilledInput
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <FilledInput disableUnderline={false} />;

    <FilledInput disableUnderline={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <FilledInput
      // $ExpectError
      disableUnderline={'need boolean'}
    />;
  });
});

describe('inherited FilledInputBase props', () => {
  describe('events', () => {
    it('should passes when used properly', () => {
      <FilledInput
        // $ExpectError: function must return react node
        renderPrefix={() => ({})}
      />;

      <FilledInput
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

      <FilledInput renderPrefix={undefined} onFilled={undefined} />;

      <FilledInput onFilled={() => {}} />;

      <FilledInput onFilled={async () => {}} />;
    });
  });

  it('should passes when used properly', () => {
    <FilledInput
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

    <FilledInput margin={'none'} rows={'1'} rowsMax={'1'} />;

    <FilledInput
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
    <FilledInput
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
    <FilledInput aria-hidden="true" />;
  });
});
