// @flow
import { describe, it } from 'flow-typed-test';
import { setupURLPolyfill, URL, URLSearchParams } from 'react-native-url-polyfill';
import auto from 'react-native-url-polyfill/auto';

describe('react-native-url-polyfill', () => {
  it('simple usage', () => {
    // It's an auto running script
    (auto: void);
  });

  it('flexible usage', () => {
    setupURLPolyfill();

    // $FlowExpectedError[extra-arg] takes no args
    setupURLPolyfill('test');
  });

  it('convenient usage', () => {
    const url = new URL('https://github.com');
    const searchParams = new URLSearchParams('q=GitHub');

    // Has the same methods as node `url`
    // $FlowExpectedError[extra-arg]
    url.toJSON('test');
    // $FlowExpectedError[incompatible-call]
    searchParams.delete();
  });
});
