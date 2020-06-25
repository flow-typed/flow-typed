// @flow
import loglevel from 'loglevel';

/* Trivial case */

// $FlowExpectedError
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
// $FlowExpectedError
loglevel.setLevel('foo');
// $FlowExpectedError
loglevel.setLevel(6);


/* loglevel.getLogger() */
loglevel.getLogger('toto');
// $FlowExpectedError
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
