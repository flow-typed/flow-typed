// @flow
import reduceFunctionCall from 'reduce-function-call';


reduceFunctionCall('foo(1)', 'foo', body => parseInt(body, 10) + 1);
// "2"

var nothingOrUpper = (body, functionIdentifier) => {
  if (body === '') {
    return functionIdentifier + '()';
  }

  return body.toUpperCase();
};

reduceFunctionCall('bar()', 'bar', nothingOrUpper);
// "bar()"

reduceFunctionCall('upper(baz)', 'upper', nothingOrUpper);
// "BAZ"

reduceFunctionCall(
  'math(math(2 + 2) * 4 + math(2 + 2)) and other things',
  'math',
  (body, functionIdentifier, call) => {
    try {
      return eval(body);
    } catch (e) {
      return call;
    }
  }
);
// "20 and other things"

reduceFunctionCall(
  'sha bla blah() blaa bla() abla() aabla() blaaa()',
  /\b([a-z]?bla[a-z]?)\(/,
  (body, functionIdentifier) => {
    if (functionIdentifier === 'bla') {
      return 'ABRACADABRA';
    }
    return functionIdentifier.replace('bla', '!');
  }
);
// "sha bla !h blaa ABRACADABRA a! aabla() blaaa()"123

// $ExpectError
reduceFunctionCall(123, 'foo', body => parseInt(body, 10) + 1);
// $ExpectError
reduceFunctionCall('foo(1)', 123, body => parseInt(body, 10) + 1);
// $ExpectError
reduceFunctionCall('foo(1)', 'foo', 'string');
// $ExpectError
reduceFunctionCall('foo(1)', 'foo', body => body * 5);

reduceFunctionCall(
  'foo(1)',
  'foo',
  // $ExpectError
  (body, functionIdentifier) => functionIdentifier * 5
);

reduceFunctionCall(
  'foo(1)',
  'foo',
  // $ExpectError
  (body, functionIdentifier, call) => call * 5
);
