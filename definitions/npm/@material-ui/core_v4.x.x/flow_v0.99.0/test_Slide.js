//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Slide } from '@material-ui/core';
import type { TransitionStatus } from '@material-ui/core/transitions';

const requiredProps = {
  direction: 'left',
};

describe('imports', () => {
  it('should passes when used properly', () => {
    const Slide1 = require('@material-ui/core/Slide').default;
    const Slide0 = require('@material-ui/core/Slide/Slide').default;

    <Slide1 {...requiredProps} />;
    <Slide0 {...requiredProps} />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Slide direction={'up'} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Slide
      // $ExpectError: `up__` is missing in enum
      direction={'up__'}
    />;

    // $ExpectError: `direction` is required prop
    <Slide />;
  });
});

describe('inherited Transition props', () => {
  describe('events', () => {
    it('should passes when used properly', () => {
      <Slide
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
        addEndListener={() => {}}
      >
        <div />
      </Slide>;
    });
  });
  it('should passes when used properly', () => {
    <Slide
      {...requiredProps}
      appear={false}
      enter={false}
      exit={false}
      onEnter={() => {}}
      onEntering={() => {}}
      onEntered={() => {}}
      onExit={() => {}}
      onExiting={() => {}}
      onExited={() => {}}
      in={false}
      mountOnEnter={false}
      unmountOnExit={false}
      timeout={250}
      addEndListener={() => {}}
      style={{
        width: 10,
        height: '100%',
        margin: 'auto',
      }}
    >
      <div />
    </Slide>;

    <Slide {...requiredProps} timeout={{ exit: 69 }} />;

    <Slide {...requiredProps} timeout={{ enter: 69 }} />;

    <Slide {...requiredProps} timeout={{ enter: 69, exit: 69 }}>
      {status => {
        (status: TransitionStatus);

        // $ExpectError: check any
        (status: number);

        return <div />;
      }}
    </Slide>;

    <Slide
      {...requiredProps}
      appear={undefined}
      enter={undefined}
      exit={undefined}
      onEnter={undefined}
      onEntering={undefined}
      onEntered={undefined}
      onExit={undefined}
      onExiting={undefined}
      onExited={undefined}
      in={undefined}
      mountOnEnter={undefined}
      unmountOnExit={undefined}
      timeout={undefined}
      addEndListener={undefined}
      style={undefined}
      theme={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: invalid children
    <Slide {...requiredProps}>{{ upps: 'sss...' }}</Slide>;

    <Slide
      {...requiredProps}
      // $ExpectError: need boolean
      appear={'need bool'}
      // $ExpectError: need boolean
      enter={'need bool'}
      // $ExpectError: need boolean
      exit={'need bool'}
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
      // $ExpectError: need boolean
      in={'need bool'}
      // $ExpectError: need boolean
      mountOnEnter={'need bool'}
      // $ExpectError: need boolean
      unmountOnExit={'need bool'}
      // $ExpectError: need function
      addEndListener={69}
      // $ExpectError: need object
      style={{ width: true }}
      // $ExpectError: need object
      theme={111}
    />;

    // $ExpectError: children function must return React Node
    <Slide {...requiredProps}>{() => {}}</Slide>;

    // $ExpectError: `enter` must be number
    <Slide {...requiredProps} timeout={{ enter: '69' }} />;

    // $ExpectError: `exit` must be number
    <Slide {...requiredProps} timeout={{ exit: '69' }} />;

    // $ExpectError:  exact type test, `exit___` missing
    <Slide {...requiredProps} timeout={{ exit___: 69 }} />;
  });
});
