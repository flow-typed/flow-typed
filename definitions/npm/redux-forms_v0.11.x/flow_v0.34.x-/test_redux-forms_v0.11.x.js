/* @flow */
import reducer from 'redux-forms';
import * as actions from 'redux-forms/actions';
import * as selectors from 'redux-forms/selectors';

import type { Action } from 'redux-forms/actions';


const field = {
  value: '',
  visited: false,
  touched: false,
  active: false,
  error: null,
  dirty: false,
};

// REDUCER
// =======

reducer(undefined, actions.addForm('test'));
reducer(undefined, actions.removeForm('test'));
reducer(undefined, actions.addField('test', 'id', field));
reducer(undefined, actions.removeField('test', 'id'));
reducer(undefined, actions.touchAll('test'));
reducer(undefined, actions.submitStart('test'));
reducer(undefined, actions.submitStop('test'));
reducer(undefined, actions.addArray('test', 'id'));
reducer(undefined, actions.removeArray('test', 'id'));
reducer(undefined, actions.arrayPush('test', 'id'));
reducer(undefined, actions.arrayPop('test', 'id'));
reducer(undefined, actions.arrayUnshift('test', 'id'));
reducer(undefined, actions.arrayShift('test', 'id'));
reducer(undefined, actions.arrayInsert('test', 'id', 0));
reducer(undefined, actions.arrayRemove('test', 'id', 0));
reducer(undefined, actions.arraySwap('test', 'id', 0, 1));
reducer(undefined, actions.arrayMove('test', 'id', 0, 1));
reducer(undefined, actions.fieldChange('test', 'id', 'kek', 'error', true));
reducer(undefined, actions.fieldFocus('test', 'id'));
reducer(undefined, actions.fieldBlur('test', 'id', 'kek', 'error', true));

// $ExpectError - invalid state
reducer({ something: 'bad' }, actions.addForm('test'));
// $ExpectError - invalid action
reducer(undefined, { type: 'lol' });

// ACTIONS
// =======

let action: ?Action;

action = actions.addForm('test');
action = actions.removeForm('test');
action = actions.addField('test', 'id', field);
action = actions.removeField('test', 'id');
action = actions.touchAll('test');
action = actions.submitStart('test');
action = actions.submitStop('test');
action = actions.addArray('test', 'id');
action = actions.removeArray('test', 'id');
action = actions.arrayPush('test', 'id');
action = actions.arrayPop('test', 'id');
action = actions.arrayUnshift('test', 'id');
action = actions.arrayShift('test', 'id');
action = actions.arrayInsert('test', 'id', 0);
action = actions.arrayRemove('test', 'id', 0);
action = actions.arraySwap('test', 'id', 0, 1);
action = actions.arrayMove('test', 'id', 0, 1);
action = actions.fieldChange('test', 'id', 'kek', 'error', true);
action = actions.fieldFocus('test', 'id');
action = actions.fieldBlur('test', 'id', 'kek', 'error', true);

// $ExpectError - invalid action
action = { type: 'lol' };

// SELECTORS
// =========

const state = {
  reduxForms: {},
};

selectors.valueSelector('test', state);
selectors.errorSelector('test', state);
selectors.isValid('test', state);
selectors.isTouched('test', state);
selectors.isDirty('test', state);
selectors.isSubmitting('test', state);

// $ExpectError - invalid state
selectors.valueSelector('test', {});
// $ExpectError - invalid state
selectors.errorSelector('test', {});
// $ExpectError - invalid state
selectors.isValid('test', {});
// $ExpectError - invalid state
selectors.isTouched('test', {});
// $ExpectError - invalid state
selectors.isDirty('test', {});
// $ExpectError - invalid state
selectors.isSubmitting('test', {});

let num: number;

// $ExpectError - invalid return value
num = selectors.valueSelector('test', state);
// $ExpectError - invalid return value
num = selectors.errorSelector('test', state);
// $ExpectError - invalid return value
num = selectors.isValid('test', state);
// $ExpectError - invalid return value
num = selectors.isTouched('test', state);
// $ExpectError - invalid return value
num = selectors.isDirty('test', state);
// $ExpectError - invalid return value
num = selectors.isSubmitting('test', state);
