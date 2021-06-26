// @flow
import ls from 'local-storage';

const isSet: boolean = ls.set('test', 'test');

// $FlowExpectedError[incompatible-type] cannot parse to anything not boolean
const isNotSet: number = ls.set('test', 'test');

// $FlowExpectedError[incompatible-call] string only key
ls.set(123, 'test');

// $FlowExpectedError[incompatible-call] too few arguments
ls.set('test');

// ---

ls.get('test');

// $FlowExpectedError[incompatible-call] string only key
ls.get(123);

// ---

ls.remove('test');

// $FlowExpectedError[incompatible-call] string only key
ls.remove(123);

// ---

ls.clear('test');

// $FlowExpectedError[incompatible-call] string only key
ls.clear(123);

// ---

ls.backend();
ls.backend(window.localStorage);
ls.backend(window.sessionStorage);

// $FlowExpectedError[incompatible-call] wrong arg type
ls.backend('test');

// ---

const func = (value: any, old: any, url: string) => {};

ls.on('test', func);
ls.off('test', func);
