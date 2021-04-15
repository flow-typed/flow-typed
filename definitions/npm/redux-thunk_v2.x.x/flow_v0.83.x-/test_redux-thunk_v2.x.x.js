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
    // Ideally the following should be [props-missing] code but intersection type causes [incompatible-call] code instead
    // $FlowExpectedError[incompatible-call] Only accepts 1 arg
    thunk.withExtraArgument();
    // Ideally the following should be [extra-arg] code but intersection type causes [incompatible-call] code instead
    // $FlowExpectedError[incompatible-call] Only accepts 1 arg
    thunk.withExtraArgument('', '');
  });

  it('thunk does not have extra random properties', () => {
    // $FlowExpectedError[incompatible-call]
    thunk.withSomeMoreArguments();
  });
});
