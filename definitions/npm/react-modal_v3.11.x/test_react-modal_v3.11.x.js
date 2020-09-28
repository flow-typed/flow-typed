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
  <ReactModal />;

  <ReactModal isOpen />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal isOpen={1} />;
});

it('portalClassName property should be a string', () => {
  < ReactModal portalClassName="foo" />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal portalClassName={1} />;
});

it('bodyOpenClassName property should be a string', () => {
  < ReactModal bodyOpenClassName="foo" />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal bodyOpenClassName={1} />;
});

it('ariaHideApp property should be a boolean', () => {
  <ReactModal ariaHideApp />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal ariaHideApp={1} />;
});

it('closeTimeoutMS property should be a number', () => {
  <ReactModal closeTimeoutMS={10} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal closeTimeoutMS />;
});

it('shouldFocusAfterRender property should be a boolean', () => {
  <ReactModal shouldFocusAfterRender />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal shouldFocusAfterRender={1} />;
});

it('shouldCloseOnEsc property should be a boolean', () => {
  <ReactModal shouldCloseOnEsc />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal shouldCloseOnEsc={1} />;
});

it('shouldCloseOnOverlayClick property should be a boolean', () => {
  <ReactModal shouldCloseOnOverlayClick />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal shouldCloseOnOverlayClick={1} />;
});

it('shouldReturnFocusAfterClose property should be a boolean', () => {
  <ReactModal shouldReturnFocusAfterClose />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal shouldReturnFocusAfterClose={1} />;
});

it('style should be an object with optional content and overlay settings', () => {
  <ReactModal style={{}} />;
  <ReactModal style={{ content: {} }} />;
  <ReactModal style={{ overlay: {} }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal style={{ content: 1 }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal style={{ overlay: 1 }} />;
});

it('parentSelector property should be a callback', () => {
  // $FlowExpectedError[incompatible-type]
  <ReactModal parentSelector={1} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal parentSelector="#foo" />;
  <ReactModal parentSelector={() => document.body} />;
});

it('onAfterOpen property should be a callback', () => {
  <ReactModal onAfterOpen={() => { }} />;
  <ReactModal onAfterOpen={async () => { }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal onAfterOpen={1} />;
});

it('onRequestClose property should be a callback', () => {
  <ReactModal onRequestClose={() => { }} />;
  <ReactModal onRequestClose={e => { }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal onRequestClose={1} />;
});

it('role property should be a string', () => {
  < ReactModal role="foo" />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal role={1} />;
});

it('contentLabel property should be a string', () => {
  < ReactModal contentLabel="foo" />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal contentLabel={1} />;
});

it('aria property should be an object', () => {
  <ReactModal aria={{
    labelledby: 'foo'
  }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal aria={1} />;
});

it('className can be a string or an object', () => {
  <ReactModal className="foo" />;
  <ReactModal className={{
    base: "foo",
    afterOpen: "foo",
    beforeClose: "foo"
  }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal className={1} />;
});

it('overlayClassName can be a string or an object', () => {
  <ReactModal overlayClassName="foo" />;
  <ReactModal overlayClassName={{
    base: "foo",
    afterOpen: "foo",
    beforeClose: "foo"
  }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal overlayClassName={1} />;
});

it('overlayRef property should be a ref callback ', () => {
  let n;
  <ReactModal overlayRef={node => { n = node; }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal overlayRef={1} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal overlayRef="foo" />;
});

it('containerRef property should be a ref callback ', () => {
  let n;
  <ReactModal containerRef={node => { n = node; }} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal containerRef={1} />;
  // $FlowExpectedError[incompatible-type]
  <ReactModal containerRef="foo" />;
});
