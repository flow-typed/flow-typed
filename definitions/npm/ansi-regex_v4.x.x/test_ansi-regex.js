import ansiRegex from 'ansi-regex';
import { describe, it } from 'flow-typed-test';

describe('ansi-regex', () => {
  it('should be RegExp', () => {
    ansiRegex(); // $ExpectType RegExp
  });

  it('should be boolean', () => {
    // From the ansi-regex README.md
    ansiRegex().test('\u001B[4mcake\u001B[0m'); // $ExpectType boolean
    // => true
  });

  it('should be false boolean', () => {
    ansiRegex().test('cake'); // $ExpectType boolean
    // => false
  });

  it('should be false boolean 2', () => {
    ansiRegex({ onlyFirst: true }).test('cake'); // $ExpectType boolean
    // => false
  });

  it('should be RegExpMatchArray | null', () => {
    '\u001B[4mcake\u001B[0m'.match(ansiRegex()); // $ExpectType RegExpMatchArray | null
    // => ['\u001B[4m', '\u001B[0m']
  });
});
