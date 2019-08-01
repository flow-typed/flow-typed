// @flow

import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#foo');
ReactModal.setAppElement(document.body);
// $ExpectError
ReactModal.setAppElement(1);

<ReactModal />;

<ReactModal isOpen />;
// $ExpectError
<ReactModal isOpen={1} />;

<ReactModal portalClassName="foo" />;
// $ExpectError
<ReactModal portalClassName={1} />;

<ReactModal bodyOpenClassName="foo" />;
// $ExpectError
<ReactModal bodyOpenClassName={1} />;

<ReactModal ariaHideApp />;
// $ExpectError
<ReactModal ariaHideApp={1} />;

<ReactModal closeTimeoutMS={10} />;
// $ExpectError
<ReactModal closeTimeoutMS />;

<ReactModal shouldFocusAfterRender />;
// $ExpectError
<ReactModal shouldFocusAfterRender={1} />;

<ReactModal shouldCloseOnEsc />;
// $ExpectError
<ReactModal shouldCloseOnEsc={1} />;

<ReactModal shouldCloseOnOverlayClick />;
// $ExpectError
<ReactModal shouldCloseOnOverlayClick={1} />;

<ReactModal shouldReturnFocusAfterClose />;
// $ExpectError
<ReactModal shouldReturnFocusAfterClose={1} />;

// $ExpectError
<ReactModal parentSelector={1} />;

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

<ReactModal appElement={document.body} />;
<ReactModal appElement="#foo" />;
// $ExpectError
<ReactModal appElement={1} />;

<ReactModal onAfterOpen={() => { }} />;
<ReactModal onAfterOpen={async () => { }} />;
// $ExpectError
<ReactModal onAfterOpen={1} />;

<ReactModal onRequestClose={() => { }} />;
<ReactModal onRequestClose={e => { }} />;
// $ExpectError
<ReactModal onRequestClose={1} />;

<ReactModal role="foo" />;
// $ExpectError
<ReactModal role={1} />;

<ReactModal contentLabel="foo" />;
// $ExpectError
<ReactModal contentLabel={1} />;

<ReactModal aria={{
  labelledby: 'foo'
}} />;
// $ExpectError
<ReactModal aria={1} />;

<ReactModal className="foo" />;
<ReactModal className={{
  base: "foo",
  afterOpen: "foo",
  beforeClose: "foo"
}} />;
// $ExpectError
<ReactModal className={1} />;

<ReactModal overlayClassName="foo" />;
<ReactModal overlayClassName={{
  base: "foo",
  afterOpen: "foo",
  beforeClose: "foo"
}} />;
// $ExpectError
<ReactModal overlayClassName={1} />;
