// @flow
import ls from 'local-storage-es5';

ls.set('test', 'test');

// $ExpectError string only key
ls.set(123, 'test');

// $ExpectError too few arguments
ls.set('test');

// ---

ls.get('test');

// $ExpectError string only key
ls.get(123);

// ---

ls.remove('test');

// $ExpectError string only key
ls.remove(123);

// ---

ls.clear('test');

// $ExpectError string only key
ls.clear(123);

// ---

ls.backend();
ls.backend(window.localStorage);
ls.backend(window.sessionStorage);

// $ExpectError wrong arg type
ls.backend('test');

// ---

const func = (value: any, old: any, url: string) => {};

ls.on('test', func);
ls.off('test', func);
