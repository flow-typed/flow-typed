// @flow

import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#foo');
ReactModal.setAppElement(document.body);
// $FlowExpectedError[incompatible-call]
ReactModal.setAppElement(1);

<ReactModal />;

<ReactModal isOpen />;
// $FlowExpectedError[incompatible-type]
<ReactModal isOpen={1} />;

<ReactModal portalClassName="foo" />;
// $FlowExpectedError[incompatible-type]
<ReactModal portalClassName={1} />;

<ReactModal bodyOpenClassName="foo" />;
// $FlowExpectedError[incompatible-type]
<ReactModal bodyOpenClassName={1} />;

<ReactModal ariaHideApp />;
// $FlowExpectedError[incompatible-type]
<ReactModal ariaHideApp={1} />;

<ReactModal closeTimeoutMS={10} />;
// $FlowExpectedError[incompatible-type]
<ReactModal closeTimeoutMS />;

<ReactModal shouldFocusAfterRender />;
// $FlowExpectedError[incompatible-type]
<ReactModal shouldFocusAfterRender={1} />;

<ReactModal shouldCloseOnEsc />;
// $FlowExpectedError[incompatible-type]
<ReactModal shouldCloseOnEsc={1} />;

<ReactModal shouldCloseOnOverlayClick />;
// $FlowExpectedError[incompatible-type]
<ReactModal shouldCloseOnOverlayClick={1} />;

<ReactModal shouldReturnFocusAfterClose />;
// $FlowExpectedError[incompatible-type]
<ReactModal shouldReturnFocusAfterClose={1} />;

// $FlowExpectedError[incompatible-type]
<ReactModal parentSelector={1} />;

<ReactModal style={{}} />;
<ReactModal style={{ content: {} }} />;
<ReactModal style={{ overlay: {} }} />;
// $FlowExpectedError[incompatible-type]
<ReactModal style={{ content: 1 }} />;
// $FlowExpectedError[incompatible-type]
<ReactModal style={{ overlay: 1 }} />;

<ReactModal appElement={document.body} />;
<ReactModal appElement="#foo" />;
// $FlowExpectedError[incompatible-type]
<ReactModal appElement={1} />;

<ReactModal onAfterOpen={() => { }} />;
<ReactModal onAfterOpen={async () => { }} />;
// $FlowExpectedError[incompatible-type]
<ReactModal onAfterOpen={1} />;

<ReactModal onRequestClose={() => { }} />;
<ReactModal onRequestClose={e => { }} />;
// $FlowExpectedError[incompatible-type]
<ReactModal onRequestClose={1} />;

<ReactModal role="foo" />;
// $FlowExpectedError[incompatible-type]
<ReactModal role={1} />;

<ReactModal contentLabel="foo" />;
// $FlowExpectedError[incompatible-type]
<ReactModal contentLabel={1} />;

<ReactModal aria={{
  labelledby: 'foo'
}} />;
// $FlowExpectedError[incompatible-type]
<ReactModal aria={1} />;

<ReactModal className="foo" />;
<ReactModal className={{
  base: "foo",
  afterOpen: "foo",
  beforeClose: "foo"
}} />;
// $FlowExpectedError[incompatible-type]
<ReactModal className={1} />;

<ReactModal overlayClassName="foo" />;
<ReactModal overlayClassName={{
  base: "foo",
  afterOpen: "foo",
  beforeClose: "foo"
}} />;
// $FlowExpectedError[incompatible-type]
<ReactModal overlayClassName={1} />;
