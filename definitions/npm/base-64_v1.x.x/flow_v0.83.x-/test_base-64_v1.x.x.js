// @flow
import { describe, it } from 'flow-typed-test';
import base64 from 'base-64';

describe('base-64', () => {
  it('encodes', () => {
    const bytes = '123123123';
    const encoded = base64.encode(bytes);
    encoded.toLowerCase();

    // $FlowExpectedError[incompatible-call]
    base64.encode(123);
  });

  it('decodes', () => {
    const encoded = 'Zm9vIMKpIGJhciDwnYyGIGJheg==';
    const bytes = base64.decode(encoded);
    bytes.toLowerCase();

    // $FlowExpectedError[incompatible-call]
    base64.decode(123);
  });

  it('version', () => {
    base64.version.toLowerCase();

    // $FlowExpectedError[prop-missing]
    base64.version.toFixed(2);
  });

  it('exports nothing else', () => {
    // $FlowExpectedError[prop-missing]
    base64.foo;
  });
});
