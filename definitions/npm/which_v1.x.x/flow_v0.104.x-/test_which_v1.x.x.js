import which from "which";
import { it, describe } from "flow-typed-test";

describe('which', () => {
  describe('sync', () => {
    it('takes string and returns string', () => {
      (which.sync('flow-typed'): string);
      // $ExpectError first param can't be anything but string
      (which.sync(123): string);
    })

    it('takes string and object and returns string', () => {
      (which.sync('flow-typed', {path: '/'}): string);
    })

    it('returns null or string when noThrow=true in options', () => {
      (which.sync('flow-typed', {noThrow: true}): ?string);
      // $ExpectError return type can be null
      (which.sync('flow-typed', {noThrow: true}): string);
      (which.sync('flow-typed', {noThrow: false}): string);
    });
  });

  describe('async', () => {
    it('takes string and callback', () => {
      which('flow-typed', (err, val) => {
        (val: string);
      })
      // $ExpectError first param can't be anything but string
      which(123, (err, val) => {
        (val: string);
      })
    });

    it('takes string, object and callback', () => {
      which('flow-typed', {path: '/'}, (err, val) => {
        (val: string);
      })

      // $ExpectError first param can't be anything but string
      which(123, {path: '/'}, (err, val) => {
        (val: string);
      })
    })
  })
});
