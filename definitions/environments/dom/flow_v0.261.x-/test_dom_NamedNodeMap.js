// @flow

let tests = [
  function(attributes: NamedNodeMap) {
    attributes[0];
    attributes['data-testid'];

    // fails
    // $FlowExpectedError[incompatible-type]
    attributes[null];
    // $FlowExpectedError[incompatible-type]
    attributes[{}];
  }
];
