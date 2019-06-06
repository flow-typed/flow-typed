//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { ExpansionPanel } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const ExpansionPanel1 = require('@material-ui/core/ExpansionPanel').default;
    const ExpansionPanel0 = require('@material-ui/core/ExpansionPanel/ExpansionPanel')
      .default;

    <ExpansionPanel1 />;
    <ExpansionPanel0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <ExpansionPanel
      classes={{
        root: 'str',
        rounded: 'str',
        expanded: 'str',
        disabled: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <ExpansionPanel
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <ExpansionPanel
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <ExpansionPanel
      defaultExpanded={false}
      disabled={false}
      expanded={false}
      onChange={async () => {}}
      TransitionComponent={'div'}
      TransitionProps={{ mountOnEnter: false }}
    />;

    <ExpansionPanel onChange={() => {}} TransitionComponent={() => <i />} />;

    <ExpansionPanel
      defaultExpanded={undefined}
      disabled={undefined}
      expanded={undefined}
      onChange={undefined}
      TransitionComponent={undefined}
      TransitionProps={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <ExpansionPanel
      // $ExpectError
      defaultExpanded={'need bool'}
      // $ExpectError
      disabled={'need bool'}
      // $ExpectError
      expanded={'need bool'}
      // $ExpectError
      onChange={'need function'}
      // $ExpectError
      TransitionComponent={{ need: 'React component' }}
      TransitionProps={{
        // $ExpectError
        mountOnEnter: 'need boolean',
      }}
    />;
  });
});

describe('inherited <Paper/> props', () => {
  it('should passes when used properly', () => {
    <ExpansionPanel elevation={1} square={false} />;
    <ExpansionPanel elevation={undefined} square={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: need number
    <ExpansionPanel elevation={'1'} />;
    // $ExpectError: need boolean
    <ExpansionPanel square={'true'} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <ExpansionPanel aria-hidden="true" />;
  });
});
