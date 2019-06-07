//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Popover } from '@material-ui/core';

const requiredProps = { open: false };

describe('imports', () => {
  it('should passes when used properly', () => {
    const Popover1 = require('@material-ui/core/Popover').default;
    const Popover0 = require('@material-ui/core/Popover/Popover').default;

    <Popover1 {...requiredProps} />;
    <Popover0 {...requiredProps} />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Popover
      {...requiredProps}
      classes={{
        paper: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Popover
      {...requiredProps}
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Popover
      {...requiredProps}
      classes={{
        // $ExpectError: need string value
        paper: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Popover
      open={false}
      action={() => {}}
      anchorEl={null}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      anchorPosition={{ top: 0, left: 0 }}
      anchorReference={'anchorEl'}
      elevation={1}
      getContentAnchorEl={null}
      marginThreshold={69}
      modal={false}
      ModalClasses={{ hidden: 'str' }}
      PaperProps={{ square: false }}
      role={'document'}
      transformOrigin={{ horizontal: 1, vertical: 1 }}
      TransitionComponent={'div'}
      transitionDuration={'auto'}
      TransitionProps={{ in: false }}
    >
      <div />
    </Popover>;

    const img = document.createElement('img');

    <Popover
      {...requiredProps}
      action={async actions => {
        (actions.updatePosition(): void);
      }}
      anchorEl={img}
      transitionDuration={{ enter: 1 }}
      getContentAnchorEl={() => img}
    />;

    <Popover {...requiredProps} anchorEl={() => img} />;

    <Popover
      {...requiredProps}
      action={undefined}
      anchorEl={undefined}
      anchorOrigin={undefined}
      anchorPosition={undefined}
      anchorReference={undefined}
      elevation={undefined}
      getContentAnchorEl={undefined}
      marginThreshold={undefined}
      modal={undefined}
      ModalClasses={undefined}
      PaperProps={undefined}
      role={undefined}
      transformOrigin={undefined}
      TransitionComponent={undefined}
      transitionDuration={undefined}
      TransitionProps={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: `open` is required
    <Popover />;

    <Popover
      {...requiredProps}
      // $ExpectError
      action={'need function'}
      // $ExpectError: need dom element
      anchorEl={123}
      // $ExpectError: need object
      anchorOrigin={123}
      // $ExpectError
      anchorPosition={123}
      // $ExpectError: __anchorEl is missing in enum
      anchorReference={'__anchorEl'}
      // $ExpectError
      elevation={'need number'}
      // $ExpectError
      getContentAnchorEl={'need function or null'}
      // $ExpectError
      marginThreshold={'need number'}
      // $ExpectError
      modal={'need boolean'}
      ModalClasses={{
        // $ExpectError: need string
        hidden: 123,
      }}
      // $ExpectError: `__square` is missing
      PaperProps={{ __square: false }}
      // $ExpectError
      role={123}
      // $ExpectError
      transformOrigin={123}
      // $ExpectError
      TransitionComponent={123}
      // $ExpectError: need number or 'auto' or object
      transitionDuration={[]}
      TransitionProps={{
        // $ExpectError
        in: 'need boolean',
      }}
    />;
  });
});

describe('inherited Popover props', () => {
  it('should passes when used properly', () => {
    <Popover
      open={false}
      BackdropComponent={'div'}
      BackdropProps={{ invisible: true }}
      closeAfterTransition={false}
      disableAutoFocus={false}
      disableBackdropClick={false}
      disableEnforceFocus={false}
      disableEscapeKeyDown={false}
      disablePortal={false}
      disableRestoreFocus={false}
      hideBackdrop={false}
      keepMounted={false}
      onBackdropClick={async () => {}}
      onClose={async () => {}}
      onEscapeKeyDown={async () => {}}
      onRendered={async () => {}}
    >
      <div />
    </Popover>;

    <Popover
      {...requiredProps}
      BackdropComponent={() => <div />}
      onBackdropClick={() => {}}
      onClose={(e, reason) => {
        (reason: 'backdropClick' | 'escapeKeyDown');

        // $ExpectError: check any
        (reason: number);
      }}
      onEscapeKeyDown={() => {}}
      onRendered={() => {}}
    />;

    <Popover
      {...requiredProps}
      BackdropComponent={undefined}
      BackdropProps={undefined}
      closeAfterTransition={undefined}
      disableAutoFocus={undefined}
      disableBackdropClick={undefined}
      disableEnforceFocus={undefined}
      disableEscapeKeyDown={undefined}
      disablePortal={undefined}
      disableRestoreFocus={undefined}
      hideBackdrop={undefined}
      keepMounted={undefined}
      onBackdropClick={undefined}
      onClose={undefined}
      onEscapeKeyDown={undefined}
      onRendered={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: `open` is required
    <Popover>
      <i />
    </Popover>;

    <Popover
      {...requiredProps}
      // $ExpectError
      open={'need boolean'}
      // $ExpectError: need react ElementType
      BackdropComponent={{}}
      BackdropProps={{
        // $ExpectError: invisible must be boolean
        invisible: 'true ',
      }}
      // $ExpectError
      closeAfterTransition={'need boolean'}
      // $ExpectError
      disableAutoFocus={'need boolean'}
      // $ExpectError
      disableBackdropClick={'need boolean'}
      // $ExpectError
      disableEnforceFocus={'need boolean'}
      // $ExpectError
      disableEscapeKeyDown={'need boolean'}
      // $ExpectError
      disablePortal={'need boolean'}
      // $ExpectError
      disableRestoreFocus={'need boolean'}
      // $ExpectError
      hideBackdrop={'need boolean'}
      // $ExpectError
      keepMounted={'need boolean'}
      // $ExpectError
      onBackdropClick={'need function'}
      // $ExpectError
      onClose={'need function'}
      // $ExpectError
      onEscapeKeyDown={'need function'}
      // $ExpectError
      onRendered={'need function'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Popover {...requiredProps} aria-hidden="true" />;
  });
});
