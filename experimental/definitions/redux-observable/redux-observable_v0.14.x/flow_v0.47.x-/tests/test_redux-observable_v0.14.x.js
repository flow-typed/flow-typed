// @flow
import type { Epic, EpicMiddleware } from 'redux-observable';
import { ActionsObservable, combineEpics, createEpicMiddleware } from 'redux-observable';

// Redux misc
type State = Array<number>;
type Action = { type: 'A' | 'B' };

/*
 * Epic type
 */
const epic1: Epic<State, Action, void> =
  (action$) =>
    action$.filter(action => action.type === 'A')
      .mapTo({ type: 'B' });
const epic2: Epic<State, Action, void | number> =
  (action$) =>
    action$.filter(action => action.type === 'B')
      .mapTo({ type: 'A' });
const epic3: Epic<State, Action, number> =
  (action$, store, num: number) =>
    action$.filter(action => action.type === 'B')
      .mapTo({ type: 'A' });
// $ExpectError
const epic4: Epic<State, Action, number> =
  (action$, store, num: number, more: number) => // Wrong number of parameters
    action$.filter(action => action.type === 'B')
      .mapTo({ type: 'A' });


/*
 * ActionsObservable class
 */

/*
 * ActionsObservable.of method
 */
const actionsObsOf1: ActionsObservable<Action> =
  ActionsObservable.of({ type: 'A' }, { type: 'A' }, { type: 'B' });
const actionsObsOf2: ActionsObservable<Action> =
  // $ExpectError
  ActionsObservable.of(1, 2, 3); // Wrong type of parameters

/*
 * ActionsObservable.from method
 */
const actionsObsFrom1: ActionsObservable<Action> =
  ActionsObservable.from([{ type: 'A' }, { type: 'A' }, { type: 'B' }]);
const actionsObsFrom2: ActionsObservable<Action> =
  // $ExpectError
  ActionsObservable.from([1, 2, 3]); // Wrong type of parameters

/*
 * new ActionsObservable(...).ofType method
 */
const epic5: Epic<State, Action, number> =
  (action$: ActionsObservable<Action>, store, num: number) =>
    action$.ofType('B')
      .mapTo({ type: 'A' });

/*
 * combineEpics function
 */
const epic6: Epic<State, Action, number> = combineEpics();
const epic7: Epic<State, Action, number> = combineEpics(epic2);
const epic8: Epic<State, Action, number> = combineEpics(epic2, epic3);
// $ExpectError
const epic9: Epic<State, Action, number> = combineEpics(epic1, epic2); // Wrong dependencies type on result
const epic10: Epic<State, Action, void> = combineEpics(epic1, epic2);

/*
 * createEpicMiddleware function
 */
const epicMiddleware1: EpicMiddleware<State, Action> = createEpicMiddleware(
  epic1
);
const epicMiddleware2: EpicMiddleware<State, Action> = createEpicMiddleware(
  epic2,
  {}
);
const epicMiddleware3: EpicMiddleware<State, Action> = createEpicMiddleware(
  epic3,
  {
      // $ExpectError
      adapter: 5 // Wrong type
  }
);

/*
 * EpicMiddleware type
 */
epicMiddleware1({
    getState: function () {
        return [];
    },
    dispatch: function (a: Action) {
        return a;
    }
})((a: Action) => a);
