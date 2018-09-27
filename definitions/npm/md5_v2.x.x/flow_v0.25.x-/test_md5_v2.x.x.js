import md5 from "md5";
import { it, describe } from "flow-typed-test";

describe('md5', () => {
  it('takes string and returns string', () => {
    (md5('message'): string);
  })

  it('takes buffer and returns string', () => {
    (md5(new Buffer("message áßäöü", "utf8")): string);
  })

  it('does not take number or undefined etc', () => {
    // $ExpectError
    md5(5);
    // $ExpectError
    md5(undefined);
  });
});
