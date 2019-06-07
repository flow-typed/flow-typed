//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Portal } from '@material-ui/core';

const requiredProps = { children: <i /> };

describe('imports', () => {
  it('should passes when used properly', () => {
    const Portal1 = require('@material-ui/core/Portal').default;
    const Portal0 = require('@material-ui/core/Portal/Portal').default;

    <Portal1 {...requiredProps} />;
    <Portal0 {...requiredProps} />;
  });
});

describe('own props', () => {
  describe('container', () => {
    declare var someDiv: HTMLDivElement;
    declare var someAnchor: HTMLAnchorElement;

    class PortalDiv extends Portal<'div'> {}

    it('should passes when used properly', () => {
      <PortalDiv {...requiredProps} container={someDiv} />;
      <PortalDiv {...requiredProps} container={null} />;
    });

    it('should raises an error when pass unexpected instance', () => {
      // $ExpectError: `HTMLAnchorElement` is incompatible with `HTMLDivElement`
      <PortalDiv {...requiredProps} container={someAnchor} />;
    });
  });

  it('should passes when used properly', () => {
    <Portal
      {...requiredProps}
      disablePortal={false}
      onRendered={async () => {}}
    />;

    <Portal {...requiredProps} onRendered={() => {}} />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: children is required
    <Portal />;

    <Portal
      {...requiredProps}
      // $ExpectError
      disablePortal={'need boolean'}
      // $ExpectError
      onRendered={'need function'}
    />;
  });
});

describe('other props', () => {
  it('should raises an error when pass missing props', () => {
    // $ExpectError
    <Portal {...requiredProps} aria-hidden="true" />;
  });
});
