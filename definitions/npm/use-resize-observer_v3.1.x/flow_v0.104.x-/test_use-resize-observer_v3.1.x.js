// @flow

import { describe, it } from 'flow-typed-test';

import React, { useRef } from 'react';
import useResizeObserver from 'use-resize-observer';

describe('The `useResizeObserver` hook', () => {
  it('should not accept parameters', () => {
    useResizeObserver();
    // $ExpectError
    useResizeObserver(null);
  });

  it('should validate on default usage', () => {
    function Test() {
      const [ref, width, height] = useResizeObserver();

      return (
        <div ref={ref}>
          Size: {width}x{height}
        </div>
      );
    }
  });

  it('should return typed destructured vars', () => {
    const [ref, width, height] = useResizeObserver();

    (ref.current: HTMLElement | null);
    (width: number);
    (height: number);
  });

  it('should forward the element type', () => {
    function Test() {
      const [ref, width, height] = useResizeObserver<HTMLDivElement>();

      if (ref.current) {
        (ref.current: HTMLDivElement);
        // $ExpectError
        (ref.current: HTMLAnchorElement);

        ref.current.getBoundingClientRect();
        // $ExpectError
        ref.current.shouldFail();
      }

      return <div ref={ref} />;
    }

    function Test() {
      const [ref, width, height] = useResizeObserver<HTMLInputElement>();

      if (ref.current) {
        (ref.current: HTMLInputElement);
        // $ExpectError
        (ref.current: HTMLAnchorElement);

        ref.current.focus();
        // $ExpectError
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
      const [ref, width, height] = useResizeObserver<HTMLDivElement>();

      if (ref.current) {
        (ref.current: HTMLDivElement);
        // $ExpectError
        (ref.current: HTMLAnchorElement);

        ref.current.getBoundingClientRect();
        // $ExpectError
        ref.current.shouldFail();
      }

      return <Fwd ref={ref} />;
    }
  });
});
