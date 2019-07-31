// @flow
import { describe, it } from 'flow-typed-test';
import createSagaMiddleware from 'redux-saga';

// Emulate redux
type DispatchAPI<A> = (action: A) => A;
type Dispatch<A: { type: string }> = DispatchAPI<A>;
type MiddlewareAPI<S, A, D = Dispatch<A>> = {
  dispatch: D,
  getState(): S,
};
type Middleware<S, A, D = Dispatch<A>> = (
  api: MiddlewareAPI<S, A, D>
) => (next: D) => D;
declare function applyMiddleware<S, A, D>(
  ...middlewares: Array<Middleware<S, A, D>>
): {};

describe('createSagaMiddleware', () => {
  it('works with redux applyMiddleware', () => {
    const sagaMiddleware = createSagaMiddleware();
    const enhancer = applyMiddleware(sagaMiddleware);
  });
});
