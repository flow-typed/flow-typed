// @flow
import { connect, Provider } from 'react-redux';

// $ExpectError
const A = <Provider />;

const empty = () => {};
const store = { subscribe: empty, dispatch: empty, getState: empty };
const B = <Provider store={store}><div>hello</div></Provider>;
