// @flow

import React from 'react';
import ReactModal from 'react-modal';
import { describe, it } from 'flow-typed-test';

describe('Modal.setAppElement', () => {
  it('should accept valid selectors', () => {
    ReactModal.setAppElement('#foo');
    ReactModal.setAppElement(document.body);

    // $FlowExpectedError[incompatible-call]
    ReactModal.setAppElement(1);
  });
});

it('isOpen property should be a boolean', () => {
  <ReactModal isOpen />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen={1} />;
});

it('portalClassName property should be a string', () => {
  <ReactModal isOpen portalClassName="foo" />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen portalClassName={1} />;
});

it('bodyOpenClassName property should be a string', () => {
  <ReactModal isOpen bodyOpenClassName="foo" />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen bodyOpenClassName={1} />;
});

it('ariaHideApp property should be a boolean', () => {
  <ReactModal isOpen ariaHideApp />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen ariaHideApp={1} />;
});

it('closeTimeoutMS property should be a number', () => {
  <ReactModal isOpen closeTimeoutMS={10} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen closeTimeoutMS />;
});

it('shouldFocusAfterRender property should be a boolean', () => {
  <ReactModal isOpen shouldFocusAfterRender />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen shouldFocusAfterRender={1} />;
});

it('shouldCloseOnEsc property should be a boolean', () => {
  <ReactModal isOpen shouldCloseOnEsc />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen shouldCloseOnEsc={1} />;
});

it('shouldCloseOnOverlayClick property should be a boolean', () => {
  <ReactModal isOpen shouldCloseOnOverlayClick />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen shouldCloseOnOverlayClick={1} />;
});

it('shouldReturnFocusAfterClose property should be a boolean', () => {
  <ReactModal isOpen shouldReturnFocusAfterClose />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen shouldReturnFocusAfterClose={1} />;
});

it('style should be an object with optional content and overlay settings', () => {
  <ReactModal isOpen style={{}} />;
  <ReactModal isOpen style={{ content: {} }} />;
  <ReactModal isOpen style={{ overlay: {} }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen style={{ content: 1 }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen style={{ overlay: 1 }} />;
});

it('parentSelector property should be a callback', () => {
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen parentSelector={1} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen parentSelector="#foo" />;
  <ReactModal isOpen parentSelector={() => document.body} />;
});

it('onAfterOpen property should be a callback', () => {
  <ReactModal isOpen onAfterOpen={() => { }} />;
  <ReactModal isOpen onAfterOpen={async () => { }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen onAfterOpen={1} />;
});

it('onRequestClose property should be a callback', () => {
  <ReactModal isOpen onRequestClose={() => { }} />;
  <ReactModal isOpen onRequestClose={e => { }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen onRequestClose={1} />;
});

it('role property should be a string', () => {
  <ReactModal isOpen role="foo" />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen role={1} />;
});

it('contentLabel property should be a string', () => {
  <ReactModal isOpen contentLabel="foo" />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen contentLabel={1} />;
});

it('aria property should be an object', () => {
  <ReactModal
    isOpen
    aria={{
      labelledby: 'foo'
    }}
  />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen aria={1} />;
});

it('className can be a string or an object', () => {
  <ReactModal isOpen className="foo" />;
  <ReactModal
    isOpen
    className={{
      base: "foo",
      afterOpen: "foo",
      beforeClose: "foo"
    }}
  />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen className={1} />;
});

it('overlayClassName can be a string or an object', () => {
  <ReactModal isOpen overlayClassName="foo" />;
  <ReactModal isOpen overlayClassName={{
    base: "foo",
    afterOpen: "foo",
    beforeClose: "foo"
  }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen overlayClassName={1} />;
});

it('overlayRef property should be a ref callback ', () => {
  let n;
  <ReactModal isOpen overlayRef={node => { n = node; }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen overlayRef={1} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen overlayRef="foo" />;
});

it('containerRef property should be a ref callback ', () => {
  let n;
  <ReactModal isOpen containerRef={node => { n = node; }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen containerRef={1} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen containerRef="foo" />;
});

it('contentRef property should be a ref callback ', () => {
  let n;
  <ReactModal isOpen contentRef={node => { n = node; }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen contentRef={1} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen contentRef="foo" />;
});
