// @flow
import * as history from 'history';

/* Trivial case */

// $ExpectError
history.foo();


/* history.createHistory() */
const historyNative = history.createHashHistory();
historyNative.go(1)
// $ExpectError
historyNative.go('')
historyNative.goBack()
historyNative.goForward()

// $ExpectError
historyNative.foo

/* history.createMemoryHistory() */
const historyMemory = history.createMemoryHistory();
historyMemory.go(1)
// $ExpectError
historyMemory.go('')
historyMemory.goBack()
historyMemory.goForward()

// $ExpectError
historyMemory.foo

/* history.createMemoryHistory() */
const historyHash = history.createHashHistory();
historyHash.go(1)
// $ExpectError
historyHash.go('')
historyHash.goBack()
historyHash.goForward()

// $ExpectError
historyHash.foo


/* history.Location */
const location = historyNative.location;
location.pathname;
location.search;
location.query;
location.state;
location.action;
location.key;

// $ExpectError
location.foo
