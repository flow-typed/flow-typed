// @flow
import { describe, it } from 'flow-typed-test';
import globToRegExp from 'glob-to-regexp';

describe('glob-to-regexp', () => {
  it('passes', () => {
    const re = globToRegExp('p*uck');
    re.test('pot luck');

    globToRegExp("*/www/{*.js,*.html}", {});
    globToRegExp("*/www/{*.js,*.html}", { extended: true });
    globToRegExp("*/www/{*.js,*.html}", { globstar: true });
    globToRegExp("*/www/{*.js,*.html}", { flags: 'test' });
  });

  it('fails', () => {
    // $FlowExpectedError[incompatible-call]
    globToRegExp();
    // $FlowExpectedError[incompatible-call]
    globToRegExp(123);
    // $FlowExpectedError[incompatible-call]
    globToRegExp('', '');
    // $FlowExpectedError[prop-missing]
    globToRegExp('', { foo: 'bar' });

    const re = globToRegExp('test');
    // $FlowExpectedError[prop-missing]
    re.foo();
  })
});
