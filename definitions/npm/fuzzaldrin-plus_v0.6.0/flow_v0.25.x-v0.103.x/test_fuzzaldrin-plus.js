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
    // $FlowExpectedError
    fuzzaldrinPlus.score();
    // $FlowExpectedError
    fuzzaldrinPlus.match();
    // $FlowExpectedError
    fuzzaldrinPlus.wrap();
    // $FlowExpectedError
    fuzzaldrinPlus.prepareQuery();
    // $FlowExpectedError
    fuzzaldrinPlus.score('Maybe', 'me', true);
    // $FlowExpectedError
    fuzzaldrinPlus.score('Maybe', 'me', 'string');
    // $FlowExpectedError
    fuzzaldrinPlus.score('Maybe', 'me', 1);

    const items = ['Maybe', 'Me'];
    // $FlowExpectedError
    fuzzaldrinPlus.score(items, 'me');
    // $FlowExpectedError
    fuzzaldrinPlus.match(items, 'me');
    // $FlowExpectedError
    fuzzaldrinPlus.match(items, 'me', {
      unknownProperty: true,
      allowErrors: true,
    });
    // $FlowExpectedError
    fuzzaldrinPlus.wrap(items, 'me');
    // $FlowExpectedError
    fuzzaldrinPlus.prepareQuery();

    // $FlowExpectedError
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
    // $FlowExpectedError
    fuzzaldrinPlus.filter();
    // $FlowExpectedError
    fuzzaldrinPlus.filter('not an array', 'query');
    // $FlowExpectedError
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      allowErrors: 'not a boolean',
    });
    // $FlowExpectedError
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', { key: true });
    // $FlowExpectedError
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', { preparedQuery: {} });
    // $FlowExpectedError
    fuzzaldrinPlus.filter(['Maybe', 'Me'], 'me', {
      allowErrors: true,
      unknownProperty: true,
    });
    // $FlowExpectedError
    fuzzaldrinPlus.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
      key: 1,
    });
    // $FlowExpectedError
    fuzzaldrinPlus.filter([{ title: 'Maybe' }, { title: 'Me' }], 'me', {
      allowErrors: 'not a boolean',
      key: 1,
    });
    // $FlowExpectedError
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
    // $FlowExpectedError
    fuzzaldrinPlus.match(items[0], query, options);
  });
});
