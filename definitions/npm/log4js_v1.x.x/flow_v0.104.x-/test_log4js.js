import log4js from 'log4js';

log4js.configure({
  appenders: [
    {type: 'file', filename: '/tmp/test.log'},
  ],
  levels: {'category': 'error'},
});

log4js.configure('test.json', {});

// $ExpectError
log4js.configure({
  appenders: [{}],
});

log4js.getLogger().log('test');
log4js.getLogger('test').error('test', 'test');

// $ExpectError
log4js.getLogger('test').test('test');

// $ExpectError
log4js.getLogger(1);

log4js.shutdown(() => {});

// $ExpectError
log4js.shutdown();

log4js.connectLogger(log4js.getLogger(), {});

const error = log4js.levels.ERROR;
