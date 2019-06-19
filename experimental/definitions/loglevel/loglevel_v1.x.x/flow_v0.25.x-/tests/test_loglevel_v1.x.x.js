// @flow
import loglevel from 'loglevel';

/* Trivial case */

// $ExpectError
loglevel.foo();

loglevel.noConflict();

loglevel.getLevel();

loglevel.enableAll();

loglevel.disableAll();


/* loglevel.levels */
loglevel.levels.TRACE;
loglevel.levels.DEBUG;
loglevel.levels.INFO;
loglevel.levels.WARN;
loglevel.levels.ERROR;

/* loglevel.setLevel() */

loglevel.setLevel('trace');
loglevel.setLevel(1);
// $ExpectError
loglevel.setLevel('foo');
// $ExpectError
loglevel.setLevel(6);


/* loglevel.getLogger() */
loglevel.getLogger('toto');
// $ExpectError
loglevel.getLogger({});

/* loglevel.debug() */
loglevel.debug(null, 'foo', 1, {});

/* loglevel.trace() */
loglevel.trace(null, 'foo', 1, {});

/* loglevel.info() */
loglevel.info(null, 'foo', 1, {});

/* loglevel.warn() */
loglevel.warn(null, 'foo', 1, {});

/* loglevel.error() */
loglevel.error(null, 'foo', 1, {});
