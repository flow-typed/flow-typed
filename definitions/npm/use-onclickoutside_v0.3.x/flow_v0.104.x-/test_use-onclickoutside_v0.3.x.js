// @flow

import { describe, it } from 'flow-typed-test';

import React, { useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';

describe('The `useOnClickOutside` hook', () => {
  it('should accept valid parameters', () => {
    const ref = useRef(null);
    useOnClickOutside(ref, () => {});
    useOnClickOutside(ref, (evt: MouseEvent) => {});
    useOnClickOutside(ref, (evt: TouchEvent) => {});

    // $FlowExpectedError
    useOnClickOutside(ref, (evt: AnimationEvent) => {});
    // $FlowExpectedError
    useOnClickOutside(null);
  });

  it('should validate on default usage', () => {
    function Modal() {
      const ref = useRef(null);
      useOnClickOutside(ref, () => {});

      return <div ref={ref}>{'Modal content'}</div>;
    }
  });

  it('should not return destructured vars', () => {
    const ref = useRef(null);
    (useOnClickOutside(ref, () => {}): void);
    // $FlowExpectedError
    (useOnClickOutside(ref, () => {}): []);
  });

  it('should forward the element type', () => {
    function Test() {
      const ref = useRef(null);
      useOnClickOutside<HTMLDivElement>(ref, () => {});

      if (ref.current) {
        (ref.current: HTMLDivElement);
        // $FlowExpectedError
        (ref.current: HTMLAnchorElement);

        ref.current.getBoundingClientRect();
        // $FlowExpectedError
        ref.current.shouldFail();
      }

      return <div ref={ref} />;
    }

    function Test() {
      const ref = useRef(null);
      useOnClickOutside<HTMLInputElement>(ref, () => {});

      if (ref.current) {
        (ref.current: HTMLInputElement);
        // $FlowExpectedError
        (ref.current: HTMLAnchorElement);

        ref.current.focus();
        // $FlowExpectedError
        ref.current.shouldFail();
      }

      return <input ref={ref} type="text" />;
    }
  });

  it('should play game with forwardRef', () => {
    const Fwd = React.forwardRef<{ ... }, HTMLDivElement>((props, ref) => (
      <div ref={ref} />
    ));

    function Test() {
      const ref = useRef(null);
      useOnClickOutside<HTMLDivElement>(ref, () => {});

      if (ref.current) {
        (ref.current: HTMLDivElement);
        // $FlowExpectedError
        (ref.current: HTMLAnchorElement);

        ref.current.getBoundingClientRect();
        // $FlowExpectedError
        ref.current.shouldFail();
      }

      return <Fwd ref={ref} />;
    }
  });
});
