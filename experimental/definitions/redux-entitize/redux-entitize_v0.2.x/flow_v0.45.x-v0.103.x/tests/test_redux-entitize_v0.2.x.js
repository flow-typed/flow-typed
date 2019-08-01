// @flow

import {
  createEntitiesReducer,
  updateEntityAction,
  updateEntitiesAction,
  selectEntity,
  selectEntities
} from 'redux-entitize';

const reducer = createEntitiesReducer({});

const action1 = {};
const action2 = updateEntityAction('users', {});
const action3 = updateEntitiesAction('users', [{}, {}]);

const state1 = {};
const state2 = reducer(state1, action1);
const state3 = reducer(state1, action2);
const state4 = reducer(state1, action3);

selectEntity(state4, 'users', 'id123');
selectEntities(state4, 'users');
selectEntities(state4, 'users', [ 'id123', 'id456' ]);

// $ExpectError
createEntitiesReducer();
// $ExpectError
createEntitiesReducer(1);
// $ExpectError (state should be the combined state with an `entities`-sub-state)
selectEntities({}, 'users');