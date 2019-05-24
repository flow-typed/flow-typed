//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { NativeSelect } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const NativeSelect1 = require('@material-ui/core/NativeSelect').default;
    const NativeSelect0 = require('@material-ui/core/NativeSelect/NativeSelect')
      .default;

    <NativeSelect1 />;
    <NativeSelect0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <NativeSelect
      classes={{
        root: 'str',
        select: 'str',
        selectMenu: 'str',
        disabled: 'str',
        icon: 'str',
        filled: 'str',
        outlined: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <NativeSelect
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <NativeSelect
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <NativeSelect
      variant={'standard'}
      IconComponent={'div'}
      input={<input />}
      value={1}
      onChange={() => {}}
    />;

    <NativeSelect
      variant={'outlined'}
      IconComponent={() => <i />}
      onChange={async () => {}}
    />;

    <NativeSelect
      variant={undefined}
      IconComponent={undefined}
      input={undefined}
      value={undefined}
      onChange={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <NativeSelect
      // $ExpectError: `__standard` is missing in enum
      variant={'__standard'}
      // $ExpectError: invalid react component
      IconComponent={{}}
      // $ExpectError: invalid react node
      input={{}}
      // $ExpectError
      onChange={'need function'}
    />;
  });
});

describe('inherited Input props', () => {
  it('should passes when used properly', () => {
    <NativeSelect disableUnderline={false} />;

    <NativeSelect disableUnderline={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <NativeSelect
      // $ExpectError
      disableUnderline={'need boolean'}
    />;
  });
});

describe('inherited InputBase props', () => {
  describe('events', () => {
    it('should passes when used properly', () => {
      <NativeSelect
        // $ExpectError: function must return react node
        renderPrefix={() => ({})}
      />;

      <NativeSelect
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

      <NativeSelect renderPrefix={undefined} onFilled={undefined} />;

      <NativeSelect onFilled={() => {}} />;

      <NativeSelect onFilled={async () => {}} />;
    });
  });

  it('should passes when used properly', () => {
    <NativeSelect
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

    <NativeSelect margin={'none'} rows={'1'} rowsMax={'1'} />;

    <NativeSelect
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
    <NativeSelect
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
    <NativeSelect aria-hidden="true" />;
  });
});
