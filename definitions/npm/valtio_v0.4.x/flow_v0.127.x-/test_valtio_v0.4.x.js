// @flow

import * as React from 'react';
import { describe, it } from 'flow-typed-test';
import { proxy, useProxy, subscribe, snapshot } from 'valtio';

type State = {| count: number, text: string |};

describe('valtio', () => {
  let state;

  it('init', () => {
    state = proxy({ count: 0, text: 'hello' });
    (state: State);

    // $FlowExpectedError[incompatible-call]
    const fail = proxy('hello');
    // $FlowExpectedError[prop-missing]
    // $FlowExpectedError[incompatible-use]
    ++fail.count;
  });

  it('should be able to mutate from everywhere', () => {
    setInterval(() => {
      ++state.count;
    }, 1000);
  });

  it('should work in React via useProxy', () => {
    function Counter() {
      const snapshot = useProxy(state);

      // $FlowExpectedError[incompatible-call]
      const fail = useProxy('hello');
      // $FlowExpectedError[prop-missing]
      // $FlowExpectedError[incompatible-use]
      ++fail.count;

      return (
        <div>
          {snapshot.count}
          <button onClick={() => ++state.count}>+1</button>
        </div>
      );
    }
  });

  it('should be able to subscribe from anywhere', () => {
    const unsubscribe = subscribe(state, () =>
      console.log(`state has changed to ${JSON.stringify(state)}`)
    );

    unsubscribe();

    subscribe(state.count, () =>
      console.log(`state.count has changed to ${state.count}`)
    );

    // $FlowExpectedError[incompatible-call]
    const fail = subscribe(state, 'hello');
    // $FlowExpectedError[incompatible-variance]
    (fail: { [string]: mixed, ... });
  });

  it('should be able retrieve a snapshot from anywhere', () => {
    const snap = snapshot(state);

    (snap: State);

    // $FlowExpectedError[incompatible-call]
    const fail = snapshot('hello');
    // $FlowExpectedError[incompatible-cast]
    (fail: { [string]: mixed, ... });
  });
});
