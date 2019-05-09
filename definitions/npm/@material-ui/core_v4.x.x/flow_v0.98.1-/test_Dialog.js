//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Dialog, Modal } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Dialog1 = require('@material-ui/core/Dialog').default;
    const Dialog0 = require('@material-ui/core/Dialog/Dialog').default;

    <Dialog1 />;
    <Dialog0 />;
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
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Dialog
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Dialog
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
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
    />;

    <Dialog
      maxWidth={false}
      scroll={'paper'}
      transitionDuration={{ exit: 69 }}
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
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: `open` is required
    <Dialog>{() => {}}</Dialog>;

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
      // $ExpectError: `html` missing in enum
      scroll={'html'}
      // $ExpectError: need react element type
      TransitionComponent={{}}
      TransitionProps={{
        // $ExpectError
        mountOnEnter: 'need boolean',
      }}
    />;

    // $ExpectError: `enter` must be number
    <Dialog transitionDuration={{ enter: '69' }} />;

    // $ExpectError: `exit` must be number
    <Dialog transitionDuration={{ exit: '69' }} />;

    // $ExpectError:  exact type test, `exit___` missing
    <Dialog transitionDuration={{ exit___: 69 }} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Dialog aria-hidden="true" />;
  });
});
