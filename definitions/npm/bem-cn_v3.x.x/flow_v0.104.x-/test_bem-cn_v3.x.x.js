// @flow
import { it, describe } from 'flow-typed-test';
import { block, setup } from 'bem-cn';

describe('block', () => {
  describe('create block', () => {
    it('should pass on correct inputs', () => {
      block('button');
    });

    it('should fail on invalid inputs', () => {
      // $ExpectError
      block();
    });
  });

  describe('create block item', () => {
    const b = block('button');

    it('should pass on correct inputs', () => {
      b();
      b('el');
      b({ mod: 'mod' });
      b({ mod: true });
      b('el', { mod: 'mod' });
    });

    it('should fail on invalid inputs', () => {
      // $ExpectError
      b(1);
      // $ExpectError
      b('el', 'mod');
    });
  });

  describe('convert block item to string', () => {
    const b = block('button');

    it('should pass on correct inputs', () => {
      b();
      b('el')();
      b('el')({ mod: true })();
    });

    it('should fail on invalid inputs', () => {
      // $ExpectError
      b()();
      // $ExpectError
      b('el')()();
      // $ExpectError
      b('el')({ mod: true })()();
    });
  });

  describe('has', () => {
    const b = block('button');

    it('should pass on correct inputs', () => {
      b.has({ mod: true });
    });

    it('should fail on invalid inputs', () => {
      // $ExpectError
      b.has({ mod: 'mod' });
    });
  });

  describe('is', () => {
    const b = block('button');

    it('should pass on correct inputs', () => {
      b.is({ mod: true });
    });

    it('should fail on invalid inputs', () => {
      // $ExpectError
      b.is({ mod: 'mod' });
    });
  });

  describe('mix', () => {
    const b = block('button');

    it('should pass on correct inputs', () => {
      b.mix('another');
      b.mix(['one', 'two']);
    });

    it('should fail on invalid inputs', () => {
      // $ExpectError
      b.mix(1);
    });
  });

  describe('state', () => {
    const b = block('button');

    it('should pass on correct inputs', () => {
      b.state({ mod: true });
    });

    it('should fail on invalid inputs', () => {
      // $ExpectError
      b.state({ mod: 'mod' });
    });
  });

  describe('split', () => {
    const b = block('button');

    it('should pass on correct inputs', () => {
      b.split();
      b.split('');
      b.split('', 1);
    });

    it('should fail on invalid inputs', () => {
      // $ExpectError
      b.split(1);
      // $ExpectError
      b.split('', '1');
    });
  });
});

describe('setup', () => {
  it('should pass on correct inputs', () => {
    setup({
      el: '__',
      mod: '_',
      modValue: '_',
    });
  });

  it('should fail on invalid inputs', () => {
    // $ExpectError
    setup();
    // $ExpectError
    setup(1);
    // $ExpectError
    setup({});
  });
});
