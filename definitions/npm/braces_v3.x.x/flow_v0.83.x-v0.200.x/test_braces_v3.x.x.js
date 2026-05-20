// @flow
import { describe, test } from 'flow-typed-test';
import braces from 'braces';

describe('braces', () => {
  test('braces', () => {
    (braces(['{01..05}', '{a..e}']): Array<string>);
    braces('a/{x,y,z}/b');
    braces(['{01..05}', '{a..e}'], { expand: true });

    // $FlowExpectedError[incompatible-cast]
    (braces(['{01..05}', '{a..e}']): string);
  });

  test('options', () => {
    braces('', {});

    braces('', { maxLength: 1 });
    // $FlowExpectedError[incompatible-call]
    braces('', { maxLength: '' });

    braces('', { expand: true });
    // $FlowExpectedError[incompatible-call]
    braces('', { expand: '' });

    braces('', { nodupes: true });
    // $FlowExpectedError[incompatible-call]
    braces('', { nodupes: '' });

    braces('', { rangeLimit: 1 });
    // $FlowExpectedError[incompatible-call]
    braces('', { rangeLimit: '' });

    braces('', { transform: (a) => a.toLowerCase() });
    // $FlowExpectedError[incompatible-call]
    braces('', { transform: (a) => 1 });
    // $FlowExpectedError[incompatible-call]
    braces('', { transform: '' });

    braces('', { quantifiers: true });
    // $FlowExpectedError[incompatible-call]
    braces('', { quantifiers: '' });

    braces('', { unescape: true });
    // $FlowExpectedError[incompatible-call]
    braces('', { unescape: '' });

    // $FlowExpectedError[prop-missing]
    braces('', { foo: 'bar' });
  });

  test('expand property', () => {
    (braces.expand('{01..10}'): Array<string>);

    // $FlowExpectedError[incompatible-cast]
    (braces.expand('{01..10}'): string);
  });
});
