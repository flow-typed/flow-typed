// @flow
import ls from 'local-storage-es5';

const isSet: boolean = ls.set('test', 'test');

// $FlowExpectedError cannot parse to anything not boolean
const isNotSet: number = ls.set('test', 'test');

// $FlowExpectedError string only key
ls.set(123, 'test');

// $FlowExpectedError too few arguments
ls.set('test');

// ---

ls.get('test');

// $FlowExpectedError string only key
ls.get(123);

// ---

ls.remove('test');

// $FlowExpectedError string only key
ls.remove(123);

// ---

ls.clear('test');

// $FlowExpectedError string only key
ls.clear(123);

// ---

ls.backend();
ls.backend(window.localStorage);
ls.backend(window.sessionStorage);

// $FlowExpectedError wrong arg type
ls.backend('test');

// ---

const func = (value: any, old: any, url: string) => {};

ls.on('test', func);
ls.off('test', func);
