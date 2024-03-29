/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import { describe, it } from 'flow-typed-test';
import _, {
  compose,
  curry,
  filter,
  find,
  pipe,
  repeat,
  values,
  zipWith,
  propOr,
  __
} from "ramda";

const ns: Array<number> = [1, 2, 3, 4, 5];
const ss: Array<string> = ["one", "two", "three", "four"];
const obj: { [k: string]: number, ... } = { a: 1, c: 2 };
const objMixed: { [k: string]: mixed, ... } = { a: 1, c: "d" };
const os: Array<{ [k: string]: any, ... }> = [{ a: 1, c: "d" }, { b: 2 }];
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

  describe('propOr', () => {
    const testObj = {
      name: 'Wilson'
    };

    describe('should return default', () => {
      it('with __', () => {
        const def1_1: number = propOr(__, 'age', testObj)(32);
        const def1_2: number = propOr(__, 'age', null)(32);
        const def1_3: number = propOr(__, 'age', undefined)(32);
        const def1_4: number = propOr(__, 'age', 'string')(32);
        const def1_5: number = propOr(__, 'age', 50)(32);

        const def2_1: number = propOr(32, __, testObj)('age');
        const def2_2: number = propOr(32, __, null)('age');
        const def2_3: number = propOr(32, __, undefined)('age');
        const def2_4: number = propOr(32, __, 'string')('age');
        const def2_5: number = propOr(32, __, 50)('age');

        const def3_1: number = propOr(32, 'age', __)(testObj);
        const def3_2: number = propOr(32, 'age', __)(null);
        const def3_3: number = propOr(32, 'age', __)(undefined);
        const def3_4: number = propOr(32, 'age', __)('string');
        const def3_5: number = propOr(32, 'age', __)(50);

        const def4_1: number = propOr(__, 'age')(32)(testObj);
        const def4_2: number = propOr(__, 'age')(32)(null);
        const def4_3: number = propOr(__, 'age')(32)(undefined);
        const def4_4: number = propOr(__, 'age')(32)('string');
        const def4_5: number = propOr(__, 'age')(32)(50);

        const def5_1: number = propOr(32, __)('age')(testObj);
        const def5_2: number = propOr(32, __)('age')(null);
        const def5_3: number = propOr(32, __)('age')(undefined);
        const def5_4: number = propOr(32, __)('age')('string');
        const def5_5: number = propOr(32, __)('age')(50);
      });

      it('without __', () => {
        const def1_1: number = propOr(32, 'age', testObj);
        const def1_2: number = propOr(32, 'age', null);
        const def1_3: number = propOr(32, 'age', undefined);
        const def1_4: number = propOr(32, 'age', 'string');
        const def1_5: number = propOr(32, 'age', 50);

        const def2_1: number = propOr(32, 'age')(testObj);
        const def2_2: number = propOr(32, 'age')(null);
        const def2_3: number = propOr(32, 'age')(undefined);
        const def2_4: number = propOr(32, 'age')('string');
        const def2_5: number = propOr(32, 'age')(50);

        const def3_1: number = propOr(32)('age', testObj);
        const def3_2: number = propOr(32)('age', null);
        const def3_3: number = propOr(32)('age', undefined);
        const def3_4: number = propOr(32)('age', 'string');
        const def3_5: number = propOr(32)('age', 50);

        const def4_1: number = propOr(32)('age')(testObj);
        const def4_2: number = propOr(32)('age')(null);
        const def4_3: number = propOr(32)('age')(undefined);
        const def4_4: number = propOr(32)('age')('string');
        const def4_5: number = propOr(32)('age')(50);
      });
    });

    describe('should return type from testObj', () => {
      it('without __', () => {
        const objType1: string = propOr(32, 'name', testObj);
        const objType2: string = propOr(32, 'name')(testObj);
        const objType3: string = propOr(32)('name', testObj);
        const objType4: string = propOr(32)('name')(testObj);
      });

      it('with __', () => {
        const objType1: string = propOr(__, 'name', testObj)(32);
        const objType2: string = propOr(32, __, testObj)('name');
        const objType3: string = propOr(32, 'name', __)(testObj);
        const objType4: string = propOr(__, 'name')(32)(testObj);
        const objType5: string = propOr(32, __)('name')(testObj);
      });
    });
  });
});

const apath: { [k: string]: number | string | Object, ... } = _.assocPath(
  ["a", "b", "c"],
  "s",
  { a: { b: { c: 0 } } }
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
//$FlowExpectedError
const objectsClone3: $Shape<typeof tomato1> = _.clone(tomato);
const objectsClone4: $Shape<typeof tomato1> = _.clone(tomato1);

const id = objectsClone2.id;
//$FlowExpectedError
const idE = objectsClone4.id;

const dissocd: { a: number, ... } = _.dissoc("b", { a: 1, b: 2 });
const dissocd2: { a: number, ... } = _.dissoc("b")({ a: 1, b: 2 });
//$FlowExpectedError
const dissocd3: { a: string, ... } = _.dissoc("b", { a: 1, b: 2 });
//$FlowExpectedError
const dissocd4: { a: string, ... } = _.dissoc("b")({ a: 1, b: 2 });

const dissocPathd: { a: { b: number, ... }, ... } = _.dissocPath(["a", "c"], {
  a: { b: 1, c: 2 }
});
const dissocPathd2: { a: { b: number, ... }, ... } = _.dissocPath(["a", "c"])({
  a: { b: 1, c: 2 }
});
//$FlowExpectedError
const dissocPathd3: { a: { b: string, ... }, ... } = _.dissocPath(["a", "c"], {
  a: { b: 1, c: 2 }
});
//$FlowExpectedError
const dissocPathd4: { a: { b: string, ... }, ... } = _.dissocPath(["a", "c"])({
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
//$FlowExpectedError
const evolved5: number = evolved4.foo;
//$FlowExpectedError
const evolved6 = _.evolve(["foo"]);

const hasid = _.has("id");
const has: boolean = hasid(tomato);

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
//$FlowExpectedError
const obI2: { [k: string]: number, ... } = _.mapObjIndexed(
  prependKeyAndDouble,
  xs
);

const ob1 = { a: 1 };
const ob2 = { b: 3 };
const ob3 = _.merge(ob1, ob2);
//$FlowExpectedError
const propX = ob3.x;
const propA = ob3.a;

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
//$FlowExpectedError
const propAA: number = objA.a;

const om: Object = _.omit(["a", "d", "h"], { a: 1, b: 2, c: 3, d: 4 });
const omap1 = _.omit(["a", "d", "h"], { a: 1, b: 2, c: 3, d: 4, h: 7 });
const omap2 = _.omit(["a", "d", "h"])({ a: 1, b: 2, c: 3, d: 4 });

const path1: Object | number = _.path(["a", "b"], { a: { b: 2 } });
const path2: Object | number = _.path(["a", 1], { a: { "1": 2 } });
const path3: ?Object = _.path(["a", "b"], { c: { b: 2 } });
const path4: void = _.path(["a"], null);

const pathOr: string | Object | number = _.pathOr("N/A", ["a", "b"], {
  a: { b: 2 }
});

const pck: Object = _.pick(["a", "d"], { a: 1, b: 2, c: 3, d: 4 });

const ooo = { a: 1, b: 2, A: 3, B: 4 };
const isUpperCase = (val, key) => key.toUpperCase() === key;
const pb: Object = _.pickBy(isUpperCase, ooo);

const ppp: number = _.prop("x", { x: 100 });
//$FlowExpectedError
const ppp1: number = _.prop("y", { x: 100 });
const ppp2: number = _.prop("x")({ x: 100 });
//$FlowExpectedError
const ppp3: string = _.prop("x", { x: 100 });
const ppp4: number = _.prop(_.__, { x: 100 })("x");
//$FlowExpectedError
const ppp5: number = _.prop(_.__, { x: 100 })("y");
const ppp6: number = _.prop("x", ({ x: 1, y: "a" }: {
  x: number,
  y: string,
  ...
}));
const ppp7: number = _.prop("x", ({ x: 1 }: { [string]: number, ... }));
//$FlowExpectedError
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
//$FlowExpectedError -- wrong key
const pssE1: Array<number | boolean> = _.props(["d", "y"], {
  x: true,
  y: 2,
  z: "foo"
});
//$FlowExpectedError -- wrong type
const pssE2: Array<string | boolean> = _.props(["x", "y"], {
  x: true,
  y: 2,
  z: "foo"
});
//$FlowExpectedError -- wrong type on indexer value
const pssE3: Array<string> = _.props(["y"], ({ y: 2 }: { [string]: number, ... }));

const top: Array<["a" | "b" | "c", number]> = _.toPairs({ a: 1, b: 2, c: 3 });

//$FlowExpectedError
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

const xLens = _.lens(_.prop('x'), _.assoc('x'));
const xLensPath = _.lensPath(['y', 0, 'y']);
const xLensIndex = _.lensIndex(0);
const xLensProp = _.lensProp('x');

const dataObj = {x: 5, y: [{y: 2, z: 3}, {y: 4, z: 5}]};
const dataArr = ['a', 'b', 'c'];

const xLensView: number = _.view(xLens, dataObj);
const xLensSet: Array<{ [k: string]: any, ... }> = _.set(xLens, 4, dataObj);
const xLensOver: Array<{ [k: string]: any, ... }> = _.over(xLens, _.negate, dataObj);

const xLensPathView: number = _.view(xLensPath, dataObj);
const xLensPathSet: Array<{ [k: string]: any, ... }> = _.set(xLensPath, 4, dataObj);
const xLensPathSetCurr: Array<{ [k: string]: any, ... }> = _.set(xLensPath, 4)(dataObj);
const xLensPathOver: Array<{ [k: string]: any, ... }> = _.over(xLensPath, _.negate, dataObj);
const xLensPathOverCurr: Array<{ [k: string]: any, ... }> = _.over(xLensPath)(_.negate)(dataObj);

const xLensIndexView: number = _.view(xLensIndex, dataArr);
const xLensIndexSet: Array<string> = _.set(xLensIndex, "test", dataArr);
const xLensIndexSetCurr: Array<string> = _.set(xLensIndex)("test", dataArr);
const xLensIndexOver: Array<string> = _.over(xLensIndex, _.concat("test"), dataArr);
const xLensIndexOverCurr: Array<string> = _.over(xLensIndex, _.concat("test"))(dataArr);

const xLensPropView: number = _.view(xLensProp, dataObj);
const xLensPropSet: Array<{ [k: string]: any, ... }> = _.set(xLensProp, 4, dataObj);
const xLensPropOver: Array<{ [k: string]: any, ... }> = _.over(xLensProp, _.negate, dataObj);
const xLensPropOverCurr: Array<{ [k: string]: any, ... }> = _.over(xLensProp)(_.negate, dataObj);
