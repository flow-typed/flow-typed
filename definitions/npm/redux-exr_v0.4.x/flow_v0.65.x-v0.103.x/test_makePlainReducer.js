/* @flow */
/* eslint-disable */

// TODO: follow https://github.com/facebook/flow/issues/5788

import {makePlainReducer} from "redux-exr";

type MyAction = {type: 'MY_ACTION1'} | {type: 'MY_ACTION2', payload: string} | {type: 'MY_ACTION3', payload: number};

const reducer = makePlainReducer('', (s, a) => (a.type === 'MY_ACTION' ? a.type : s));
reducer('foo', {type: 'MY_ACTION'});
// reducer(1, 1); // TODO: should return error (see issue above)
// reducer(); // TODO: should return error (see issue above)
// reducer(1); // TODO: should return error (see issue above)

const reducer2 = makePlainReducer('', (s, a) => {
  switch (a.type) {
    case 'MY_ACTION1': return `${s} + ${a.type}`;
    case 'MY_ACTION2': return `${s} - ${a.type}`;
    case 'MY_ACTION3': return `${s} = ${a.type}`;
    default: break;
  }
  return s;
});
// TODO
// reducer2(undefined, {type: 'MY_ACTION1'});
reducer2('', {type: 'MY_ACTION1'});
// reducer2(1, {type: 'MY_ACTION1'}); // TODO
reducer2('', {type: 'DUMMY_ACTION'});
