// @flow

import { describe, it } from 'flow-typed-test';

import {
  createBrowserHistory,
  createMemoryHistory,
  createHashHistory,
  createPath,
  parsePath,
  locationsAreEqual,
  createLocation,
} from 'history';

// browser history

describe('browser history', () => {
  it('should allow to get location fields', () => {
    const history = createBrowserHistory({
      basename: '',
      forceRefresh: false,
      keyLength: 6,
    });

    const pathname: string = history.location.pathname;
  });

  it('should allow to get browser and memory specific location fields', () => {
    const history = createBrowserHistory({
      basename: '',
      forceRefresh: false,
      keyLength: 6,
    });

    const key: string = history.location.key;
    const state: { ... } = history.location.state;
  });

  it('should not allow to get field which is absent in the history', () => {
    const history = createBrowserHistory({
      basename: '',
      forceRefresh: false,
      keyLength: 6,
    });

    // $FlowExpectedError[prop-missing]
    history.foo;
  });

  describe('#push', () => {
    it('should allow to use string as first argument', () => {
      const history = createBrowserHistory({
        basename: '',
        forceRefresh: false,
        keyLength: 6,
      });

      history.push('/');
    });

    it('should allow to use partial location as first argument', () => {
      const history = createBrowserHistory({
        basename: '',
        forceRefresh: false,
        keyLength: 6,
      });

      history.push({
        pathname: '/',
        state: { a: 1 },
      });
    });
  });

  describe('#replace', () => {
    it('should allow to use string as first argument', () => {
      const history = createBrowserHistory({
        basename: '',
        forceRefresh: false,
        keyLength: 6,
      });

      history.replace('/');
    });

    it('should allow to use partial location as first argument', () => {
      const history = createBrowserHistory({
        basename: '',
        forceRefresh: false,
        keyLength: 6,
      });

      history.replace({
        pathname: '/',
        state: { a: 1 },
      });
    });
  });
});

describe('memory history', () => {
  it('should allow to get location fields', () => {
    const history = createMemoryHistory({
      initialEntries: ['/'],
      initialIndex: 0,
      keyLength: 6,
    });

    const pathname: string = history.location.pathname;
  });

  it('should allow to get browser and memory specific location fields', () => {
    const history = createMemoryHistory({
      initialEntries: ['/'],
      initialIndex: 0,
      keyLength: 6,
    });

    const key: string = history.location.key;
    const state: { ... } = history.location.state;
  });

  it('should not allow to get field which is absent in the history', () => {
    const history = createMemoryHistory({
      initialEntries: ['/'],
      initialIndex: 0,
      keyLength: 6,
    });

    // $FlowExpectedError[prop-missing]
    history.foo;
  });

  describe('#push', () => {
    it('should allow to use string as first argument', () => {
      const history = createMemoryHistory({
        initialEntries: ['/'],
        initialIndex: 0,
        keyLength: 6,
      });

      history.push('/');
    });

    it('should allow to use partial location as first argument', () => {
      const history = createMemoryHistory({
        initialEntries: ['/'],
        initialIndex: 0,
        keyLength: 6,
      });

      history.push({
        pathname: '/',
        state: { a: 1 },
      });
    });
  });

  describe('#replace', () => {
    it('should allow to use string as first argument', () => {
      const history = createMemoryHistory({
        initialEntries: ['/'],
        initialIndex: 0,
        keyLength: 6,
      });

      history.replace('/');
    });

    it('should allow to use partial location as first argument', () => {
      const history = createMemoryHistory({
        initialEntries: ['/'],
        initialIndex: 0,
        keyLength: 6,
      });

      history.replace({
        pathname: '/',
        state: { a: 1 },
      });
    });
  });
});

describe('hash history', () => {
  it('should allow to get location fields', () => {
    const history = createHashHistory({
      basename: '',
      hashType: 'slash',
    });

    const pathname: string = history.location.pathname;
  });

  it('should not allow to get browser and memory specific location fields', () => {
    const history = createHashHistory({
      basename: '',
      hashType: 'slash',
    });

    // $FlowExpectedError[incompatible-type]
    const key: string = history.location.key;
    // $FlowExpectedError[incompatible-type]
    const state: { ... } = history.location.state;
  });

  it('should not allow to get field which is absent in the history', () => {
    const history = createHashHistory({
      basename: '',
      hashType: 'slash',
    });

    // $FlowExpectedError[prop-missing]
    history.foo;
  });

  describe('#push', () => {
    it('should allow to use string as first argument', () => {
      const history = createHashHistory({
        basename: '',
        hashType: 'slash',
      });

      history.push('/');
    });

    it('should allow to use partial location as first argument', () => {
      const history = createHashHistory({
        basename: '',
        hashType: 'slash',
      });

      history.push({
        search: '?a=1',
      });
    });
  });

  describe('#replace', () => {
    it('should allow to use string as first argument', () => {
      const history = createHashHistory({
        basename: '',
        hashType: 'slash',
      });

      history.replace('/');
    });

    it('should allow to use partial location as first argument', () => {
      const history = createHashHistory({
        basename: '',
        hashType: 'slash',
      });

      history.push({
        search: '?a=1',
      });
    });
  });
});

describe('create path', () => {
  it('should allow to use Location argument', () => {
    const path = createPath({
      pathname: '/test',
      search: '?a=1',
      hash: 'slug',
    });

    const key: string = path;
    // $FlowExpectedError[incompatible-type]
    const state: { ... } = path;
  });

  it('should not allow to accept void', () => {
    // $FlowExpectedError[incompatible-shape]
    const path = createPath();

    const key: string = path;
  });
});

describe('parse path', () => {
  it('should allow to use string argument', () => {
    const location = parsePath('/test?query#hash');

    const state: { ... } = location;
    // $FlowExpectedError[incompatible-type]
    const key: string = location;
  });

  it('should not allow to accept void', () => {
    // $FlowExpectedError[incompatible-call]
    const location = parsePath();

    const state: { ... } = location;
  });
});

describe('create location', () => {
  it('should allow to use string argument', () => {
    const location = createLocation('/test?query#hash');

    const state: { ... } = location;
    // $FlowExpectedError[incompatible-type]
    const key: string = location;
  });

  it('should allow to use partial location as first argument', () => {
    const location = createLocation({
      pathname: '/test',
      search: '?a=1',
      hash: 'slug',
    });

    const state: { ... } = location;
    // $FlowExpectedError[incompatible-type]
    const key: string = location;
  });
});

describe('locations are equal', () => {
  it('should allow to use partial location as arguments and return boolean', () => {
    const isEqual = locationsAreEqual(
      { pathname: '/test' },
      { pathname: '/test', search: '?a=1' }
    );

    const bool: boolean = isEqual;
    // $FlowExpectedError[incompatible-type]
    const str: string = isEqual;
  });
});
