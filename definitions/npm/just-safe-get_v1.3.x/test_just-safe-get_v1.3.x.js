// @flow

import { describe, it } from 'flow-typed-test';
import get from 'just-safe-get';

describe('Sanity - non-generic, primitive access', () => {
  it('should pass when used properly', () => {
    const obj = {
      aNum: 5,
      aStr: 'hello',
    };

    // Simplest access case
    (get(obj, "aStr"): mixed);

    // Ensure simple refinement works
    const num = get(obj, "aNum");
    if(typeof num === 'number') {
      (num: number);
    }
  });

  it('raise an error if non-string prop name provided', () => {
    // $ExpectError
    get(obj, 5);
  });
});

describe('Sanity - generic, primitive access', () => {
  it('should pass when used properly', () => {
    const obj = {
      aNum: 5,
      aStr: 'hello',
      anObj: { world: 'hello' }
    };

    (get<number>(obj, "aNum"): number);
    (get<string>(obj, "aStr"): string);
    type ObjType = {[string]: mixed, ...};
    (get<ObjType>(obj, "anObj"): ObjType);
  });
});

describe('Multi-level object access', () => {
  it('should pass when used properly', () => {
    const obj = {
      h: {
        e: {
          l: {
            l: {
              o: "world"
            }
          }
        }
      }
    };
    (get<string>(obj, ['h', 'e', 'l', 'l', 'o']): string);
  });
});
