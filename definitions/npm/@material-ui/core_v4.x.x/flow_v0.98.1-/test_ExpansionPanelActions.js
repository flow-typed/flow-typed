//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { ExpansionPanelActions } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const ExpansionPanelActions1 = require('@material-ui/core/ExpansionPanelActions')
      .default;
    const ExpansionPanelActions0 = require('@material-ui/core/ExpansionPanelActions/ExpansionPanelActions')
      .default;

    <ExpansionPanelActions1 />;
    <ExpansionPanelActions0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <ExpansionPanelActions
      classes={{
        root: 'str',
        spacing: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <ExpansionPanelActions
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <ExpansionPanelActions
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <ExpansionPanelActions aria-hidden="true" />;
  });
});
