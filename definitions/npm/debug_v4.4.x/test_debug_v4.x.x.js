// @flow

import rootDebug from 'debug';

const debug = rootDebug('test');

debug('Hello %s, hex: %h', 'World', new Buffer('hello world'));
debug({a: 1, b: 2});
debug(new Error('error'));

// $FlowExpectedError
debug();

rootDebug.log = console.log.bind(console);
rootDebug.enable();
rootDebug.disable();
rootDebug.enable('test');
if (rootDebug.enabled) {
  rootDebug.disable('test');
}

debug.log = console.log.bind(console);
debug.enable();
debug.disable();
debug.enable('test');
if (debug.enabled) {
  debug.disable('test');
}

const logSign = debug.extend('sign');
logSign('Hello %s, hex: %h', 'World', new Buffer('hello world'));
