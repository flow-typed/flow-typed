// @flow

import { describe, it } from 'flow-typed-test';

import * as React from 'react';
import { useClipboard } from 'use-clipboard-copy';

describe('The `useClipboard` hook', () => {
  it('should accept valid parameters', () => {
    useClipboard();
    useClipboard({ copiedTimeout: 200 });

    // $FlowExpectedError[incompatible-call]
    useClipboard(null);
    // $FlowExpectedError[prop-missing]
    // $FlowExpectedError[cannot-resolve-name]
    useClipboard({ fail });
  });

  it('should validate the return type', () => {
    const clipboard = useClipboard();

    (clipboard.copied: boolean);
    clipboard.copy('');
    (clipboard.isSupported(): boolean);

    function Test() {
      const clipboard = useClipboard();
      if (clipboard.target.current) {
        (clipboard.target.current: HTMLElement);
      }
      return <input ref={clipboard.target} />;
    }
  });

  it('should validate on default usage', () => {
    function Test() {
      const clipboard = useClipboard();

      if (clipboard.target.current) {
        (clipboard.target.current: HTMLElement);
      }

      return (
        <>
          <input ref={clipboard.target} />
          <button onClick={clipboard.copy}>Copy</button>
        </>
      );
    }
  });

  it('should validate on type parameter usage', () => {
    function Test() {
      const clipboard = useClipboard<HTMLInputElement>();

      if (clipboard.target.current) {
        (clipboard.target.current: HTMLInputElement);
      }

      return (
        <>
          {/* $FlowExpectedError[incompatible-type] */}
          <textarea ref={clipboard.target} />
          <input ref={clipboard.target} />
          <button onClick={clipboard.copy}>Copy</button>
        </>
      );
    }
  });

  it('should validate on imperative usage', () => {
    function Test({ url }: {| url: string |}) {
      const clipboard = useClipboard();

      const handleClick = React.useCallback(() => {
        clipboard.copy(url);
      }, [clipboard.copy, url]);

      return <button onClick={handleClick}>Copy</button>;
    }
  });

  it('should validate on timeout and state usage', () => {
    function Test({ url }: {| url: string |}) {
      const clipboard = useClipboard({
        copiedTimeout: 600,
      });

      return (
        <>
          <input ref={clipboard.target} value={url} readOnly />
          <button onClick={clipboard.copy}>
            {clipboard.copied ? 'Copied' : 'Copy'}
          </button>
        </>
      );
    }
  });

  it('should validate on callbacks usage', () => {
    function Test() {
      const clipboard = useClipboard({
        onSuccess() {
          console.log('Text was copied successfully!');
        },
        onError() {
          console.log('Failed to copy text!');
        },
      });

      return (
        <>
          <input ref={clipboard.target} />
          <button onClick={clipboard.copy}>Copy</button>
        </>
      );
    }
  });

  it('should validate on browser support check usage', () => {
    function Test() {
      const clipboard = useClipboard();

      return clipboard.isSupported()
        ? 'yay! copy-to-clipboard is supported'
        : 'meh. copy-to-clipboard is not supported';
    }
  });
});
