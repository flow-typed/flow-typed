// @flow
import { describe, test } from 'flow-typed-test';

const micromatch = require('micromatch');

describe('micromatch', () => {
  test('main', () => {
    (micromatch(['foo', 'bar', 'baz', 'qux'], ['f*', 'b*']): Array<string>);
    micromatch(['foo', 'bar', 'baz', 'qux'], 'test');

    // $FlowExpectedError[incompatible-cast]
    (micromatch(['foo', 'bar', 'baz', 'qux'], ['f*', 'b*']): string);
    // $FlowExpectedError[incompatible-call]
    micromatch('test', 'test');
    // $FlowExpectedError[incompatible-call]
    micromatch(['foo', 'bar', 'baz', 'qux']);
    // $FlowExpectedError[incompatible-call]
    micromatch(['foo', 'bar', 'baz', 'qux'], 1);
  });

  test('options', () => {
    micromatch([], 'test', {});
    micromatch([], 'test', {
      basename: true,
      bash: true,
      capture: true,
      contains: true,
      cwd: '',
      debug: true,
      dot: true,
      expandRange: (left, right, { basename }) => {
        left.toLowerCase();
        right.toLowerCase();
        return '';
      },
      failglob: true,
      fastpaths: true,
      flags: true,
      format: (returnedString) => {
        returnedString.toLowerCase();
        return '';
      },
      ignore: '',
      keepQuotes: true,
      literalBrackets: true,
      lookbehinds: true,
      matchBase: true,
      maxLength: 1,
      nobrace: true,
      nobracket: true,
      nocase: true,
      noext: true,
      noextglob: true,
      nonegate: true,
      noquantifiers: true,
      onIgnore: (item) => {
        item.glob.toLowerCase();
        item.regex.test('');
        item.input.toLowerCase();
        item.output.toLowerCase();
      },
      onMatch: (item) => {
        item.glob.toLowerCase();
        item.regex.test('');
        item.input.toLowerCase();
        item.output.toLowerCase();
      },
      onResult: (item) => {
        item.glob.toLowerCase();
        item.regex.test('');
        item.input.toLowerCase();
        item.output.toLowerCase();
      },
      posix: true,
      prepend: true,
      regex: true,
      strictBrackets: true,
      strictSlashes: true,
      unescape: true,
      windows: true,
    });

    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      basename: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      bash: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      capture: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      contains: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      cwd: 1,
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      debug: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      dot: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      expandRange: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      failglob: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      fastpaths: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      flags: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      format: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      ignore: 1,
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      keepQuotes: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      literalBrackets: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      lookbehinds: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      matchBase: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      maxLength: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      nobrace: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      nobracket: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      nocase: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      noext: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      noextglob: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      noglobstar: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      nonegate: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      noquantifiers: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      onIgnore: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      onMatch: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      onResult: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      posix: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      prepend: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      regex: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      strictBrackets: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      strictSlashes: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      unescape: '',
    });
    micromatch([], 'test', {
      // $FlowExpectedError[incompatible-call]
      windows: '',
    });
  });
});
