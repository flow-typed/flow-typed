// @flow

const inspector = require('inspector');

/* open */

inspector.open();
inspector.open(8080);
inspector.open(8080, 'http://localhost');
inspector.open(8080, 'http://localhost', true);

// $FlowExpectedError[incompatible-call]
inspector.open('8080'); // error
// $FlowExpectedError[incompatible-call]
inspector.open(8080, 127001); // error
// $FlowExpectedError[incompatible-call]
inspector.open(8080, 'http://localhost', 1000); // error

(inspector.open() : void);

// $FlowExpectedError[incompatible-cast]
(inspector.open() : string); // error

/* close */

inspector.close();

(inspector.close() : void);

// $FlowExpectedError[incompatible-cast]
(inspector.close() : string); // error

/* console */

(inspector.console : Object);

/* url */

inspector.url();

(inspector.url() : string | void);

// $FlowExpectedError[incompatible-cast]
(inspector.url() : number); // error

/* waitForDebugger */

inspector.waitForDebugger();

(inspector.waitForDebugger() : void);

// $FlowExpectedError[incompatible-cast]
(inspector.waitForDebugger() : number); // error

/* Session.connect */

var session = new inspector.Session();

session.connect();

(session.connect() : void);

// $FlowExpectedError[prop-missing]
(inspector.connect() : number); // error

/* Session.events */

session.on('foo', () => {});

/* Session.connectToMainThread */

session = new inspector.Session();

session.connectToMainThread();

(session.connectToMainThread() : void);

// $FlowExpectedError[prop-missing]
(inspector.connectToMainThread() : number); // error

/* Session.disconnect */

session = new inspector.Session();

session.disconnect();

(session.disconnect() : void);

// $FlowExpectedError[prop-missing]
(inspector.disconnect() : number); // error

/* Session.post */

session.post('Profiler.enable');
session.post('Runtime.evaluate', { expression: '2 + 2' });
session.post('Profiler.enable', null, () => {});

// $FlowExpectedError[incompatible-call]
session.post(); // error

(session.post('Profiler.enable') : void);

// $FlowExpectedError[incompatible-call]
// $FlowExpectedError[incompatible-cast]
(session.post() : string); // error
