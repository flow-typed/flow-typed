import ansiRegex from 'ansi-regex';
import { describe, it } from 'flow-typed-test';

describe('ansi-regex', () => {
  it('should be RegExp', () => {
    const regexp: RegExp = ansiRegex();
  });

  it('should be boolean', () => {
    // From the ansi-regex README.md
    const bool: boolean = ansiRegex().test('\u001B[4mcake\u001B[0m');
    // => true
  });

  it('should be false boolean', () => {
    const bool: boolean = ansiRegex().test('cake');
    // => false
  });

  it('should be false boolean 2', () => {
    const bool: boolean = ansiRegex({ onlyFirst: true }).test('cake');
    // => false
  });

  it('should be RegExpMatchArray | null', () => {
    const array: ?Array<string> = '\u001B[4mcake\u001B[0m'.match(ansiRegex());
    // => ['\u001B[4m', '\u001B[0m']
  });
});
