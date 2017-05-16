// @flow
import Error from 'es6-error';

new Error();
new Error('Ooups!');

// $ExpectError
new Error([1,2,3]);

class CustomError extends Error {
  customProperty: string = '';
}

const e = new CustomError();

e.name;
e.message;
e.stack;

e.customProperty;

// $ExpectError
e.wut;
