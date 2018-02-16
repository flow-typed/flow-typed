// @flow
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import createHashHistory from 'history/createHashHistory';

// browser history
const browser = createBrowserHistory({
  basename: "",
  forceRefresh: false,
  keyLength: 6,
})

browser.location.pathname
// browser and memory specific
browser.location.state

// $ExpectError
browser.foo

// memory history
const memory = createMemoryHistory({
  initialEntries: ["/"],
  initialIndex: 0,
  keyLength: 6,
})

memory.location.pathname
// browser and memory specific
memory.location.state

// $ExpectError
memory.foo

// hash history
const hash = createHashHistory({
  basename: "",
  hashType: "slash",
})

hash.location.pathname
// $ExpectError
hash.location.state

// $ExpectError
hash.foo