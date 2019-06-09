//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Select } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Select1 = require('@material-ui/core/Select').default;
    const Select0 = require('@material-ui/core/Select/Select').default;

    <Select1 />;
    <Select0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Select
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
    <Select
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Select
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Select
      value={123}
      variant={'standard'}
      autoWidth={false}
      displayEmpty={false}
      multiple={false}
      native={false}
      open={false}
      input={<input />}
      IconComponent={'i'}
      MenuProps={{}}
      SelectDisplayProps={{}}
      renderValue={() => <div />}
      onClose={async () => {}}
      onOpen={async () => {}}
      onChange={async () => {}}
    />;

    <Select onClose={() => {}} onOpen={() => {}} onChange={() => {}} />;

    <Select
      value={undefined}
      variant={undefined}
      autoWidth={undefined}
      displayEmpty={undefined}
      multiple={undefined}
      native={undefined}
      open={undefined}
      input={undefined}
      IconComponent={undefined}
      MenuProps={undefined}
      SelectDisplayProps={undefined}
      renderValue={undefined}
      onClose={undefined}
      onOpen={undefined}
      onChange={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Select
      // $ExpectError: `__standard` is missing in enum
      variant={'__standard'}
      // $ExpectError
      autoWidth={'need boolean'}
      // $ExpectError
      displayEmpty={'need boolean'}
      // $ExpectError
      multiple={'need boolean'}
      // $ExpectError
      native={'need boolean'}
      // $ExpectError
      open={'need boolean'}
      // $ExpectError: need a react node
      input={{}}
      // $ExpectError: need a react component
      IconComponent={[]}
      MenuProps={{
        // $ExpectError: must be boolean
        disableAutoFocusItem: 123,
      }}
      // $ExpectError: need an object
      SelectDisplayProps={123}
      // $ExpectError
      renderValue={'need function'}
      // $ExpectError
      onClose={'need function'}
      // $ExpectError
      onOpen={'need function'}
      // $ExpectError
      onChange={'need function'}
    />;
  });
});

describe('inherited Input props', () => {
  it('should passes when used properly', () => {
    <Select disableUnderline={false} />;

    <Select disableUnderline={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Select
      // $ExpectError
      disableUnderline={'need boolean'}
    />;
  });
});

describe('inherited InputBase props', () => {
  describe('events', () => {
    it('should passes when used properly', () => {
      <Select
        // $ExpectError: function must return react node
        renderPrefix={() => ({})}
      />;

      <Select
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

      <Select renderPrefix={undefined} onFilled={undefined} />;

      <Select onFilled={() => {}} />;

      <Select onFilled={async () => {}} />;
    });
  });

  it('should passes when used properly', () => {
    <Select
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

    <Select margin={'none'} rows={'1'} rowsMax={'1'} />;

    <Select
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
    <Select
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
    <Select aria-hidden="true" />;
  });
});
