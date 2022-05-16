// @flow
import { describe, test } from 'flow-typed-test';

const spawn = require('spawndamnit');

describe('spawndamnit', () => {
  test('basic use case', async () => {
    let child = spawn('npm', ['star', 'spawndamnit']);

    child.on('stdout', data => console.log(data.toString()));
    child.on('stderr', data => console.error(data.toString()));

    let { code, stdout, stderr } = await child;
  });

  test('spawn', () => {
    spawn('npm');

    // $FlowExpectedError[incompatible-call]
    spawn();
    // $FlowExpectedError[incompatible-call]
    spawn('npm', [1, 2]);
  })

  test('ChildProcessPromise', () => {
    const child = new spawn.ChildProcessPromise(() => {});

    // $FlowExpectedError[incompatible-call]
    new spawn.ChildProcessPromise();
    // $FlowExpectedError[incompatible-call]
    new spawn.ChildProcessPromise('test');
  });
});
