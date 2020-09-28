// @flow
import * as history from 'history';

/* Trivial case */

// $FlowExpectedError[prop-missing]
history.foo();


/* history.createHistory() */
const historyNative = history.createHashHistory();
historyNative.go(1)
// $FlowExpectedError[incompatible-call]
historyNative.go('')
historyNative.goBack()
historyNative.goForward()

// $FlowExpectedError[prop-missing]
historyNative.foo

/* history.createMemoryHistory() */
const historyMemory = history.createMemoryHistory();
historyMemory.go(1)
// $FlowExpectedError[incompatible-call]
historyMemory.go('')
historyMemory.goBack()
historyMemory.goForward()

// $FlowExpectedError[incompatible-use]
historyMemory.foo

/* history.createMemoryHistory() */
const historyHash = history.createHashHistory();
historyHash.go(1)
// $FlowExpectedError[incompatible-call]
historyHash.go('')
historyHash.goBack()
historyHash.goForward()

// $FlowExpectedError[prop-missing]
historyHash.foo


/* history.Location */
const location = historyNative.location;
location.pathname;
location.search;
location.query;
location.state;
location.action;
location.key;

// $FlowExpectedError[prop-missing]
location.foo
