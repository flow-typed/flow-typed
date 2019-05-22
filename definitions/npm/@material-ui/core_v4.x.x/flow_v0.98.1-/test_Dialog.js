//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Dialog } from '@material-ui/core';

const requiredProps = {
  children: [<i />], // react node
  open: false,
};

describe('imports', () => {
  it('should passes when used properly', () => {
    const Dialog1 = require('@material-ui/core/Dialog').default;
    const Dialog0 = require('@material-ui/core/Dialog/Dialog').default;

    <Dialog1 {...requiredProps} />;
    <Dialog0 {...requiredProps} />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Dialog
      classes={{
        root: 'str',
        scrollPaper: 'str',
        scrollBody: 'str',
        container: 'str',
        paper: 'str',
        paperScrollPaper: 'str',
        paperScrollBody: 'str',
        paperWidthFalse: 'str',
        paperWidthXs: 'str',
        paperWidthSm: 'str',
        paperWidthMd: 'str',
        paperWidthLg: 'str',
        paperWidthXl: 'str',
        paperFullWidth: 'str',
        paperFullScreen: 'str',
      }}
      {...requiredProps}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Dialog
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
      {...requiredProps}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Dialog
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
      {...requiredProps}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Dialog
      fullScreen={false}
      fullWidth={false}
      maxWidth={'xs'}
      PaperComponent={'div'}
      PaperProps={{ elevation: 1 }}
      scroll={'body'}
      TransitionComponent={() => <div />}
      transitionDuration={250}
      TransitionProps={{ mountOnEnter: true }}
      open={true}
    >
      <div />
      <div />
    </Dialog>;

    <Dialog
      maxWidth={false}
      scroll={'paper'}
      transitionDuration={{ exit: 69 }}
      {...requiredProps}
    />;

    <Dialog
      fullScreen={undefined}
      fullWidth={undefined}
      maxWidth={undefined}
      PaperComponent={undefined}
      PaperProps={undefined}
      scroll={undefined}
      TransitionComponent={undefined}
      transitionDuration={undefined}
      TransitionProps={undefined}
      {...requiredProps}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: `open` is required
    <Dialog />;

    // $ExpectError: `children` is required
    <Dialog open={true} />;

    <Dialog
      // $ExpectError
      fullScreen={'need boolean'}
      // $ExpectError
      fullWidth={'need boolean'}
      // $ExpectError: true missing in enum
      maxWidth={true}
      // $ExpectError: need react element type
      PaperComponent={{}}
      PaperProps={{
        // $ExpectError: elevation must be number
        elevation: '22',
      }}
      // $ExpectError: `html` is missing in enum
      scroll={'html'}
      // $ExpectError: need react element type
      TransitionComponent={{}}
      TransitionProps={{
        // $ExpectError
        mountOnEnter: 'need boolean',
      }}
      {...requiredProps}
    />;

    // $ExpectError: `enter` must be number
    <Dialog transitionDuration={{ enter: '69' }} {...requiredProps} />;

    // $ExpectError: `exit` must be number
    <Dialog transitionDuration={{ exit: '69' }} {...requiredProps} />;

    // $ExpectError:  exact type test, `exit___` missing
    <Dialog transitionDuration={{ exit___: 69 }} {...requiredProps} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Dialog aria-hidden="true" {...requiredProps} />;
  });
});

describe('inherited Modal props', () => {
  it('should passes when used properly', () => {
    <Dialog
      {...requiredProps}
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

    <Dialog
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

    <Dialog
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
    <Dialog>
      <i />
      <i />
    </Dialog>;

    <Dialog
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

    class DialogDiv extends Dialog<'div'> {}

    it('should passes when used properly', () => {
      <DialogDiv {...requiredProps} container={someDiv} />;
      <DialogDiv {...requiredProps} container={null} />;
    });

    it('should raises an error when pass unexpected instance', () => {
      // $ExpectError: `HTMLAnchorElement` is incompatible with `HTMLDivElement`
      <DialogDiv {...requiredProps} container={someAnchor} />;
    });
  });
});

describe('inherited TransitionHandler props', () => {
  describe('events', () => {
    it('should passes when used properly', () => {
      <Dialog
        {...requiredProps}
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
    <Dialog
      {...requiredProps}
      onEnter={() => {}}
      onEntering={() => {}}
      onEntered={() => {}}
      onExit={() => {}}
      onExiting={() => {}}
      onExited={() => {}}
    />;

    <Dialog
      {...requiredProps}
      onEnter={undefined}
      onEntering={undefined}
      onEntered={undefined}
      onExit={undefined}
      onExiting={undefined}
      onExited={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Dialog
      {...requiredProps}
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
