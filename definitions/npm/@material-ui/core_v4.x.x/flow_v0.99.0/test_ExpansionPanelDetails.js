//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { ExpansionPanelDetails } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const ExpansionPanelDetails1 = require('@material-ui/core/ExpansionPanelDetails')
      .default;
    const ExpansionPanelDetails0 = require('@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails')
      .default;

    <ExpansionPanelDetails1 />;
    <ExpansionPanelDetails0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <ExpansionPanelDetails
      classes={{
        root: 'str',
        spacing: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <ExpansionPanelDetails
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <ExpansionPanelDetails
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <ExpansionPanelDetails aria-hidden="true" />;
  });
});
