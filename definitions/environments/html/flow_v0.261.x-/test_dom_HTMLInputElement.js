// @flow

let tests = [
  // setRangeText
  function(el: HTMLInputElement) {
    el.setRangeText('foo');
    // $FlowExpectedError[incompatible-type]
    el.setRangeText('foo', 123); // end is required
    el.setRangeText('foo', 123, 234);
    el.setRangeText('foo', 123, 234, 'select');
    // $FlowExpectedError[incompatible-type]
    el.setRangeText('foo', 123, 234, 'bogus'); // invalid value
  }
];
