/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import _, {
  type RefineFilter,
  append,
  compose,
  concat,
  contains,
  curry,
  filter,
  find,
  includes,
  groupBy,
  length,
  pipe,
  reduce,
  repeat,
  subtract,
  uniq,
  without,
  zipWith
} from "ramda";
import { describe, it } from 'flow-typed-test';

const ns: Array<number> = [1, 2, 3, 4, 5];
const ss: Array<string> = ["one", "two", "three", "four"];
const obj: { [k: string]: number, ... } = { a: 1, c: 2 };
const objMixed: { [k: string]: mixed, ... } = { a: 1, c: "d" };
const os: Array<{ [k: string]: number | string, ... }> = [
  { a: 1, c: "d" },
  { b: 2 }
];
const str: string = "hello world";

// List
{
  const xs: Array<number> = _.adjust(2, x => x + 1, ns);
  const xs1: Array<number> = _.adjust(2, x => x + 1)(ns);
  //$ExpectError
  const xs3: Array<string> = _.adjust(2)(x => x + 1)(ns);

  const as: boolean = _.all(x => x > 1, ns);
  const asf: (s: Array<string>) => boolean = _.any(x => x.length > 1);
  const as1: boolean = asf(ss);

  const aps: Array<Array<number>> = _.aperture(2, ns);
  const aps2: Array<Array<string>> = _.aperture(2)(ss);

  const newXs1: Array<number> = _.prepend(1)(ns);

  describe('concat', () => {
    it('should support array', () => {
      const r1: Array<number> = concat([4, 5, 6], [1, 2, 3]);
      const r2: Array<number> = concat([4, 5, 6])([1, 2, 3]);
    });
    it('should supports strings', () => {
      const r1: string = concat("ABC", "DEF");
      const r2: string = concat("ABC")("DEF");
    });
    it('should support readonly arrays', () => {
      const arr1: $ReadOnlyArray<number> = [4, 5, 6];
      const arr2: $ReadOnlyArray<string> = ['1', '2', '3'];
      const r1: Array<number|string> = concat(arr1, arr2);
      const r2: Array<number|string> = concat(arr1)(arr2);

      // $ExpectError
      const r3: Array<number> = concat(arr1)(arr2);
      // $ExpectError
      const r4: Array<string> = concat(arr1)(arr2);
    });
    it('should error when concat array with string', () => {
      // $ExpectError
      concat("ABC", ["DEF"]);
    });
  });

  const dropxs: Array<string> = _.drop(4, ss);
  const dropxs1: string = _.drop(3)(str);
  const dropxs2: Array<string> = _.dropLast(4, ss);
  const dropxs3: string = _.dropLast(3)(str);
  const dropxs4: Array<number> = _.dropLastWhile(x => x <= 3, ns);
  const dropxs5: Array<string> = _.dropRepeats(ss);
  const dropxs6: Array<number> = _.dropRepeatsWith(_.eqBy(Math.abs), ns);
  const dropxs7: Array<number> = _.dropWhile(x => x === 1, ns);

  // The contains libdef is the same as includes, and tests should be duplicated
  // across the two. As of 0.26.0 contains is deprecated, but still present.
  describe('contains', () => {
    describe('uncurried form', () => {
      it('returns a boolean for an Array and its element type', () => {
        const xs: Array<number> = [1]
        const result: boolean = contains(2, xs)
      })

      it('returns a boolean for a $ReadOnlyArray and its element type', () => {
        const xs: $ReadOnlyArray<number> = [1]
        const result: boolean = contains(2, xs)
      })

      it('does not allow a mismatched element type to the Array', () => {
        const xs: Array<number> = [1]
        // It is not understood why this fails to be flagged as an error when
        // the 0.26.x libdef passes with the same declaration. The curried form
        // works reliably though.
        //
        // $ShouldExpectErrorButInsteadWorksPleaseFix
        const result: boolean = contains('foo', xs)
      })

      it('does not allow a mismatched element type to the $ReadOnlyArray', () => {
        const xs: $ReadOnlyArray<string> = ['bar']
        // It is not understood why this fails to be flagged as an error when
        // the 0.26.x libdef passes with the same declaration. The curried form
        // works reliably though.
        //
        // $ShouldExpectErrorButInsteadWorksPleaseFix
        const result: boolean = contains(1, xs)
      })

      it('returns a boolean for two strings', () => {
        const result: boolean = contains('foo', 'bar')
      })

      it('disallows a mismatched string and anything else', () => {
        // $ExpectError
        const result: boolean = contains(1, 'bar')
      })
    })

    describe('1 arg curried form', () => {
      it('returns a boolean for an Array and its element type', () => {
        const xs: Array<number> = [1]
        const result: boolean = contains(2)(xs)
      })

      it('returns a boolean for a $ReadOnlyArray and its element type', () => {
        const xs: $ReadOnlyArray<number> = [1]
        const result: boolean = contains(2)(xs)
      })

      it('does not allow a mismatched element type to the Array', () => {
        const xs: Array<number> = [1]
        // $ExpectError
        const result: boolean = contains('foo')(xs)
      })

      it('does not allow a mismatched element type to the $ReadOnlyArray', () => {
        const xs: $ReadOnlyArray<number> = [1]
        // $ExpectError
        const result: boolean = contains('foo')(xs)
      })

      it('returns a boolean for two strings', () => {
        const result: boolean = contains('foo')('bar')
      })

      it('disallows a mismatched string and anything else', () => {
        // $ExpectError
        const result: boolean = contains(1)('bar')
      })
    })
  })

  describe('includes', () => {
    describe('uncurried form', () => {
      it('returns a boolean for an Array and its element type', () => {
        const xs: Array<number> = [1]
        const result: boolean = includes(2, xs)
      })

      it('returns a boolean for a $ReadOnlyArray and its element type', () => {
        const xs: $ReadOnlyArray<number> = [1]
        const result: boolean = includes(2, xs)
      })

      it('does not allow a mismatched element type to the Array', () => {
        const xs: Array<number> = [1]
        // It is not understood why this fails to be flagged as an error when
        // the 0.26.x libdef passes with the same declaration. The curried form
        // works reliably though.
        //
        // $ShouldExpectErrorButInsteadWorksPleaseFix
        const result: boolean = includes('foo', xs)
      })

      it('does not allow a mismatched element type to the $ReadOnlyArray', () => {
        const xs: $ReadOnlyArray<string> = ['bar']
        // It is not understood why this fails to be flagged as an error when
        // the 0.26.x libdef passes with the same declaration. The curried form
        // works reliably though.
        //
        // $ShouldExpectErrorButInsteadWorksPleaseFix
        const result: boolean = includes(1, xs)
      })

      it('returns a boolean for two strings', () => {
        const result: boolean = includes('foo', 'bar')
      })

      it('disallows a mismatched string and anything else', () => {
        // $ExpectError
        const result: boolean = includes(1, 'bar')
      })
    })

    describe('1 arg curried form', () => {
      it('returns a boolean for an Array and its element type', () => {
        const xs: Array<number> = [1]
        const result: boolean = includes(2)(xs)
      })

      it('returns a boolean for a $ReadOnlyArray and its element type', () => {
        const xs: $ReadOnlyArray<number> = [1]
        const result: boolean = includes(2)(xs)
      })

      it('does not allow a mismatched element type to the Array', () => {
        const xs: Array<number> = [1]
        // $ExpectError
        const result: boolean = includes('foo')(xs)
      })

      it('does not allow a mismatched element type to the $ReadOnlyArray', () => {
        const xs: $ReadOnlyArray<number> = [1]
        // $ExpectError
        const result: boolean = includes('foo')(xs)
      })

      it('returns a boolean for two strings', () => {
        const result: boolean = includes('foo')('bar')
      })

      it('disallows a mismatched string and anything else', () => {
        // $ExpectError
        const result: boolean = includes(1)('bar')
      })
    })
  })

  describe('startsWith', () => {
    it('checks to see if one string is inside of another', () => {
      const result: boolean = _.startsWith("a")("abc");
    })

    it('checks to see if one element of an array is starting in another array', () => {
      const result: boolean = _.startsWith(["a"], ["a", "b", "c"]);
    })

    // See https://ramdajs.com/repl/?v=0.25.0#?%2F%2F%20Works%20with%20more%20than%20just%20strings%3A%0AR.startsWith%28%5B1%5D%2C%20%5B1%2C%202%2C%203%5D%29%20%20%20%20%2F%2F%3D%3E%20true
    // for a working example.
    it('can check any type (not just strings) for the starting of an array', () => {
      const result: boolean = _.startsWith([1], [1, 2, 3]);
    })

    // See https://ramdajs.com/repl/?v=0.25.0#?%2F%2F%20Works%20with%20multiple%20elements%20in%20the%20comparator%3A%0AR.startsWith%28%5B1%2C%202%5D%2C%20%5B1%2C%202%2C%203%5D%29%20%20%20%20%2F%2F%3D%3E%20true
    // for a working example.
    it('allows any number of elements to be used as the comparator', () => {
      const result: boolean = _.startsWith([1, 2, 3], [1, 2, 3]);
    })

    it('catches mismatches between the first set and the second', () => {
      // $ExpectError
      _.startsWith("1", [1, 2, 3])
    })

    it('catches mismatches between the inner array elements', () => {
      // It is not understood why this isn't flagged as an error.
      // $ShouldExpectErrorButInsteadWorksPleaseFix
      _.startsWith(["1"], [1, 2, 3])
    })
  })

  describe('endsWith', () => {
    it('checks to see if one string is inside of another', () => {
      const result: boolean = _.endsWith("a")("abc");
    })

    it('checks to see if one element of an array is ending in another array', () => {
      const result: boolean = _.endsWith(["a"], ["a", "b", "c"]);
    })

    // See https://ramdajs.com/repl/?v=0.25.0#?%2F%2F%20Works%20with%20more%20than%20just%20strings%3A%0AR.endsWith%28%5B3%5D%2C%20%5B1%2C%202%2C%203%5D%29%20%20%20%20%2F%2F%3D%3E%20true
    // for a working example.
    it('can check any type (not just strings) for the ending of an array', () => {
      const result: boolean = _.endsWith([1], [1, 2, 3]);
    })

    // See https://ramdajs.com/repl/?v=0.25.0#?%2F%2F%20Works%20with%20multiple%20elements%20in%20the%20comparator%3A%0AR.endsWith%28%5B2%2C%203%5D%2C%20%5B1%2C%202%2C%203%5D%29%20%20%20%20%2F%2F%3D%3E%20true
    // for a working example.
    it('allows any number of elements to be used as the comparator', () => {
      const result: boolean = _.endsWith([1, 2, 3], [1, 2, 3]);
    })

    it('catches mismatches between the first set and the second', () => {
      // $ExpectError
      _.endsWith("1", [1, 2, 3])
    })

    it('catches mismatches between the inner array elements', () => {
      // It is not understood why this isn't flagged as an error.
      // $ShouldExpectErrorButInsteadWorksPleaseFix
      _.endsWith(["1"], [1, 2, 3])
    })
  })

  const chainxs: number[] = _.chain((n) => [n, n], [1, 2])
  const chainxs1: number[] = _.chain((n) => [n, n])([1, 2])

  const findxs: ?{ [k: string]: number | string, ... } = _.find(
    _.propEq("a", 2),
    os
  );
  const findxs1: ?{ [k: string]: number | string, ... } = _.find(_.propEq("a", 4))(
    os
  );
  // Ramda doesn't strictly break if you pass it an object, but it always
  // returns undefined.
  // $ExpectError
  const findObj = find(o => o == "bar", { foo: "bar" });

  const findxs2: ?{ [k: string]: number | string, ... } = _.findLast(
    _.propEq("a", 2),
    os
  );
  const findxs3: ?{ [k: string]: number | string, ... } = _.findLast(
    _.propEq("a", 4)
  )(os);
  const findxs4: number = _.findIndex(_.propEq("a", 2), os);
  const findxs5: number = _.findIndex(_.propEq("a", 4))(os);
  const findxs6: number = _.findLastIndex(_.propEq("a", 2), os);
  const findxs7: number = _.findLastIndex(_.propEq("a", 4))(os);


  describe('length', () => {
    describe('works on', () => {
      it('empty array', () => {
        length([])
      })
      it('simple array of strings', () => {
        length(ss)
      })
      it('heterogeneous arrays', () => {
        length([1, '', ss, true, ns])
      })
      it('strings', () => {
        length(str)
      })
      it('objects defining numeric .length property', () => {
        length({length: 12})
      })
    })
    describe('fails on', () => {
      it('null and undefined', () => {
        // $ExpectError
        length(null)
        // $ExpectError
        length()
      })
      it('types that has no length', () => {
        // $ExpectError
        length(123)
      })
      it('non-numeric .length property', () => {
        // $ExpectError
        length({length: 'size'})
      })
    })
  })

  const s4 = _.find(x => x === "2", ["1", "2"]);
  //$ExpectError
  const s5: ?{ [key: string]: string, ... } = _.find(x => x === "2", { a: 1, b: 2 });
  const s6: number = _.findIndex(x => x === "2", ["1", "2"]);
  const s7: number = _.findIndex(x => x === "2", { a: "1", b: "2" });
  const forEachxs = _.forEach(x => console.log(x), ns);

  const forEachObj = _.forEachObjIndexed((value, key) => {}, { x: 1, y: 2 });

  describe('groupBy', () => {
    it('should work with basic array', () => {
      const fn = x => `${x}`;
      const groupedBy: { [k: string]: Array<number>, ... } = groupBy(fn, [1, 2, 3]);
      const groupedBy1: { [k: string]: Array<string>, ... } = groupBy(fn)(['one', 'two', 'three']);
    });
    it('group function should return string', () => {
      const fn: number => number = x => x;

      // $ExpectError
      groupBy(fn, [1,2,3]);
      // $ExpectError
      groupBy(fn)([1,2,3]);
    });
    it('group function param should match array element', () => {
      const fn: string => string = x => x;

      // $ExpectError
      groupBy(fn, [1,2,3]);
      // $ExpectError
      groupBy(fn)([1,2,3]);
    });
    it('should support readonly array', () => {
      const fn: (number | string) => string = x => `${x}`;
      const arr: $ReadOnlyArray<number> = [1, 2, 3];
      const groupedBy: { [k: string]: Array<number>, ... } = groupBy(fn, arr);
      const arr1: $ReadOnlyArray<number|string> = [1, 'two', 3];
      const groupedBy1: { [k: string]: Array<number|string>, ... } = groupBy(fn)(arr1);

      const fn1: number => string = x => `${x}`;
      // $ExpectError
      groupBy(fn1, arr1);
      // $ExpectError
      const groupedBy2: { [k: string]: Array<number> } = groupBy(fn)(arr1);
    });
  });

  const groupedWith: Array<Array<number>> = _.groupWith(x => x > 1, ns);
  const groupedWith1: Array<Array<string>> = _.groupWith(x => x === "one")(ss);

  describe('head', () => {
    describe('with array', () => {
      it('should returns MaybeOf element type', () => {
        const fn = (arr: number[]) => {
          const xOfXs: ?number = _.head(arr);
          //$ExpectError
          const xOfXs: number = _.head(arr);
        }
      });
      it('should works with refinement', () => {
        const fn = (arr: number[]) => {
          if (arr.length > 0) {
            const xOfXs: number = _.head(arr);
          }
        }
      });
      it('should works with mixed-type arrays', () => {
        const fn = (arr: Array<number|string>) => {
          const xOfXs: ?(number|string) = _.head(arr);
          //$ExpectError
          const xOfXs: ?number = _.head(arr);
          if (arr.length > 0) {
            const xOfXs: number|string = _.head(arr);
            //$ExpectError
            const xOfXs: number = _.head(arr);
          }
        }
      });
    });
    describe('with string', () => {
      it('should works', () => {
        const xOfStr: string = _.head(str);
      });
    })
  });

  const transducer = _.compose(_.map(_.add(1)), _.take(2));

  const txs: Array<number> = _.into([], transducer, ns);
  //$ExpectError
  const txs1: string = _.into([], transducer, ns);
  //$ExpectError
  const txs2: string = _.into([], transducer, ss);

  const ind: number = _.indexOf(1, ns);
  const ind1: number = _.indexOf(str)(ss);
  const ind2: { [key: string]: { [k: string]: number | string, ... }, ... } = _.indexBy(
    x => "s",
    os
  );
  const ind3: { [key: string]: { [k: string]: number | string, ... }, ... } = _.indexBy(
    x => "s"
  )(os);
  const ind4: number = _.indexOf(null)(ss);

  const insxs: Array<number> = _.insert(1, 2, ns);
  const insxs2: Array<string> = _.insert(1, "2", ss);

  const insxs3: Array<number> = _.insertAll(1, [2, 3], ns);
  // this is disgusting — don't do this :)
  // Technically it's a tuple with arbitrary size
  const insxs4: Array<number | boolean | string> = _.insertAll(
    1,
    ["2", false],
    ns
  );
  const insxs5: Array<string | number> = _.insertAll(1, [2], ss);

  const joinxs: string = _.join("|", ns);

  const lastxs: ?number = _.last(ns);
  const laststr: string = _.last(str);

  const lasti: number = _.lastIndexOf(3, [-1, 3, 3, 0, 1, 2, 3, 4]);

  const mapxs: Array<number> = _.map(x => x + 1, ns);

  const someObj: {
    a: string,
    b: number,
    ...
  } = { a: 'a', b: 2 }
  const someMap: { [string]: {
    a: string,
    b: number,
    ...
  }, ... } = { so: someObj }
  const mapObj: { [string]: string, ... } = _.map((x: {
    a: string,
    b: number,
    ...
  }): string => x.a)(someMap)
  const mapObj2: { [string]: string, ... } = _.map((x: {
    a: string,
    b: number,
    ...
  }): string => x.a, someMap)

  const functor = {
    x: 1,
    map(f) {
      return f(this.x);
    }
  };

  // Doesn't typecheck (yet) but at least doesn't break
  const mapFxs = _.map(_.toString, functor);

  const double = x => x * 2;
  const dxs: Array<number> = _.map(double, [1, 2, 3]);
  const dos: $Shape<typeof obj> = _.map(double, obj);

  const appender = (a, b) => [a + b, a + b];
  const mapacc: [number, Array<number>] = _.mapAccum(appender, 0, ns);
  const mapacc1: [number, Array<number>] = _.mapAccumRight(appender, 0, ns);

  const nxs: boolean = _.none(x => x > 1, ns);

  const nthxs: ?string = _.nth(2, ["curry"]);
  const nthxs1: ?string = _.nth(2)(["curry"]);
  //$ExpectError
  const nthxs2: string = _.nth(2, [1, 2, 3]);

  describe('append', () => {
    it('should supports arrays', () => {
      const appendResult1: Array<number> = append(1, [1, 2, 3]);
      const appendResult2: Array<string> = append('four')(['one', 'two', 'three']);
    });
    it('should works with read-only array', (readOnly: $ReadOnlyArray<number>) => {
      const appendResult1: $ReadOnlyArray<number> = append(1, readOnly);
      const appendResult2: $ReadOnlyArray<number> = append(1)(readOnly);
    });
    it('should result array element should be correct', () => {
      const readOnly: $ReadOnlyArray<number> = [1, 2, 3];
      const appendResult1: $ReadOnlyArray<number|string> = append('s', readOnly);
      const appendResult2: $ReadOnlyArray<number|string> = append('s')(readOnly);

      //$ExpectError
      const appendResult3: $ReadOnlyArray<number|null> = append('s', readOnly);
      //$ExpectError
      const appendResult4: $ReadOnlyArray<number> = append('s')(readOnly);
    });
  });

  const xxxs: Array<number> = _.intersperse(1, [1, 2, 3]);

  const pairxs: [number, string] = _.pair(2, "str");

  const partxs: [Array<string>, Array<string>] = _.partition(_.contains("s"), [
    "sss",
    "ttt",
    "foo",
    "bars"
  ]);
  const partxs1: [
    { [k: string]: string, ... },
    { [k: string]: string, ... }
  ] = _.partition(_.contains("s"), { a: "sss", b: "ttt", foo: "bars" });

  describe('pluck', () => {
    it('should works on array of objects as maps', () => {
      const arr: Array<{ [string]: number | string, ... }> = [{ a: "1" }, { a: 2 }];
      const pl: Array<number | string> = _.pluck("a")(arr);
      const p2: Array<number | string> = _.pluck("b")(arr);
    });
    it('should works on array of arrays', () => {
      const pl: Array<number> = _.pluck(0)([[1, 2], [3, 4]]);
    });
    it('should works on array of objects', () => {
      const arr: Array<{
        key: number,
        other?: string,
        ...
      }> = [{ key: 42 }, { key: 28, other: 'string' }];
      const pl: number[] = _.pluck('key', arr);
    });
    it('should fails on non existing property', () => {
      //$ExpectError
      const pl = _.pluck('notExistingKey', [{ key: 42 }, { key: 28, other: 'string' }]);
      //$ExpectError
      const pl = _.pluck('other', [{ key: 42 }, { key: 28, other: 'string' }]);
    });
    it('should returns union type of selected property', () => {
      const arr = [{ key: 42 }, { key: 'string', other: 'string' }];
      const pl: Array<number | string> = _.pluck('key', arr);
      //$ExpectError
      const pl: number[] = _.pluck('key', arr);
    });
  });

  const rxs: Array<number> = _.range(1, 10);

  const remxs: Array<string> = _.remove(0, 2, ss);
  const remxs1: Array<string> = _.remove(0, 2)(ss);
  const remxs2: Array<string> = _.remove(0)(2)(ss);
  const remxs3: Array<string> = _.remove(0)(2, ss);

  const ys4: Array<string> = _.repeat("1", 10);
  const ys5: Array<number> = _.repeat(1, 10);

  // reduce
  const redxs: number = reduce(_.add, 10, ns);
  const redxs1: string = reduce(concat, "", ss);
  const redxs2: Array<string> = reduce<string[], string[]>(concat, [])(_.map(x => [x], ss));
  // Example used in docs: http://ramdajs.com/docs/#reduce
  const redxs4: number = reduce(subtract, 0, [1, 2, 3, 4]);
  // Using accumulator type that differs from the element type (A and B).
  const redxs5: number = reduce((acc, s) => acc + parseInt(s), 0, [
    "1",
    "2",
    "3"
  ]);

  const redux6a: number = reduce((acc, s) => _.reduced(acc), 0, ns)
  const redux6b: number = reduce((acc: number, s: number) => _.reduced(acc), 0, ns)
  const redxs7: number = reduce(
    (acc, s) => acc < 4 ? acc + parseInt(s) : _.reduced(acc),
    0,
    ["1", "2", "3"]
  );
  // $ExpectError
  const redxs8: number = reduce(
    // $ExpectError
    (acc, s) => acc < 4 ? acc + parseInt(s) : _.reduced(s),
    0,
    ["1", "2", "3"]
  );

  // Ramda works with $ReadOnlyArray as it is immutable.
  const readOnlyArray: $ReadOnlyArray<number> = [1, 2, 3, 4];
  // $ReadOnlyArray with curried permutations:
  const redxsReadOnly3: number = reduce(subtract, 0, readOnlyArray);
  const redxsReadOnly2_1: number = reduce(subtract, 0)(readOnlyArray);
  const redxsReadOnly1_2: number = reduce<number, number>(subtract)(0, readOnlyArray);
  const redxsReadOnly1_1_1: number = reduce(subtract)(0)(readOnlyArray);

  // $ExpectError reduce will not work with an object.
  reduce(subtract, 0, { foo: 1, bar: 2 });

  // reduceRight
  const redrxs1: number = _.reduceRight(_.add, 10, ns);
  const redrxs2: string = _.reduceRight(concat, "", ss);
  const redrxs3: Array<string> = _.reduceRight(concat, [])(
    _.map(x => [x], ss)
  );
  const redrxs3a: string = _.reduceRight(
    //$ExpectError
    (acc: string, value: number): string => acc,
    "",
    ns
  );
  const redrxs3b: string = _.reduceRight(
    (value: number, acc: string): string => acc,
    "",
    ns
  );

  // $ExpectError reduceRight does not support reduced.
  const redrxs4: number = _.reduceRight(
    // $ExpectError reduceRight does not support reduced.
    (acc, n) => acc < 4 ? acc + n : _.reduced(acc),
    0,
    ns
  );

  const scanxs6: Array<number> = _.scan(_.add)(10)(ns);
  const scanxs7: Array<number> = _.scan(_.add, 10)(ns);
  const scanxs8: Array<number> = _.scan(_.add)(10, ns);
  const scanxs9: Array<number> = _.scan(_.add, 10, ns);
  const scanxs10: Array<string> = _.scan(concat)("")(ss);
  const scanxs11: Array<string> = _.scan(concat, "")(ss);
  const scanxs12: Array<string> = _.scan(concat)("", ss);
  const scanxs13: Array<string> = _.scan(concat, "", ss);

  const reduceToNamesBy = _.reduceBy(
    (acc, student) => acc.concat(student.name),
    []
  );
  const namesByGrade = reduceToNamesBy(student => {
    const score = student.score;
    return score < 65
      ? "F"
      : score < 70 ? "D" : score < 80 ? "C" : score < 90 ? "B" : "A";
  });
  const students = [
    { name: "Lucy", score: 92 },
    { name: "Drew", score: 85 },
    { name: "Bart", score: 62 }
  ];
  const names1: { [k: string]: Array<string>, ... } = namesByGrade(students);

  const isOdd = (acc, x) => x % 2 === 1;
  const reduceWhile1: number = _.reduceWhile(isOdd, _.add, 0, [1, 3, 5, 60, 777, 800]);
  const reduceWhile2: number = _.reduceWhile(isOdd, _.add, 111, [2, 4, 6]);

  const spl: Array<string> = _.split(/\./, "a.b.c.xyz.d");

  const spl1: [Array<number>, Array<number>] = _.splitAt(1, [1, 2, 3]);
  const spl2: [string, string] = _.splitAt(5, "hello world");
  const spl3: [string, string] = _.splitAt(-1, "foobar");
  const spl4: Array<Array<number>> = _.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]);
  const spl5: Array<string> = _.splitEvery(3, "foobarbaz");
  const spl6: [Array<number>, Array<number>] = _.splitWhen(_.equals(2))([
    1,
    2,
    3,
    1,
    2,
    3
  ]);

  const slixs: Array<string> = _.slice(0, 2, ss);
  const slixs1: Array<string> = _.slice(0, 2)(ss);
  const slixs2: Array<string> = _.slice(0)(2)(ss);
  const slixs3: Array<string> = _.slice(0)(2, ss);

  const diff = function(a, b) {
    return a - b;
  };
  const sortxs: Array<number> = _.sort(diff, [4, 2, 7, 5]);

  const timesxs: Array<number> = _.times(_.identity, 5);

  const unf: (x: string) => Array<string> = _.unfold(
    (x: string) => x.length > 10 || [x, x + "0"]
  );
  const unf1: Array<number> = _.unfold(x => x > 10 || [x, x + 1], 0);
  const f = n => (n > 50 ? false : [-n, n + 10]);
  const unf11: Array<number> = _.unfold(f, 10);

  //$ExpectError
  const unf2 = _.unfold(x => x.length > 10 || [x, x + "0"], 2);

  const unby: Array<number> = _.uniqBy(Math.abs)([-1, -5, 2, 10, 1, 2]);

  const strEq = _.eqBy(String);
  const strEq2 = _.eqBy(String, 1, 2);
  const unw = _.uniqWith(strEq)([1, "1", 2, 1]);
  const unw1 = _.uniqWith(strEq)([{}, {}]);
  const unw2 = _.uniqWith(strEq)([1, "1", 1]);
  const unw3 = _.uniqWith(strEq)(["1", 1, 1]);

  //$ExpectError
  const ys6: { [key: string]: string, ... } = _.fromPairs([["h", 2]]);

  describe('without', () => {
    it('should work with basic array', () => {
      const arr1: Array<number> = without([1, 2], [1, 2, 3, 4, 5]);
      const arr2: Array<string> = without(['a'])(['a', 'b', 'c']);
    });
    it('should fail when first list does not match second list type', () => {
      // $ExpectError
      const arr1: Array<number> = without(['1', '2'], [1, 2, 3, 4, 5]);
      // $ExpectError
      const arr2: Array<string> = without([1])(['a', 'b', 'c']);
    });
    it('should work with readonly array', () => {
      const list1: $ReadOnlyArray<number|string> =  [1, 'four', 5];
      const list2: $ReadOnlyArray<number|string> =  [1, 'two', 3, 'four', 5];
      const arr1: Array<number|string> = without(list1, list2);
      const arr2: Array<number|string> = without(list1)(list2);
    });
    it('should list1 be a subset of list2', () => {
      const list1: $ReadOnlyArray<number> =  [1, 3, 5];
      const list2: $ReadOnlyArray<number|string> =  [1, 'four', 5];
      const arr1: Array<number|string> = without(list1, list2);
      // $ExpectError
      const arr2: Array<number> = without(list2, list1);
    });
  });

  const xprodxs: Array<[number, string]> = _.xprod([1, 2], ["a", "b", "c"]);
  const xprodxs1: Array<[boolean, string]> = _.xprod([true, false])(["a", "b"]);

  const zipxs: Array<[number, string]> = _.zip([1, 2, 3], ["a", "b", "c"]);

  //$ExpectError
  const zipxs1: Array<[number, string]> = _.zip([true, false])(["a", "b"]);

  const zipos: { [k: string]: number, ... } = _.zipObj(["a", "b", "c"], [1, 2, 3]);

  const ys9: { [k: string]: number, ... } = _.zipObj(["me", "you"], [1, 2]);
  const zipped: Array<{
    s: number,
    y: string,
    ...
  }> = zipWith(
    (a, b) => ({ s: a, y: b }),
    [1, 2, 3],
    ["1", "2", "3"]
  );
  const zipped2: Array<{
    s: number,
    y: string,
    ...
  }> = _.zipWith(
    (a, b) => ({ s: a, y: b }),
    [1, 2, 3]
  )(["1", "2", "3"]);
  const zipped3: Array<{
    s: number,
    y: string,
    ...
  }> = _.zipWith((a, b) => ({
    s: a,
    y: b
  }))([1, 2, 3])(["1", "2", "3"]);

  describe('uniq', () => {
    it('should accept read only array', () => {
      const readOnlyNumbers: $ReadOnlyArray<number> = [1,1,2,3,4,3];
      const result:$ReadOnlyArray<number> = uniq(readOnlyNumbers);
    });

    it('should fail when element type mismatches', () => {
      const readOnlyNumbers: $ReadOnlyArray<number> = [1,1,2,3,4,3];
      //$ExpectError
      const result:$ReadOnlyArray<string> = uniq(readOnlyNumbers);

      const mix = ['1', 2, true];
      //$ExpectError
      const result: $ReadOnlyArray<string> = uniq(mix);
    });

    it('should accept read only array when expecting mutable array as output', () => {
      const readOnlyNumbers: $ReadOnlyArray<number> = [1,1,2,3,4,3];
      const result: Array<number> = uniq(readOnlyNumbers);
    });

    it('should accept mutable array as input and read only array as output', () => {
      const readOnlyStrings: Array<string> = ['foo', 'bar'];
      const result1: $ReadOnlyArray<string> = uniq(readOnlyStrings)
    });

    it('should accept mutable array', () => {
      const arr: Array<string> = ['1', '2', '3'];
      const result: Array<string> = uniq(arr);
    });

    it('should accept a mixed element type array', () => {
      const arr: Array<string|number|boolean> = ['foo', 1, false]
      const result: Array<string|number|boolean> = uniq(arr)
    });

    //Reason not to test the other way around, namely, Array<A> to $ReadOnlyArray<A> is because
    //$ReadOnlyArray is a supertype of Array https://flow.org/en/docs/types/arrays/#toc-readonlyarray
  })
}
