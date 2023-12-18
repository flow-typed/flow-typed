// @flow
import { describe, it } from 'flow-typed-test';

describe('unknown properties', () => {
  it('are not allowed', () => {
    // $FlowExpectedError[prop-missing] does not accept unknown props
    require('@babel/register')({
      unknown: 'property'
    });
  })
});

describe('plugins', () => {
  it('accepts strings ajnd tuples of string and object', () => {
    require('@babel/register')({
      plugins: [
        'my-plugin',
        ['my-plugin', {options: 'here'}]
      ]
    });
  });
  it('does not accept anything else', () => {
    require('@babel/register')({
      // $FlowExpectedError[incompatible-call] no numbers
      plugins: [123]
    });
    require('@babel/register')({
      // $FlowExpectedError[incompatible-call] should be array
      plugins: 'my-plugin'
    });
  })
});

// can be empty
require('@babel/register')();
