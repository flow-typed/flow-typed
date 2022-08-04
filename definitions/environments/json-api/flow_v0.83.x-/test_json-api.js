// @flow
import { describe, test } from 'flow-typed-test';

describe('json-api', () => {
  test('JsonApi$Json', () => {
    const json1 : JsonApi$Json = { foo: 123 };

    const json2: JsonApi$Json = { $call: 123 };

    // $FlowExpectedError[incompatible-type]
    const json3: JsonApi$Json = () => {};

    const json4: JsonApi$Json = {
      strings: ['asdf', 'qwer'],
    };
  });
});
