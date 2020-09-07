import indentString from 'indent-string';
import { describe, it } from 'flow-typed-test';

describe('documented examples', () => {
  it('allows no options argument', () => {
    const a: string = indentString('Unicorns\nRainbows', 4);
    //=> '    Unicorns'
    //=> '    Rainbows'
  })

  it('allows an indent character option', () => {
    const b: string = indentString('Unicorns\nRainbows', 4, { indent: '♥' });
    //=> '♥♥♥♥Unicorns'
    //=> '♥♥♥♥Rainbows'
  })

  it('requires a string input', () => {
    // $FlowExpectedError
    indentString(42);
  })

  it('returns a string', () => {
    // $FlowExpectedError
    (indentString('Unicorns\nRainbows', 4): number);
  })
})

describe('options', () => {
  it('accepts an optional includeEmptyLines option', () => {
    indentString('foo\nbar', 4, { includeEmptyLines: true });
  })

  it('requires a boolean value for includeEmptyLines', () => {
    // $FlowExpectedError
    indentString('foo\nbar', 4, { includeEmptyLines: 'foobar' });
  })
})
