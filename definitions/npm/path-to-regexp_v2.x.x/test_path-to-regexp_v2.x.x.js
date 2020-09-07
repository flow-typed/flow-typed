// @flow
import { describe, it } from 'flow-typed-test';
const pathToRegexp = require('path-to-regexp');

const { parse, compile, tokensToFunction, tokensToRegExp } = pathToRegexp;

describe('path-to-regexp', () => {
  const url = '/test/url/:with/param';
  const tokens = [
    '/test',
    '/url',
    {
      name: 'with',
      prefix: '/',
      delimiter: '/',
      optional: false,
      repeat: false,
      partial: false,
      pattern: '[^\\/]+?',
    },
    '/param',
  ];
  const badTokens = [
    '/test',
    '/url',
    {
      prefix: '/',
      delimiter: '/',
      optional: false,
      repeat: false,
      partial: false,
      pattern: '[^\\/]+?',
    },
    '/param',
  ];

  it('parse', () => {
    parse(url);
  });

  it('compile', () => {
    compile(url);
  });

  it('tokensToFunction', () => {
    tokensToFunction(tokens);

    // $FlowExpectedError
    tokensToFunction(badTokens);
  });

  it('tokensToRegExp', () => {
    tokensToRegExp(tokens);

    // $FlowExpectedError
    tokensToRegExp(badTokens);
  });

  describe('pathToRegexp', () => {
    it('should return regexp when call with one required argument', () => {
      const path = 'string';

      (pathToRegexp(path): RegExp);
    });

    it('should raises an error when call without argument', () => {
      // $FlowExpectedError: path is required argument
      pathToRegexp();
    });

    it('should raises an error when pass path with invalid type', () => {
      const path = true;

      // $FlowExpectedError: path must be `string` or `RegExp` or `Array<string or RegExp>`
      pathToRegexp(path);
    });
  });
});
