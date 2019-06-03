// @flow
import { describe, it } from 'flow-typed-test';

describe('unknown properties', () => {
  it('are not allowed', () => {
    // $ExpectError does not accept unknown props
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
    // $ExpectError no numbers
    require('@babel/register')({
      plugins: [
        123
      ]
    });
    // $ExpectError should be array
    require('@babel/register')({
      plugins: 'my-plugin'
    });
  })
});

// can be empty
require('@babel/register')();
