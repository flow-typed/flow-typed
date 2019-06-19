// @flow

import { describe, it } from 'flow-typed-test';
import fs from 'fs';

const VError = require('verror');
const SError = require('verror').SError;
const WError = require('verror').WError;
const MultiError = require('verror').MultiError;

import type { Info } from 'verror';

// import { VError, SError, WError, MultiError, type Info } from 'verror';

let filename = '/nonexistent';
let error = new Error();
let options = {
  name: '',
  cause: error,
  strict: true,
  info: {
    errno: '',
  },
  constructorOpt: () => {},
};

describe('VError constructor', () => {
  new VError();
  new VError('');
  new VError('', '');
  new VError(options);
  new VError(options, '');
  new VError(options, '', '');
  new VError(error);
  new VError(error, '');
  new VError(error, '', '');
  // $ExpectError
  new VError(() => {});
});

describe('VError Function', () => {
  VError();
  VError('');
  VError('', '');
  VError(options);
  VError(options, '');
  VError(options, '', '');
  VError(error);
  VError(error, '');
  VError(error, '', '');
  // $ExpectError
  VError(() => {});
});

describe('SError constructor', () => {
  new SError();
  new SError('');
  new SError('', '');
  new SError(options);
  new SError(options, '');
  new SError(options, '', '');
  new SError(error);
  new SError(error, '');
  new SError(error, '', '');
  // $ExpectError
  new SError(() => {});
});

describe('SError Function', () => {
  SError();
  SError('');
  SError('', '');
  SError(options);
  SError(options, '');
  SError(options, '', '');
  SError(error);
  SError(error, '');
  SError(error, '', '');
  // $ExpectError
  SError(() => {});
});

describe('WError constructor', () => {
  new WError();
  new WError('');
  new WError('', '');
  new WError(options);
  new WError(options, '');
  new WError(options, '', '');
  new WError(error);
  new WError(error, '');
  new WError(error, '', '');
  // $ExpectError
  new WError(() => {});
});

describe('WError Function', () => {
  WError();
  WError('');
  WError('', '');
  WError(options);
  WError(options, '');
  WError(options, '', '');
  WError(error);
  WError(error, '');
  WError(error, '', '');
  // $ExpectError
  WError(() => {});
});

describe('MultiError constructor', () => {
  it('should require an Array of errors as parameter', () => {
    new MultiError([error]);
    // $ExpectError
    new MultiError();
    // $ExpectError
    new MultiError('');
  });
});

describe('VError', () => {
  fs.stat(filename, err1 => {
    if (err1) {
      let err2 = new VError(err1, 'stat "%s" failed', filename);
      let cause = err2.cause();

      (err2.message: string);

      if (cause instanceof Error) {
        (cause.message: string);
      }
    }
  });
});

describe('VError varargs', () => {
  let opname = 'read';
  let err = new VError('"%s" operation failed', opname);

  (err.message: string);
  (err.stack: string);
});

describe('VError fullStack', () => {
  let err1 = new VError('something bad happened');
  let err2 = new VError(err1, 'something really bad happened here');

  (VError.fullStack(err2): string);
});

describe('VError info', () => {
  let err1 = new VError('something bad happened');
  let err2 = new VError(
    {
      name: 'ConnectionError',
      cause: err1,
      info: {
        errno: 'ECONNREFUSED',
        remote_ip: '127.0.0.1',
        port: 215,
      },
    },
    'failed to connect to "%s:%d"',
    '127.0.0.1',
    215
  );

  (err2.message: string);
  (err2.name: string);
  (VError.info(err2): Info);
  (err2.stack: string);

  let err3 = new VError(
    {
      name: 'RequestError',
      cause: err2,
      info: {
        errno: 'EBADREQUEST',
      },
    },
    'request failed'
  );

  (err3.message: string);
  (err3.name: string);
  (VError.info(err3): Info);
  (err3.stack: string);
});

describe('MultiError', () => {
  let error = new MultiError([new Error(''), new Error('')]);

  error.errors().forEach(err => {
    (err: Error);
  });
});

describe('WError', () => {
  fs.stat(filename, err1 => {
    if (err1) {
      let err2 = new WError(err1, 'failed to stat "%s"', filename);
      let err3 = new WError(err2, 'failed to handle request');

      (err3.message: string);
      (err3.toString(): string);
      (err3.stack: string);
    }
  });
});
