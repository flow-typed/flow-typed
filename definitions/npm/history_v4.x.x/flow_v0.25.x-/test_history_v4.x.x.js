// @flow
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import createHashHistory from 'history/createHashHistory';

// browser history
{
  const history = createBrowserHistory({
    basename: "",
    forceRefresh: false,
    keyLength: 6,
  })

  const pathname: string = history.location.pathname
  // browser and memory specific
  const state: string = history.location.state

  // $ExpectError
  history.foo
}

// memory history
{
  const history = createMemoryHistory({
    initialEntries: ["/"],
    initialIndex: 0,
    keyLength: 6,
  })

  const pathname: string = history.location.pathname
  // browser and memory specific
  const state: string = history.location.state

  // $ExpectError
  history.foo
}

// hash history
{
  const history = createHashHistory({
    basename: "",
    hashType: "slash",
  })

  const pathname: string = history.location.pathname
  // $ExpectError
  const state: string = history.location.state

  // $ExpectError
  history.foo
}