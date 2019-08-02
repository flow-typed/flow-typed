/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import { describe, it } from 'flow-typed-test';
import _, {
  compose,
  curry,
  filter,
  find,
  lens,
  lensProp,
  lensIndex,
  pipe,
  over,
  repeat,
  set,
  values,
  view,
  zipWith,
} from "ramda";

const ns: Array<number> = [1, 2, 3, 4, 5];
const ss: Array<string> = ["one", "two", "three", "four"];
const obj: { [k: string]: number, ... } = { a: 1, c: 2 };
const objMixed: { [k: string]: mixed, ... } = { a: 1, c: "d" };
const os: Array<{ [k: string]: *, ... }> = [{ a: 1, c: "d" }, { b: 2 }];
const str: string = "hello world";

describe("Object", () => {
  describe("assoc", () => {
    it("should return more exact type when passed key hasn't in passed object", () => {
      (_.assoc("c", "s", { a: 1, b: 2 }): {
        a: number,
        b: number,
        c: string,
        ...
      });

      (_.assoc("x", { x1: 11 }, { y: ["y1"] }): {
        x: { [string]: number, ... },
        y: Array<string>,
        ...
      });
    });

    it("should return sum types when passed key already has in passed object", () => {
      (_.assoc("a", "s", { a: 1, b: 2 }): {
        a: number | string,
        b: number | string,
        ...
      });
    });
  });

  /**
   * Normally we don't want to mix our tests with multiple functions (dependent
   * tests can be difficult to reason about). Ramda's over works specifically
   * with the various lens types, however.
   *
   * lensPath is not covered as cooperating with over because lensPath may not
   * be expressible in Flow.
   */
  describe('over', () => {
    it('works with lens', () => {
      const data = {
        a: 'foo',
        b: 4,
        c: true,
      }

      const l = lens(x => x.b, (v, d) => ({
        a: d.a,
        b: v,
        c: d.c,
      }))
      const result: typeof data = over(l, x => -x, data)
    })

    it('works with lensIndex', () => {
      const xs: Array<number> = [1, 2, 3]
      const result: Array<number> = over(lensIndex(0), x => x + 1, xs)
    })

    it('works with lensProp', () => {
      const data = {
        a: 'foo',
        b: 4,
        c: true,
      }

      const result: typeof data = over(lensProp('c'), () => true, data)
    })

    it('produces an output type that results from the mapping function and input (object)', () => {
      type TransformedData = { a: number, ... }
      const data = {
        a: 'foo',
      }

      const result: TransformedData = over(lensProp('a'), s => 0, data)
    })

    it('requires the lens works with the functor provided (object)', () => {
      type Data = { a: string, ... }
      const data: Data = {
        a: 'foo',
      }

      // $ExpectError
      const result = over(lensProp('b'), s => s.toUpperCase(), data)
    })

    it('requires the mapping function provides the correct type (object)', () => {
      const data = {
        a: 'foo',
      }

      // $ExpectError
      const result = over(lensProp('a'), (s: number) => s + 1, data)
    })


    it('requires the mapping function provides the correct type (non-object)', () => {
      const xs: Array<number> = [1, 2, 3]
      // $ExpectError
      const result: Array<number> = over(lensIndex(0), (x: string) => x.toUpperCase(), xs)
    })
  })

  /**
   * Normally we don't want to mix our tests with multiple functions (dependent
   * tests can be difficult to reason about). Ramda's set works specifically
   * with the various lens types, however.
   *
   * lensPath is not covered as cooperating with set because lensPath may not
   * be expressible in Flow.
   */
  describe('set', () => {
    it('works with lens', () => {
      const data = {
        a: 'foo',
        b: 4,
        c: true,
      }

      const l = lens(x => x.b, (v, d) => ({
        a: d.a,
        b: v,
        c: d.c,
      }))
      const result: typeof data = set(l, 3, data)
    })

    it('works with lensIndex', () => {
      const xs: Array<string> = ['a', 'b', 'c']
      const result: Array<string> = set(lensIndex(0), 'd', xs)
    })

    it('works with lensProp', () => {
      const data = {
        a: 'foo',
        b: 4,
        c: true,
      }

      const result: typeof data = set(lensProp('c'), true, data)
    })

    // This scenario doesn't work in the present form.
    it('produces an output type that results from the mapping function and input (functor)', () => {
      const data: [number] = [0]
      // $ExpectError
      const result: [string] = over(lensIndex(0), 'foo', data)
    })

    it('requires the lens works with the functor provided (object)', () => {
      type Data = { a: string, ... }
      const data: Data = {
        a: 'foo',
      }

      // $ExpectError
      const result: Data = set(lensProp('b'), 'FOO', data)
    })
  })

  /**
   * Normally we don't want to mix our tests with multiple functions (dependent
   * tests can be difficult to reason about). Ramda's view works specifically
   * with the various lens types, however.
   *
   * lensPath is not covered as cooperating with view because lensPath may not
   * be expressible in Flow.
   */
  describe('view', () => {
    it('works with lens', () => {
      type Data = {
        a: string,
        b: number,
        c: boolean,
        ...
      }
      const data = {
        a: 'foo',
        b: 4,
        c: true,
      }

      const l = lens(x => x.b, (v, d) => ({
        a: d.a,
        b: v,
        c: d.c,
      }))
      const result: Data = set(l, 3, data)
    })

    it('works with lensIndex', () => {
      type Data = { a: string, ... }
      const xs: Array<number> = [1, 2, 3]
      const result: number = view(lensIndex(0), xs)
    })

    it('works with lensProp', () => {
      type Data = { a: string, ... }
      const data = { a: 'foo' }
      const result: string = view(lensProp('a'), data)
    })

    it('fails when the lensProp refers to a non-existent field', () => {
      type Data = { a: string, ... }
      const data = { a: 'foo' }
      // $ExpectError
      const result: string = view(lensProp('b'), data)
    })

    it('produces the correct result type', () => {
      type Data = { a: string, ... }
      const data = { a: 'foo' }
      // $ExpectError
      const result: number = view(lensProp('a'), data)
    })
  })
});

const apath: { [k: string]: number | string | Object, ... } = _.assocPath(
  ["a", 0, "c"],
  "s",
  { a: [ { c: 0 } ] }
);

const tomato = {
  firstName: "  Tomato ",
  data: { elapsed: 100, remaining: 1400 },
  id: 123
};
const tomato1 = {
  firstName: "  Tomato ",
  data: { elapsed: 100, remaining: 1400 }
};

// TODO: Started failing in v31...
// const transformations = {
//   firstName: _.trim,
//   lastName: _.trim,
//   data: {
//     elapsed: _.add(1),
//     remaining: _.add(-1),
//   },
// }
// const evolved:{firstName: string, data: {elapsed: number, remaining: number}, id: number} = _.evolve(transformations, tomato)

const objects = [{}, {}, {}];
const objectsClone: Array<Object> = _.clone(objects);
const objectsClone1: number = _.clone(1);
const objectsClone2: typeof tomato = _.clone(tomato);
//$ExpectError
const objectsClone3: $Shape<typeof tomato1> = _.clone(tomato);
const objectsClone4: $Shape<typeof tomato1> = _.clone(tomato1);

const id = objectsClone2.id;
//$ExpectError
const idE = objectsClone4.id;

const dissocd: { a: number, ... } = _.dissoc("b", { a: 1, b: 2 });
const dissocd2: { a: number, ... } = _.dissoc("b")({ a: 1, b: 2 });
//$ExpectError
const dissocd3: { a: string, ... } = _.dissoc("b", { a: 1, b: 2 });
//$ExpectError
const dissocd4: { a: string, ... } = _.dissoc("b")({ a: 1, b: 2 });

const dissocPathd: { a: { b: number, ... }, ... } = _.dissocPath(["a", "c"], {
  a: { b: 1, c: 2 }
});
const dissocPathd2: { a: { b: number, ... }, ... } = _.dissocPath(["a", "c"])({
  a: { b: 1, c: 2 }
});
const dissocPathd3: { a: { b: number, ... }, ... } = _.dissocPath(["a", "c", 0])({
  a: { b: 1, c: [2] }
});
//$ExpectError
const dissocPathd4: { a: { b: string, ... }, ... } = _.dissocPath(["a", "c"], {
  a: { b: 1, c: 2 }
});
//$ExpectError
const dissocPathd5: { a: { b: string, ... }, ... } = _.dissocPath(["a", "c"])({
  a: { b: 1, c: 2 }
});


const o1 = { a: 1, b: 2, c: 3, d: 4 };
const o2 = { a: 10, b: 20, c: 3, d: 40 };

const ep: boolean = _.eqProps("a", o1, o2);

// curried versions
const epCurr: boolean = _.eqProps("a")(o1, o2);
const ep2: boolean = _.eqProps("c", o1)(o2);

const evolved1 = _.evolve(
  {
    foo: x => x + 1,
    bar: x => x + 2
  },
  {
    foo: 1,
    bar: 2
  }
);
const evolved2 = _.evolve({
  foo: x => x + 1,
  bar: x => x + 2
})({
  foo: 1,
  bar: 2
});
const evolved3 = _.evolve(
  {
    foo: x => x + 1
  },
  {
    bar: 1
  }
);
const evolved4 = _.evolve({
  foo: x => x + 1
})({
  bar: 1
});
//$ExpectError
const evolved5: number = evolved4.foo;
//$ExpectError
const evolved6 = _.evolve(["foo"]);

const has: boolean = _.has("id", tomato);
const has2: boolean = _.has("id")(tomato);

const hasPath1: boolean = _.hasPath(['a', 'b'], {a: {b: 2}});
const hasPath2: boolean = _.hasPath(['a', 0, 'c'])({a: [{c: 2}]});

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
};

const square = new Rectangle(2, 2);
const hasIn: boolean = _.hasIn("width", square);
const hasIn1: boolean = _.hasIn("area", square);

const raceResultsByFirstName = {
  first: "alice",
  second: "jake",
  third: "alice"
};
const inverted: { [k: string]: Array<string>, ... } = _.invert(
  raceResultsByFirstName
);
const inverted1: { [k: string]: string, ... } = _.invertObj(raceResultsByFirstName);

const ks: Array<string> = _.keys(raceResultsByFirstName);
const ksMaybe: Array<string> = _.keys(null)
const ksi: Array<string> = _.keysIn(square);

const xs = { x: 1, y: 2, z: 3 };
const prependKeyAndDouble = (num, key, obj) => key + num * 2;

const obI: { [k: string]: string, ... } = _.mapObjIndexed(
  prependKeyAndDouble,
  xs
);
//$ExpectError
const obI2: { [k: string]: number, ... } = _.mapObjIndexed(
  prependKeyAndDouble,
  xs
);

const ob1 = { a: 1 };
const ob2 = { b: 3 };
const ob3 = _.merge(ob1, ob2);
//$ExpectError
const propX = ob3.x;
const propA = ob3.a;

const mLeft: Object = _.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
const mLeftName: string = mLeft.name;
const mLeftAge: number = mLeft.age;
const mLeft2: Object = _.mergeLeft({x: 0})({x: 5, y: 2});
const mLeftX: number = mLeft2.x;
const mLeftY: number = mLeft2.y;

const mRight: Object = _.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
const mRightName: string = mRight.name;
const mRightAge: number = mRight.name;
const mRight2: Object = _.mergeRight({x: 0, y: 0})({y: 2});
const mRightX: number = mRight2.x;
const mRightY: number = mRight2.y;

const mwith = _.mergeWith(
  (a, b) => Array.isArray(a) && _.concat,
  { a: true, values: [10, 20] },
  { b: true, values: [15, 35] }
);
const propB: boolean = mwith.b;

const mwithK = _.mergeWithKey(
  (k, a, b) => Array.isArray(a) && k === "d" && _.concat,
  { a: true, values: [10, 20] },
  { b: true, values: [15, 35] }
);
const propB1: boolean = mwithK.b;

const mDwith = _.mergeDeepWith(
  _.concat,
  { a: true, values: [10, 20] },
  { b: true, values: [15, 35] }
);
const propmDwithB: boolean = mDwith.b;

const concatValues = (k, l, r) => k == 'values' ? _.concat(l, r) : r
const mDwithKey = _.mergeDeepWithKey(
  concatValues,
  { a: true, c: { thing: 'foo', values: [10, 20] }},
  { b: true, c: { thing: 'bar', values: [15, 35] }}
);
const propmDwithKeyB: boolean = mDwithKey.b;

const mDLeft = _.mergeDeepLeft(
  { a: true, values: [10, 20] },
  { b: true, values: [15, 35] }
);
const propB2: boolean = mDLeft.a;
const propB3: boolean = mDLeft.b;
const propB4: 10 = mDLeft.values[0];

const mDRight = _.mergeDeepRight(
  { a: true, values: [10, 20] },
  { b: true, values: [15, 35] }
);
const propB5: boolean = mDRight.a;
const propB6: boolean = mDRight.b;
const propB7: 15 = mDRight.values[0];

const objA = _.objOf("a", false);
//$ExpectError
const propAA: number = objA.a;

const om: Object = _.omit(["a", "d", "h"], { a: 1, b: 2, c: 3, d: 4 });
const omap1 = _.omit(["a", "d", "h"], { a: 1, b: 2, c: 3, d: 4, h: 7 });
const omap2 = _.omit(["a", "d", "h"])({ a: 1, b: 2, c: 3, d: 4 });

const path1: Object | number = _.path(["a", "b"], { a: { b: 2 } });
const path2: Object | number = _.path(["a", 1], { a: { "1": 2 } });
const path3: ?Object = _.path(["a", "b"], { c: { b: 2 } });
const path4: void = _.path(["a"], null);

const pathOr: string | Object | number = _.pathOr("N/A", ["a", "b", 0], {
  a: { b: [2] }
});

describe('pick', () => {
  it('should works', () => {
    const pck = _.pick(["a", "d"], { a: 1, b: 2, c: 3, d: '4' });
    const a: number = pck.a;
    const d: string = pck.d;

    //$ExpectError
    const e = pck.e;
  });
  it('should fail with not existing props', () => {
    //$ExpectError
    const pck = _.pick(["b", "r"], { a: 1, b: 2, c: 3, d: '4' });
  });
});


const ooo = { a: 1, b: 2, A: 3, B: 4 };
const isUpperCase = (val, key) => key.toUpperCase() === key;
const pb: Object = _.pickBy(isUpperCase, ooo);

const ppp: number = _.prop("x", { x: 100 });
//$ExpectError
const ppp1: number = _.prop("y", { x: 100 });
const ppp2: number = _.prop("x")({ x: 100 });
//$ExpectError
const ppp3: string = _.prop("x", { x: 100 });
const ppp4: number = _.prop(_.__, { x: 100 })("x");
//$ExpectError
const ppp5: number = _.prop(_.__, { x: 100 })("y");
const ppp6: number = _.prop("x", ({ x: 1, y: "a" }: {
  x: number,
  y: string,
  ...
}));
const ppp7: number = _.prop("x", ({ x: 1 }: { [string]: number, ... }));
//$ExpectError
const ppp8: string = _.prop("x", ({ x: 1 }: { [string]: number, ... }));

const alice = {
  name: "ALICE",
  age: 101
};

const favoriteWithDefault = _.propOr("Ramda", "favoriteLibrary");
const fav = favoriteWithDefault(alice);

const nameWithDefault = _.propOr("Ramda", "name");
const nm: number | string = nameWithDefault(alice);

const pss1: Array<number | boolean> = _.props(["x", "y"], {
  x: true,
  y: 2,
  z: "foo"
});
const pss2: Array<number | boolean> = _.props(
  ["x", "y"],
  ({ x: true, y: 2, z: "foo" }: {
  x: boolean,
  y: number,
  ...
})
);
const pss3: Array<number> = _.props(["y"], { x: true, y: 2, z: "foo" });
const pss4: Array<number> = _.props(["y"], ({ y: 2 }: { [string]: number, ... }));
//$ExpectError -- wrong key
const pssE1: Array<number | boolean> = _.props(["d", "y"], {
  x: true,
  y: 2,
  z: "foo"
});
//$ExpectError -- wrong type
const pssE2: Array<string | boolean> = _.props(["x", "y"], {
  x: true,
  y: 2,
  z: "foo"
});
//$ExpectError -- wrong type on indexer value
const pssE3: Array<string> = _.props(["y"], ({ y: 2 }: { [string]: number, ... }));

const top: Array<["a" | "b" | "c", number]> = _.toPairs({ a: 1, b: 2, c: 3 });

//$ExpectError
const topE: Array<["a" | "b" | "c" | "z", number]> = _.toPairs({
  a: 1,
  b: 2,
  c: 3
});

const F = function() {
  this.x = "X";
};
F.prototype.y = "Y";
const f = new F();
const topin = _.toPairsIn(f);

describe('values', () => {
  it('provides a union per element when the types of all values vary', () => {
    const val = values({ a: 1, b: 2, c: true });
    const val1: number | boolean = val[0];
  })

  it('works with the example in the docs http://ramdajs.com/docs/#values', () => {
    const vs: Array<number> = values({a: 1, b: 2, c: 3})
  })
})

const pred = _.where({
  a: (a: string) => a === "foo",
  b: _.complement(_.equals("bar")),
  c: (c: Object) => !!c,
  x: _.gt(10),
  y: _.lt(20),
});

const w: boolean = pred({ a: "foo", b: "xxx", c: {}, x: 11, y: 19 });

const pred1 = _.whereEq({ a: 1, b: 2 });

const win: boolean = pred1({ a: 1, d: 1 });
