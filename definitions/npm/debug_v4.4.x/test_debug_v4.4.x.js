// @flow

import rootDebug from 'debug';

const debug = rootDebug('test');

debug('Hello %s, hex: %h', 'World', 'hello world');
debug({a: 1, b: 2});
debug(new Error('error'));

// $FlowExpectedError[incompatible-call]
rootDebug();

debug();

rootDebug.log = console.log.bind(console);

const namespacesDisabled: string = rootDebug.disable();

if (!rootDebug.enabled(debug.namespace)) {
  rootDebug.enable(debug.namespace);
}

if (debug.enabled) {
  debug.log = console.log.bind(console);
}

const logSign = debug.extend('sign');
logSign('Hello %s, hex: %h', 'World', 'hello world');
