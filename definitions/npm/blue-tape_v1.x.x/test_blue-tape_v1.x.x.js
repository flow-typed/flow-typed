// @flow
import { describe, it } from 'flow-typed-test';
import tape from 'blue-tape';

describe('blue-tape', () => {
  it('behaves like tape', () => {
  	tape('timing test', (t) => {
      t.plan(2);

      t.equal(typeof Date.now, 'function');
      var start = Date.now();

      setTimeout(() => {
        t.equal(Date.now() - start, 100);
      }, 100);
    });
  })

  it('works on promises', () => {
  	const delay = (arg: number) => new Promise((res, rej) => {});

  	tape("simple delay", (t) => delay(1));

    tape("should fail", (t) => {
      return delay(1).then(() => {
        throw new Error("Failed!");
      });
    });
  })
})
