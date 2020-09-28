// @flow
import * as history from 'history';

/* Trivial case */

// $FlowExpectedError
history.foo();


/* history.createHistory() */
const historyNative = history.createHashHistory();
historyNative.go(1)
// $FlowExpectedError
historyNative.go('')
historyNative.goBack()
historyNative.goForward()

// $FlowExpectedError
historyNative.foo

/* history.createMemoryHistory() */
const historyMemory = history.createMemoryHistory();
historyMemory.go(1)
// $FlowExpectedError
historyMemory.go('')
historyMemory.goBack()
historyMemory.goForward()

// $FlowExpectedError
historyMemory.foo

/* history.createMemoryHistory() */
const historyHash = history.createHashHistory();
historyHash.go(1)
// $FlowExpectedError
historyHash.go('')
historyHash.goBack()
historyHash.goForward()

// $FlowExpectedError
historyHash.foo


/* history.Location */
const location = historyNative.location;
location.pathname;
location.search;
location.query;
location.state;
location.action;
location.key;

// $FlowExpectedError
location.foo
