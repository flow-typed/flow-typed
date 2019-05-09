//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Modal } from '@material-ui/core';

const requiredProps = {
  children: <i />,
  open: false,
};

describe('imports', () => {
  it('should passes when used properly', () => {
    const Modal1 = require('@material-ui/core/Modal').default;
    const Modal0 = require('@material-ui/core/Modal/Modal').default;

    <Modal1 {...requiredProps} />;
    <Modal0 {...requiredProps} />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Modal
      {...requiredProps}
      classes={{
        root: 'str',
        hidden: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Modal
      {...requiredProps}
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Modal
      {...requiredProps}
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Modal
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
    </Modal>;

    <Modal
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

    <Modal
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
    // $ExpectError: `children` is required
    <Modal open={false} />;

    // $ExpectError: `open` is required
    <Modal>
      <i />
    </Modal>;

    <Modal
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

  describe('inherited container prop', () => {
    declare var someDiv: HTMLDivElement;
    declare var someAnchor: HTMLAnchorElement;

    class ModalDiv extends Modal<'div'> {}

    it('should passes when used properly', () => {
      <ModalDiv {...requiredProps} container={someDiv} />;
      <ModalDiv {...requiredProps} container={null} />;
    });

    it('should raises an error when pass unexpected instance', () => {
      // $ExpectError: `HTMLAnchorElement` is incompatible with `HTMLDivElement`
      <ModalDiv {...requiredProps} container={someAnchor} />;
    });
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Modal {...requiredProps} aria-hidden="true" />;
  });
});
