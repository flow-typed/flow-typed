//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Drawer } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Drawer1 = require('@material-ui/core/Drawer').default;
    const Drawer0 = require('@material-ui/core/Drawer/Drawer').default;

    <Drawer1 />;
    <Drawer0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Drawer
      classes={{
        root: 'str',
        docked: 'str',
        paper: 'str',
        paperAnchorLeft: 'str',
        paperAnchorRight: 'str',
        paperAnchorTop: 'str',
        paperAnchorBottom: 'str',
        paperAnchorDockedLeft: 'str',
        paperAnchorDockedTop: 'str',
        paperAnchorDockedRight: 'str',
        paperAnchorDockedBottom: 'str',
        modal: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Drawer
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Drawer
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Drawer
      anchor={'bottom'}
      elevation={1}
      ModalProps={{}}
      open={false}
      PaperProps={{ square: true }}
      SlideProps={{ direction: 'down' }}
      transitionDuration={{ enter: 1 }}
      variant={'permanent'}
    >
      <div />
      <div />
    </Drawer>;

    <Drawer
      anchor={undefined}
      elevation={undefined}
      ModalProps={undefined}
      open={undefined}
      PaperProps={undefined}
      SlideProps={undefined}
      transitionDuration={undefined}
      variant={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Drawer
      // $ExpectError: `bottom__` is missing in enum
      anchor={'bottom__'}
      // $ExpectError
      elevation={'need number'}
      // $ExpectError
      ModalProps={'need object'}
      // $ExpectError
      open={'need boolean'}
      PaperProps={{
        // $ExpectError
        square: 'need boolean',
      }}
      SlideProps={{
        // $ExpectError: `down__` is missing in enum
        direction: 'down__',
      }}
      // $ExpectError: `permanent__` is missing in enum
      variant={'permanent__'}
    />;

    // $ExpectError: `enter` must be number
    <Drawer transitionDuration={{ enter: '69' }} />;

    // $ExpectError: `exit` must be number
    <Drawer transitionDuration={{ exit: '69' }} />;

    // $ExpectError:  exact type test, `exit___` missing
    <Drawer transitionDuration={{ exit___: 69 }} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Drawer aria-hidden="true" />;
  });
});

describe('inherited Modal props', () => {
  it('should passes when used properly', () => {
    <Drawer
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
    />;

    <Drawer
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

    <Drawer
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
    <Drawer
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

    class DrawerDiv extends Drawer<'div'> {}

    it('should passes when used properly', () => {
      <DrawerDiv container={someDiv} />;
      <DrawerDiv container={null} />;
    });

    it('should raises an error when pass unexpected instance', () => {
      // $ExpectError: `HTMLAnchorElement` is incompatible with `HTMLDivElement`
      <DrawerDiv container={someAnchor} />;
    });
  });
});

describe('inherited TransitionHandler props', () => {
  describe('events', () => {
    it('should passes when used properly', () => {
      <Drawer
        onEnter={async (node, isAppearing) => {
          (node: HTMLElement);
          (isAppearing: boolean);

          // $ExpectError: check any type
          (node: string);
          // $ExpectError: check any type
          (isAppearing: number);
        }}
        onEntering={async (node, isAppearing) => {
          (node: HTMLElement);
          (isAppearing: boolean);

          // $ExpectError: check any type
          (node: string);
          // $ExpectError: check any type
          (isAppearing: number);
        }}
        onEntered={async (node, isAppearing) => {
          (node: HTMLElement);
          (isAppearing: boolean);

          // $ExpectError: check any type
          (node: string);
          // $ExpectError: check any type
          (isAppearing: number);
        }}
        onExit={() => {}}
        onExiting={() => {}}
        onExited={() => {}}
      />;
    });
  });
  it('should passes when used properly', () => {
    <Drawer
      onEnter={() => {}}
      onEntering={() => {}}
      onEntered={() => {}}
      onExit={() => {}}
      onExiting={() => {}}
      onExited={() => {}}
    />;

    <Drawer
      onEnter={undefined}
      onEntering={undefined}
      onEntered={undefined}
      onExit={undefined}
      onExiting={undefined}
      onExited={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Drawer
      // $ExpectError: need function
      onEnter={69}
      // $ExpectError: need function
      onEntering={69}
      // $ExpectError: need function
      onEntered={69}
      // $ExpectError: need function
      onExit={69}
      // $ExpectError: need function
      onExiting={69}
      // $ExpectError: need function
      onExited={69}
    />;
  });
});
