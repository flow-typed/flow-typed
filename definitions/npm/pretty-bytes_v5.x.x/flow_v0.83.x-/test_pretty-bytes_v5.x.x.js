// @flow
import { describe, it } from 'flow-typed-test';
import prettyBytes from 'pretty-bytes';

describe('pretty-bytes', () => {
  it('works with just bytes', () => {
    prettyBytes(1337).toLowerCase();

    // $FlowExpectedError[incompatible-call]
    prettyBytes();
    // $FlowExpectedError[incompatible-call]
    prettyBytes('test');
  });

  it('works with options', () => {
    prettyBytes(1337, { bits: true });
    prettyBytes(42, { signed: true });
    prettyBytes(1337, { locale: 'de' });

    // $FlowExpectedError[prop-missing]
    prettyBytes(1337, { foo: 'bar' });
  });
});
