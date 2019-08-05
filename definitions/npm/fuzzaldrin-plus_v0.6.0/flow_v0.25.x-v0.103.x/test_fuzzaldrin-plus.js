// @flow

import { describe, it } from 'flow-typed-test';

import fuzzaldrinPlus from 'fuzzaldrin-plus';
import type { Options, Query } from 'fuzzaldrin-plus';

describe('fuzzaldrin-plus@0.6.0', () => {
  it('generic correct usage', () => {
    fuzzaldrinPlus.score('Maybe', 'me');
    fuzzaldrinPlus.match('Maybe', 'me');
    fuzzaldrinPlus.wrap('Maybe', 'me');
    fuzzaldrinPlus.prepareQuery('me');

    const query: Query = fuzzaldrinPlus.prepareQuery('me');

    fuzzaldrinPlus.score('Maybe', 'me', undefined);
    fuzzaldrinPlus.score('Maybe', 'me', null);
    fuzzaldrinPlus.score('Maybe', 'me', {});
    fuzzaldrinPlus.score('Maybe', 'me', { allowErrors: true });

    const options: Options = { allowErrors: true };
  });

  it('generic wrong usage', () => {
    // $ExpectError
    fuzzaldrinPlus.score();
    // $ExpectError
    fuzzaldrinPlus.match();
    // $ExpectError
    fuzzaldrinPlus.wrap();
    // $ExpectError
    fuzzaldrinPlus.prepareQuery();
    // $ExpectError
    fuzzaldrinPlus.score('Maybe', 'me', true);
    // $ExpectError
    fuzzaldrinPlus.score('Maybe', 'me', 'string');
    // $ExpectError
    fuzzaldrinPlus.score('Maybe', 'me', 1);

    const items = ['Maybe', 'Me'];
    // $ExpectError
    fuzzaldrinPlus.score(items, 'me');
    // $ExpectError
    fuzzaldrinPlus.match(items, 'me');
    // $ExpectError
    fuzzaldrinPlus.match(items, 'me', {
      unknownProperty: true,
      allowErrors: true,
    });
    // $ExpectError
    fuzzaldrinPlus.wrap(items, 'me');
    // $ExpectError
    fuzzaldrinPlus.prepareQuery();

    // $ExpectError
    const options: Options = { allowErrors: 'not a boolean' };
  });

  it('filter proper usage', () => {
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me');
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', undefined);
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', null);
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {});
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', { allowErrors: true });
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', { key: 'key' });
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      preparedQuery: fuzzaldrinPlus.prepareQuery('me'),
    });
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      allowErrors: true,
      usePathScoring: true,
    });
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      allowErrors: true,
      usePathScoring: true,
      useExtensionBonus: true,
    });
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      allowErrors: true,
      usePathScoring: true,
      useExtensionBonus: true,
      pathSeparator: '/',
    });
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      allowErrors: true,
      usePathScoring: true,
      useExtensionBonus: true,
      pathSeparator: '\\',
      optCharRegEx: new RegExp(''),
    });
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      allowErrors: true,
      usePathScoring: true,
      useExtensionBonus: true,
      pathSeparator: '\\',
      optCharRegEx: new RegExp(''),
      wrap: {
        tagOpen: '<span>',
        tagClass: '',
        tagClose: '</span>',
      },
    });
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      allowErrors: true,
      usePathScoring: true,
      useExtensionBonus: true,
      pathSeparator: '\\',
      optCharRegEx: new RegExp(''),
      wrap: {
        tagOpen: '<span>',
        tagClass: '',
        tagClose: '</span>',
      },
      maxResults: 10,
    });
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      allowErrors: true,
      usePathScoring: true,
      useExtensionBonus: true,
      pathSeparator: '\\',
      optCharRegEx: new RegExp(''),
      wrap: {
        tagOpen: '<span>',
        tagClass: '',
        tagClose: '</span>',
      },
      maxResults: 10,
      maxInners: 10,
    });
    fuzzaldrinPlus.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
      allowErrors: true,
      usePathScoring: true,
      useExtensionBonus: true,
      pathSeparator: '\\',
      optCharRegEx: new RegExp(''),
      wrap: {
        tagOpen: '<span>',
        tagClass: '',
        tagClose: '</span>',
      },
      maxResults: 10,
      maxInners: 10,
      key: 'title',
    });
    fuzzaldrinPlus.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
      allowErrors: true,
      key: 'title',
    });
    fuzzaldrinPlus.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
      key: 'title',
    });
  });

  it('filter wrong usage', () => {
    // $ExpectError
    fuzzaldrinPlus.filter();
    // $ExpectError
    fuzzaldrinPlus.filter('not an array', 'query');
    // $ExpectError
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      allowErrors: 'not a boolean',
    });
    // $ExpectError
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', { key: true });
    // $ExpectError
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', { preparedQuery: {} });
    // $ExpectError
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      allowErrors: true,
      unknownProperty: true,
    });
    // $ExpectError
    fuzzaldrinPlus.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
      key: 1,
    });
    // $ExpectError
    fuzzaldrinPlus.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
      allowErrors: 'not a boolean',
      key: 1,
    });
    // $ExpectError
    fuzzaldrinPlus.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
      allowErrors: 'not a boolean',
      key: 'title',
    });
  });

  it('should fail when reusing options object between calls filter & others calls', () => {
    const items = ['Maybe', 'Me'];
    const query = 'me';
    const options = { usePathScoring: true };

    fuzzaldrinPlus.filter(items, query, options);
    // $ExpectError
    fuzzaldrinPlus.match(items[0], query, options);
  });
});
