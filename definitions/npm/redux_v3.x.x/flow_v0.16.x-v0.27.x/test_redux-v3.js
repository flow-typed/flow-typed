// @flow
import { createStore, applyMiddleware } from 'redux';

const middleware = applyMiddleware(() => d => d);
const store = createStore(() => ({}), {});
store.getState();
// $ExpectError
store.dispatc();
