// @flow

import { describe, it } from 'flow-typed-test';

import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import createHashHistory from 'history/createHashHistory';

// browser history

describe('browser history', () => {
  it('should allow to get location fields', () => {
    const history = createBrowserHistory({
      basename: "",
      forceRefresh: false,
      keyLength: 6,
    })

    const pathname: string = history.location.pathname
  });

  it('should allow to get browser and memory specific location fields', () => {
    const history = createBrowserHistory({
      basename: "",
      forceRefresh: false,
      keyLength: 6,
    })

    const key: string = history.location.key
    const state: {} = history.location.state
  });

  it('should not allow to get field which is absent in the history', () => {
    const history = createBrowserHistory({
      basename: "",
      forceRefresh: false,
      keyLength: 6,
    })

    // $ExpectError
    history.foo
  });

  describe('#push', () => {
    it('should allow to use string as first argument', () => {
      const history = createBrowserHistory({
        basename: "",
        forceRefresh: false,
        keyLength: 6,
      })

      history.push("/")
    });

    it('should allow to use partial location as first argument', () => {
      const history = createBrowserHistory({
        basename: "",
        forceRefresh: false,
        keyLength: 6,
      })

      history.push({
        pathname: "/",
        state: { a: 1 },
      })
    });
  });

  describe('#replace', () => {
    it('should allow to use string as first argument', () => {
      const history = createBrowserHistory({
        basename: "",
        forceRefresh: false,
        keyLength: 6,
      })

      history.replace("/")
    });

    it('should allow to use partial location as first argument', () => {
      const history = createBrowserHistory({
        basename: "",
        forceRefresh: false,
        keyLength: 6,
      })

      history.replace({
        pathname: "/",
        state: { a: 1 },
      })
    });
  });
});

describe('memory history', () => {
  it('should allow to get location fields', () => {
    const history = createMemoryHistory({
      initialEntries: ["/"],
      initialIndex: 0,
      keyLength: 6,
    })

    const pathname: string = history.location.pathname
  });

  it('should allow to get browser and memory specific location fields', () => {
    const history = createMemoryHistory({
      initialEntries: ["/"],
      initialIndex: 0,
      keyLength: 6,
    })

    const key: string = history.location.key
    const state: {} = history.location.state
  });

  it('should not allow to get field which is absent in the history', () => {
    const history = createMemoryHistory({
      initialEntries: ["/"],
      initialIndex: 0,
      keyLength: 6,
    })

    // $ExpectError
    history.foo
  });

  describe('#push', () => {
    it('should allow to use string as first argument', () => {
      const history = createMemoryHistory({
        initialEntries: ["/"],
        initialIndex: 0,
        keyLength: 6,
      })

      history.push("/")
    });

    it('should allow to use partial location as first argument', () => {
      const history = createMemoryHistory({
        initialEntries: ["/"],
        initialIndex: 0,
        keyLength: 6,
      })

      history.push({
        pathname: "/",
        state: { a: 1 },
      })
    });
  });

  describe('#replace', () => {
    it('should allow to use string as first argument', () => {
      const history = createMemoryHistory({
        initialEntries: ["/"],
        initialIndex: 0,
        keyLength: 6,
      })

      history.replace("/")
    });

    it('should allow to use partial location as first argument', () => {
      const history = createMemoryHistory({
        initialEntries: ["/"],
        initialIndex: 0,
        keyLength: 6,
      })

      history.replace({
        pathname: "/",
        state: { a: 1 },
      })
    });
  });
});

describe('hash history', () => {
  it('should allow to get location fields', () => {
    const history = createHashHistory({
      basename: "",
      hashType: "slash",
    })

    const pathname: string = history.location.pathname
  });

  it('should not allow to get browser and memory specific location fields', () => {
    const history = createHashHistory({
      basename: "",
      hashType: "slash",
    })

    // $ExpectError
    const key: string = history.location.key
    // $ExpectError
    const state: {} = history.location.state
  });

  it('should not allow to get field which is absent in the history', () => {
    const history = createHashHistory({
      basename: "",
      hashType: "slash",
    })

    // $ExpectError
    history.foo
  });


  describe('#push', () => {
    it('should allow to use string as first argument', () => {
      const history = createHashHistory({
        basename: "",
        hashType: "slash",
      })

      history.push("/")
    });

    it('should allow to use partial location as first argument', () => {
      const history = createHashHistory({
        basename: "",
        hashType: "slash",
      })

      history.push({
        search: "?a=1",
      })
    });
  });

  describe('#replace', () => {
    it('should allow to use string as first argument', () => {
      const history = createHashHistory({
        basename: "",
        hashType: "slash",
      })

      history.replace("/")
    });

    it('should allow to use partial location as first argument', () => {
      const history = createHashHistory({
        basename: "",
        hashType: "slash",
      })

      history.push({
        search: "?a=1",
      })
    });
  });
});
