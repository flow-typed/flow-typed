// @flow

let tests = [
  // scrollIntoView
  function(element: Element) {
    element.scrollIntoView();
    element.scrollIntoView(false);
    element.scrollIntoView({});
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });
    element.scrollIntoView({ block: 'end' });
    element.scrollIntoView({ behavior: 'smooth' });

    // fails
    // $FlowExpectedError[incompatible-type]
    element.scrollIntoView({ behavior: 'invalid' });
    // $FlowExpectedError[incompatible-type]
    element.scrollIntoView({ block: 'invalid' });
    // $FlowExpectedError[incompatible-type]
    element.scrollIntoView(1);
  }
];
