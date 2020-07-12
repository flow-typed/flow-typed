// @flow

import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#foo');
ReactModal.setAppElement(document.body);
// $FlowExpectedError
ReactModal.setAppElement(1);

<ReactModal />;

<ReactModal isOpen />;
// $FlowExpectedError
<ReactModal isOpen={1} />;

<ReactModal portalClassName="foo" />;
// $FlowExpectedError
<ReactModal portalClassName={1} />;

<ReactModal bodyOpenClassName="foo" />;
// $FlowExpectedError
<ReactModal bodyOpenClassName={1} />;

<ReactModal ariaHideApp />;
// $FlowExpectedError
<ReactModal ariaHideApp={1} />;

<ReactModal closeTimeoutMS={10} />;
// $FlowExpectedError
<ReactModal closeTimeoutMS />;

<ReactModal shouldFocusAfterRender />;
// $FlowExpectedError
<ReactModal shouldFocusAfterRender={1} />;

<ReactModal shouldCloseOnEsc />;
// $FlowExpectedError
<ReactModal shouldCloseOnEsc={1} />;

<ReactModal shouldCloseOnOverlayClick />;
// $FlowExpectedError
<ReactModal shouldCloseOnOverlayClick={1} />;

<ReactModal shouldReturnFocusAfterClose />;
// $FlowExpectedError
<ReactModal shouldReturnFocusAfterClose={1} />;

// $FlowExpectedError
<ReactModal parentSelector={1} />;

<ReactModal style={{}} />;
<ReactModal style={{
  content: {}
}} />;
<ReactModal style={{
  overlay: {}
}} />;
// $FlowExpectedError
<ReactModal style={{
  content: 1
}} />;
// $FlowExpectedError
<ReactModal style={{
  overlay: 1
}} />;

<ReactModal appElement={document.body} />;
<ReactModal appElement="#foo" />;
// $FlowExpectedError
<ReactModal appElement={1} />;

<ReactModal onAfterOpen={() => { }} />;
<ReactModal onAfterOpen={async () => { }} />;
// $FlowExpectedError
<ReactModal onAfterOpen={1} />;

<ReactModal onRequestClose={() => { }} />;
<ReactModal onRequestClose={e => { }} />;
// $FlowExpectedError
<ReactModal onRequestClose={1} />;

<ReactModal role="foo" />;
// $FlowExpectedError
<ReactModal role={1} />;

<ReactModal contentLabel="foo" />;
// $FlowExpectedError
<ReactModal contentLabel={1} />;

<ReactModal aria={{
  labelledby: 'foo'
}} />;
// $FlowExpectedError
<ReactModal aria={1} />;

<ReactModal className="foo" />;
<ReactModal className={{
  base: "foo",
  afterOpen: "foo",
  beforeClose: "foo"
}} />;
// $FlowExpectedError
<ReactModal className={1} />;

<ReactModal overlayClassName="foo" />;
<ReactModal overlayClassName={{
  base: "foo",
  afterOpen: "foo",
  beforeClose: "foo"
}} />;
// $FlowExpectedError
<ReactModal overlayClassName={1} />;
