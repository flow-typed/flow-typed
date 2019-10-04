// @flow

import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@reach/dialog';
import { it, describe } from 'flow-typed-test';

describe('@reach/dialog', () => {
  describe('Dialog', function () {
    it('accepts isOpen flag', function () {
      <Dialog isOpen>foo</Dialog>;
      // $ExpectError
      <Dialog isOpen={2}>foo</Dialog>;
    });

    it('accepts onDismiss callback', function () {
      <Dialog isOpen onDismiss={() => {}}>foo</Dialog>;
      // $ExpectError
      <Dialog isOpen onDismiss={2}>foo</Dialog>;
    });

    it('accepts initialFocusRef property', function () {
      <Dialog initialFocusRef={React.createRef()}>foo</Dialog>;
      <Dialog initialFocusRef={React.useRef()}>foo</Dialog>;

      // $ExpectError
      <Dialog initialFocusRef={1}>foo</Dialog>
    });
  });

  describe('DialogContent', function () {
    it('spread props to children', function () {
      <DialogContent className="foo"><div /></DialogContent>;
    });
  });

  describe('DialogOverlay', function () {
    it('accepts isOpen flag', function () {
      <DialogOverlay isOpen>foo</DialogOverlay>;
      // $ExpectError
      <DialogOverlay isOpen={2}>foo</DialogOverlay>;
    });

    it('accepts onDismiss callback', function () {
      <DialogOverlay isOpen onDismiss={() => {}}>foo</DialogOverlay>;
      // $ExpectError
      <DialogOverlay isOpen onDismiss={2}>foo</DialogOverlay>;
    });

    it('accepts initialFocusRef property', function () {
      <DialogOverlay initialFocusRef={React.createRef()}>foo</DialogOverlay>;
      <DialogOverlay initialFocusRef={React.useRef()}>foo</DialogOverlay>;

      // $ExpectError
      <DialogOverlay initialFocusRef={1}>foo</DialogOverlay>
    });
  });
});
