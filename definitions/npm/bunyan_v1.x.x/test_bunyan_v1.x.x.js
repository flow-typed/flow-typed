// @flow
import Bunyan from 'bunyan';
const logger = Bunyan.createLogger({ name: 'logger' });

logger.trace('Foobar');

const g: void = logger.trace('foobar');

logger.child({});

logger.trace({ err: new Error('type') }, 'messages');
const sf = logger.trace(new Error('ASDF'));
const t  = logger.trace(new Error('asdf'));

const s = logger.trace({});
const b: boolean = logger.trace();
logger.trace('foo', new Error('foo'));


logger.trace({ err: new Error('foobar') }, 'error');

// $ExpectError
logger.trace('error', { num: true });
