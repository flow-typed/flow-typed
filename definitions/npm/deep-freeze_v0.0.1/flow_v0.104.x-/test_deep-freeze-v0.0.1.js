// @flow

import deepFreeze from 'deep-freeze';

const obj: { foo: string, ... } = deepFreeze({foo: 'bar'});
const arr: Array<string> = deepFreeze(['foo', 'bar']);
const num: number = deepFreeze(42);

// $FlowExpectedError input type must match output type
const notObj: { foo: string, ... } = deepFreeze(['foo', 'bar']);

// $FlowExpectedError input type must match output type
const notArr: Array<string> = deepFreeze({foo: 'bar'});
