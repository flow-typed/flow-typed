// @flow
import { describe, it } from 'flow-typed-test';
import {PassThrough as PassThroughStream} from 'stream';
import ora, { oraPromise } from 'ora';

describe('ora', () => {
  const spinner = ora('Loading unicorns');

  it('inits', () => {
    ora({});
    ora({text: 'Loading unicorns'});
    ora({prefixText: 'Loading unicorns'});
    ora({prefixText: () => 'Loading unicorns dynamically'});
    ora({spinner: 'squish'});
    ora({spinner: {frames: ['-', '+', '-']}});
    ora({spinner: {interval: 80, frames: ['-', '+', '-']}});
    ora({color: 'cyan'});
    ora({hideCursor: true});
    ora({indent: 1});
    ora({interval: 80});
    ora({stream: new PassThroughStream()});
    ora({isEnabled: true});
    ora({isSilent: false});
    ora({discardStdin: true});

    // $FlowExpectedError[incompatible-call]
    ora();
    // $FlowExpectedError[incompatible-call]
    ora(123);
    // $FlowExpectedError[incompatible-call]
    ora({ foo: 'bar' });
  });

  it('sets values', () => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
    (spinner.isSpinning: boolean);
    spinner.spinner = 'dots';
    spinner.indent = 5;

    // $FlowExpectedError[prop-missing]
    spinner.random = 5;
  });

  it('calls funcs', () => {
    spinner.start();
    spinner.start('Test text');
    spinner.stop();
    spinner.succeed();
    spinner.succeed('fooed');
    spinner.fail();
    spinner.fail('failed to foo');
    spinner.warn();
    spinner.warn('warn foo');
    spinner.info();
    spinner.info('info foo');
    spinner.stopAndPersist();
    spinner.stopAndPersist({text: 'all done'});
    spinner.stopAndPersist({symbol: '@', text: 'all done'});
    spinner.stopAndPersist({prefixText: 'all done'});
    spinner.clear();
    spinner.render();
    spinner.frame();
  });

  it('oraPromise', () => {
    const resolves = Promise.resolve(1);
    void oraPromise(resolves, 'foo');
    void oraPromise(resolves, {
      stream: new PassThroughStream(),
      text: 'foo',
      color: 'blue',
      isEnabled: true,
      isSilent: false,
    });
    void oraPromise(async () => {
      await resolves;
    }, 'foo');
    void oraPromise(async spinner => {
      spinner.prefixText = 'foo';
      await resolves;
      return 7;
    }, {
      stream: new PassThroughStream(),
      text: 'foo',
      color: 'blue',
      isEnabled: true,
      isSilent: false,
      successText: result => `Resolved with number ${result}`,
      failText: 'bar',
    });
  });
});
