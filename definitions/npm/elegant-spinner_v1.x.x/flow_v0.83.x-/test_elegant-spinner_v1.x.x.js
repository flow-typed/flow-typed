// @flow
import { it, describe } from 'flow-typed-test';
import spinner from 'elegant-spinner';

describe('elegant-spinner', () => {
  it('exports a function', () => {
    (spinner()(): string);
    // $FlowExpectedError[extra-arg] Takes no args
    spinner('test');
    // $FlowExpectedError[extra-arg] The returned function takes no args
    spinner()('test');
  });

  it('export also has a frame property', () => {
    (spinner.frames: Array<string>);
    // $FlowExpectedError[incompatible-cast] Can't any other primitive
    (spinner.frames: Array<number>);
    // $FlowExpectedError[incompatible-cast] Can't be an object
    (spinner.frames: Array<{ ... }>);
  });

  it('frames is readonly', () => {
    // $FlowExpectedError[cannot-write]
    spinner.frames = [''];
  })
});
