// @flow

let tests = [
  // delegatesFocus readOnly
  function(root: ShadowRoot) {
    // fails
    // $FlowExpectedError[cannot-write]
    root.delegatesFocus = true;
  },

  // host readOnly
  function(root: ShadowRoot, element: Element) {
    // fails
    // $FlowExpectedError[cannot-write]
    root.host = element;
  },

  // innerHTML
  function(root: ShadowRoot) {
    root.innerHTML = 'test';

    // fails
    // $FlowExpectedError[incompatible-type]
    root.innerHTML = true;
  },

  // mode readOnly
  function(root: ShadowRoot) {
    // fails
    // $FlowExpectedError[cannot-write]
    root.mode = 'open';
  },
];
