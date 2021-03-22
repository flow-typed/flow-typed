// @flow
import thunk from 'redux-thunk';
import { describe, it } from 'flow-typed-test';

type MiddlewareStub = (
  api: any
) => (next: any) => any;

describe('redux-thunk', () => {
  it('is a middleware', () => {
    (thunk: MiddlewareStub);
  });

  it('is a middleware with extra args', () => {
    (thunk.withExtraArgument(''): MiddlewareStub);
    // $FlowExpectedError[incompatible-call] Only accepts 1 arg
    (thunk.withExtraArgument('', ''));
  });

  it('thunk does not have extra random properties', () => {
    // $FlowExpectedError[incompatible-call]
    thunk.withSomeMoreArguments();
  });
});
