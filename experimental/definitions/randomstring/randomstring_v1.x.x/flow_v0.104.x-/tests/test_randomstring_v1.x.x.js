import { describe, it } from 'flow-typed-test';
import {generate} from 'randomstring';

describe('#generate', () => {
  it('should work with correct options.', () => {
    generate({
      length: 12,
      charset: 'alphabetic',
      readable: true,
      capitalization: 'lowercase'
    });
    generate({
      charset: 'alphabetic',
      readable: true,
      capitalization: 'lowercase'
    });
    generate({
      readable: true,
      capitalization: 'lowercase'
    });
    generate({
      capitalization: 'lowercase'
    });
    generate({});
    generate(10);
  });

  it('should fail with wrong options.', () => {
    // $ExpectError - type of 'length' is not number
    generate({
      length: '12',
      charset: 'alphabetic',
      readable: true,
      capitalization: 'lowercase'
    });
    // $ExpectError - type of 'charset' is not string
    generate({
      length: 12,
      charset: 1,
      readable: true,
      capitalization: 'lowercase'
    });
    // $ExpectError - type of 'readable' is not boolean
    generate({
      length: 12,
      charset: 'alphabetic',
      readable: 1,
      capitalization: 'lowercase'
    });
    // $ExpectError - type of 'capitalization' is not string
    generate({
      length: 12,
      charset: 'alphabetic',
      readable: true,
      capitalization: 1
    });
    // $ExpectError - argument is boolean
    generate(true);
    // $ExpectError - argument is string
    generate("10");
    // $ExpectError - argument is array
    generate([]);
  })
})
