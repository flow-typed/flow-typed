// @flow

import React from 'react';
import ReactModal from 'react-modal';
import { describe, it } from 'flow-typed-test';

describe('Modal.setAppElement', () => {
  it('should accept valid selectors', () => {
    ReactModal.setAppElement('#foo');
    ReactModal.setAppElement(document.body);

    // $ExpectError
    ReactModal.setAppElement(1);
  });
});

it('isOpen property should be a boolean', () => {
  <ReactModal />;

  <ReactModal isOpen />;
  // $ExpectError
  <ReactModal isOpen={1} />;
});

it('portalClassName property should be a string', () => {
  < ReactModal portalClassName="foo" />;
  // $ExpectError
  <ReactModal portalClassName={1} />;
});

it('bodyOpenClassName property should be a string', () => {
  < ReactModal bodyOpenClassName="foo" />;
  // $ExpectError
  <ReactModal bodyOpenClassName={1} />;
});

it('ariaHideApp property should be a boolean', () => {
  <ReactModal ariaHideApp />;
  // $ExpectError
  <ReactModal ariaHideApp={1} />;
});

it('closeTimeoutMS property should be a number', () => {
  <ReactModal closeTimeoutMS={10} />;
  // $ExpectError
  <ReactModal closeTimeoutMS />;
});

it('shouldFocusAfterRender property should be a boolean', () => {
  <ReactModal shouldFocusAfterRender />;
  // $ExpectError
  <ReactModal shouldFocusAfterRender={1} />;
});

it('shouldCloseOnEsc property should be a boolean', () => {
  <ReactModal shouldCloseOnEsc />;
  // $ExpectError
  <ReactModal shouldCloseOnEsc={1} />;
});

it('shouldCloseOnOverlayClick property should be a boolean', () => {
  <ReactModal shouldCloseOnOverlayClick />;
  // $ExpectError
  <ReactModal shouldCloseOnOverlayClick={1} />;
});

it('shouldReturnFocusAfterClose property should be a boolean', () => {
  <ReactModal shouldReturnFocusAfterClose />;
  // $ExpectError
  <ReactModal shouldReturnFocusAfterClose={1} />;
});

it('style should be an object with optional content and overlay settings', () => {
  <ReactModal style={{}} />;
  <ReactModal style={{
    content: {}
  }} />;
  <ReactModal style={{
    overlay: {}
  }} />;
  // $ExpectError
  <ReactModal style={{
    content: 1
  }} />;
  // $ExpectError
  <ReactModal style={{
    overlay: 1
  }} />;
});

it('parentSelector property should be a callback', () => {
  // $ExpectError
  <ReactModal parentSelector={1} />;
  // $ExpectError
  <ReactModal parentSelector="#foo" />;
  <ReactModal parentSelector={() => document.body} />;
});

it('onAfterOpen property should be a callback', () => {
  <ReactModal onAfterOpen={() => { }} />;
  <ReactModal onAfterOpen={async () => { }} />;
  // $ExpectError
  <ReactModal onAfterOpen={1} />;
});

it('onRequestClose property should be a callback', () => {
  <ReactModal onRequestClose={() => { }} />;
  <ReactModal onRequestClose={e => { }} />;
  // $ExpectError
  <ReactModal onRequestClose={1} />;
});

it('role property should be a string', () => {
  < ReactModal role="foo" />;
  // $ExpectError
  <ReactModal role={1} />;
});

it('contentLabel property should be a string', () => {
  < ReactModal contentLabel="foo" />;
  // $ExpectError
  <ReactModal contentLabel={1} />;
});

it('aria property should be an object', () => {
  <ReactModal aria={{
    labelledby: 'foo'
  }} />;
  // $ExpectError
  <ReactModal aria={1} />;
});

it('className can be a string or an object', () => {
  <ReactModal className="foo" />;
  <ReactModal className={{
    base: "foo",
    afterOpen: "foo",
    beforeClose: "foo"
  }} />;
  // $ExpectError
  <ReactModal className={1} />;
});

it('overlayClassName can be a string or an object', () => {
  <ReactModal overlayClassName="foo" />;
  <ReactModal overlayClassName={{
    base: "foo",
    afterOpen: "foo",
    beforeClose: "foo"
  }} />;
  // $ExpectError
  <ReactModal overlayClassName={1} />;
});

it('overlayRef property should be a ref callback ', () => {
  let n;
  <ReactModal overlayRef={node => { n = node; }} />;
  // $ExpectError
  <ReactModal overlayRef={1} />;
  // $ExpectError
  <ReactModal overlayRef="foo" />;
});

it('containerRef property should be a ref callback ', () => {
  let n;
  <ReactModal containerRef={node => { n = node; }} />;
  // $ExpectError
  <ReactModal containerRef={1} />;
  // $ExpectError
  <ReactModal containerRef="foo" />;
});
