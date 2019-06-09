//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Popper } from '@material-ui/core';

const requiredProps = { open: true, children: <i /> };

describe('imports', () => {
  it('should passes when used properly', () => {
    const Popper1 = require('@material-ui/core/Popper').default;
    const Popper0 = require('@material-ui/core/Popper/Popper').default;

    <Popper1 {...requiredProps} />;
    <Popper0 {...requiredProps} />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Popper
      open={false}
      transition={false}
      anchorEl={null}
      container={null}
      disablePortal={false}
      keepMounted={false}
      placement={'right-start'}
      modifiers={{}}
      popperOptions={{}}
    >
      {() => <i />}
    </Popper>;

    const div = document.createElement('div');
    <Popper open={false} anchorEl={div}>
      <i />
    </Popper>;

    <Popper {...requiredProps} anchorEl={() => div} />;

    <Popper
      {...requiredProps}
      transition={undefined}
      anchorEl={undefined}
      container={undefined}
      disablePortal={undefined}
      keepMounted={undefined}
      placement={undefined}
      modifiers={undefined}
      popperOptions={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: `open` is required props
    <Popper>
      <i />
    </Popper>;

    // $ExpectError: `children` is required props
    <Popper open={false} />;

    <Popper
      {...requiredProps}
      // $ExpectError
      transition={'need boolean'}
      // $ExpectError: number is not a Element
      anchorEl={123}
      // $ExpectError
      disablePortal={'need boolean'}
      // $ExpectError
      keepMounted={'need boolean'}
      // $ExpectError: `__right-start` is missing in enum
      placement={'__right-start'}
      // $ExpectError
      modifiers={'need object'}
      // $ExpectError
      popperOptions={'need object'}
    />;
  });

  describe('inherited container prop', () => {
    declare var someDiv: HTMLDivElement;
    declare var someAnchor: HTMLAnchorElement;

    class PopperDiv extends Popper<'div'> {}

    it('should passes when used properly', () => {
      <PopperDiv {...requiredProps} container={someDiv} />;
      <PopperDiv {...requiredProps} container={null} />;
    });

    it('should raises an error when pass unexpected instance', () => {
      // $ExpectError: `HTMLAnchorElement` is incompatible with `HTMLDivElement`
      <PopperDiv {...requiredProps} container={someAnchor} />;
    });
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Popper {...requiredProps} aria-hidden="true" />;
  });
});
