// @flow
import { describe, it } from 'flow-typed-test';
import logger from 'heroku-logger';

const Logger = require('heroku-logger').Logger;

describe('heroku-logger', () => {
  it('can log basic messages', () => {
    logger.info('Starting server', { port: 4000 });
    logger.error('Invalid `type` argument', { argument: 'type', value: 'number' });
    logger.warn(new Error('test'));

    // $FlowExpectedError[incompatible-call] needs a message
    logger.info();
  });

  it('can create new instance', () => {
    const log = new Logger({
      color: true,
      delimiter: ',',
      level: 'info',
      prefix: '#',
      readable: false,
    });

    log.info('message', { key: 'value' });
    log.error('error!', { code: 400 });
  });

  it('logs with level passed', () => {
    logger.log('info', 'message');
    logger.log('info', 'message', { key: 'value' });
  });

  it('clones', () => {
    const log = new logger.Logger({
      color: true,
      delimiter: ',',
      level: 'info',
      prefix: '#',
      readable: false,
    });
    const clone = log.clone({
      delimiter: '#',
    });
  })
});
