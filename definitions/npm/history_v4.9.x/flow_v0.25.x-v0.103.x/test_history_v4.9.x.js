// @flow

import { describe, it } from 'flow-typed-test';

import {createBrowserHistory} from 'history';
import {createMemoryHistory} from 'history';
import {createHashHistory} from 'history';
import {createPath} from 'history';
import {parsePath} from 'history';

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

    const key: ?string = history.location.key
    const state: ?{} = history.location.state
  })

  it('should only allow proper arguments to history.listen and history.block', () => {
    const history = createBrowserHistory({})

    const callback = history.listen((loc, action) => {})
    const returnValue: void = callback()

    history.block((loc, action) => {})
    history.block((loc, action) => 'string')
    // $FlowExpectedError
    history.block((loc, action) => ({}))
  });

  it('should not allow to get field which is absent in the history', () => {
    const history = createBrowserHistory({
      basename: "",
      forceRefresh: false,
      keyLength: 6,
    })

    // $FlowExpectedError
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

    const key: ?string = history.location.key
    const state: ?{} = history.location.state
  });

  it('should only allow proper arguments to history.listen and history.block', () => {
    const history = createMemoryHistory({})

    const callback = history.listen((loc, action) => {})
    const returnValue: void = callback()

    history.block((loc, action) => {})
    history.block((loc, action) => 'string')
    // $FlowExpectedError
    history.block((loc, action) => ({}))
  });

  it('should not allow to get field which is absent in the history', () => {
    const history = createMemoryHistory({
      initialEntries: ["/"],
      initialIndex: 0,
      keyLength: 6,
    })

    // $FlowExpectedError
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

    // $FlowExpectedError
    const key: string = history.location.key
    // $FlowExpectedError
    const state: {} = history.location.state
  });

  it('should only allow proper arguments to history.listen and history.block', () => {
    const history = createHashHistory({ hashType: 'slash' })

    const callback = history.listen((loc, action) => {})
    const returnValue: void = callback()

    history.block((loc, action) => {})
    history.block((loc, action) => 'string')
    // $FlowExpectedError
    history.block((loc, action) => ({}))
  });

  it('should not allow to get field which is absent in the history', () => {
    const history = createHashHistory({
      basename: "",
      hashType: "slash",
    })

    // $FlowExpectedError
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

describe('create path', () => {
  it('should allow to use Location argument', () => {
    const path = createPath({
      pathname: '/test',
      search: '?a=1',
      hash: 'slug',
    })

    const key: string = path
    // $FlowExpectedError
    const state: {} = path
  });

  it('should not allow to accept void', () => {
    // $FlowExpectedError
    const path = createPath()

    const key: string = path
  });
});

describe('parse path', () => {
  it('should allow to use string argument', () => {
    const location = parsePath('/test?query#hash')

    const state: {} = location
    // $FlowExpectedError
    const key: string = location
  });

  it('should not allow to accept void', () => {
    // $FlowExpectedError
    const location = parsePath()

    const state: {} = location
  });
});
