//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { ClickAwayListener } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const ClickAwayListener1 = require('@material-ui/core/ClickAwayListener')
      .default;
    const ClickAwayListener0 = require('@material-ui/core/ClickAwayListener/ClickAwayListener')
      .default;

    <ClickAwayListener1 onClickAway={() => {}}>
      <i />
    </ClickAwayListener1>;
    <ClickAwayListener0 onClickAway={() => {}}>
      <i />
    </ClickAwayListener0>;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <ClickAwayListener
      touchEvent="onTouchStart"
      mouseEvent="onClick"
      onClickAway={event => {
        // $ExpectError: check is not any
        (event: boolean);
      }}
    >
      <i />
    </ClickAwayListener>;

    <ClickAwayListener
      touchEvent={undefined}
      mouseEvent={undefined}
      onClickAway={() => {}}
    >
      <i />
    </ClickAwayListener>;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError
    <ClickAwayListener raised={'need boolean'} onClickAway={() => {}}>
      <i />
    </ClickAwayListener>;
  });

  it('should raises an error when pass missing prop', () => {
    // $ExpectError: Exact Props type
    <ClickAwayListener anyProps="true" onClickAway={() => {}}>
      <i />
    </ClickAwayListener>;
  });
});
