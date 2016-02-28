/*
 * Tests to verify that certain operations pass type-checking.
 *
 * Tested with Flow v0.22.0
 *
 * Copied from:
 * https://github.com/hallettj/mori/blob/feature/flow-types/spec/mori-spec.js
 *
 * @flow
 */

var mori = require("mori");

/*:: declare var describe: Function */
/*:: declare var it: Function */
/*:: declare var expect: Function */

/*:: import type { Collection, Map, Pair, Seq, Vector } from "mori" */

describe("type-checking", function () {

  it("preserves collection type", function () {
    var v  = mori.vector(1, 2, 3);
    var v_ = mori.conj(v, 4);
    mori.subvec(v_, 0);  // operation requires type to be a `Vector<*>`
    var n/*: ?number */ = mori.first(v_);  // requires `number` type parameter to be preserved

    var m  = mori.hashMap('foo', 1, 'bar', 2);
    var m_ = mori.into(m, mori.list(mori.vector('nao', 3)))
    mori.keys(m_);  // operation requires `Map<*,*>` type to be preserved
  });

  it("returns default value when key is not found", function () {
    var m = mori.hashMap('foo', 1, 'bar', 2);
    var guaranteed/*: number */ = mori.get(m, 'nao', 3);
    var not_guaranteed/*: ?number */ = mori.get(m, 'nao');
  });

  it("creates consistently-typed zipmap", function () {
    var strings = mori.vector('foo', 'bar', 'nao');
    var numbers = mori.vector(1, 2, 3);
    var m = mori.zipmap(strings, numbers);
    const s/*: ?string */ = mori.first(mori.keys(m));
    const n/*: ?number */ = mori.first(mori.vals(m));
  });

  it("potentially broadens type of map on `merge`", function () {
    var ma/*: Map<string,string> */ = mori.hashMap('foo', 'one', 'bar', 'two');
    var mb/*: Map<number,number> */ = mori.hashMap(1, 1, 2, 2, 3, 3);
    var m/*: Map<number|string,number|string> */  = mori.merge(ma, mb);
  });

  it("tracks input types for each transformation function in `map` and `mapcat`", function () {
    var strings = mori.vector('foo', 'bar', 'nao');
    var numbers = mori.vector(1, 2, 3);

    var pairs/*: Seq<[string, number]> */ =
      mori.map(function(s, n) { return [s, n]; }, strings, numbers);

    var reps/*: Seq<string> */ =
      mori.mapcat(function(s, n) { return mori.repeat(n, s); }, strings, numbers);
  });

  it("potentially broadens type of collection on `partition`", function () {
    var numbers = mori.vector(1, 2, 3, 4, 5);
    var padded/*: Seq<Seq<number|string>> */ = mori.partition(2, 2, 'xyz', numbers);
    var unpadded/*: Seq<Seq<number>> */ =  mori.partition(2, numbers);
  });

  it("applies `primeSeq` to `arguments`", function () {
    function asSeq() {
      return mori.primSeq(arguments);
    }
    expect(mori.intoArray(asSeq(2,3))).toEqual([2,3])
  });

  it("composes functions, keeping track of type changes", function () {
    var f = mori.comp(
      (function(x) { return mori.count(x) > 2; }      /*: (_: Seq<string>) => boolean */),
      (function(x) { return mori.repeat(x, 'foo'); }  /*: (_: number) => Seq<string> */),
      (function(x) { return x.toLowerCase().length; } /*: (_: string) => number */)
    );
    var r1/*: boolean */ = f('foo');

    var g = mori.comp(mori.isOdd, mori.inc);
    var r2/*: boolean */ = g(3);
  });

  it("pipelines functions, keeping track of type changes", function () {
    var r1/*: boolean */ = mori.pipeline('foo',
      (function(x) { return x.toLowerCase().length; } /*: (_: string) => number */),
      (function(x) { return mori.repeat(x, 'foo'); }  /*: (_: number) => Seq<string> */),
      (function(x) { return mori.count(x) > 2; }      /*: (_: Seq<string>) => boolean */)
    );

    var r2/*: boolean */ = mori.pipeline(3, mori.inc, mori.isOdd);
  });

  it("partially applies functions", function () {
    var v/*: Vector<number> */ = mori.vector(1,2,3);
    var f = mori.partial(mori.conj, v);
    var v_/*: Vector<number> */ = f(4);

    // $ExpectError intersection: type application of polymorphic type: type `Associative` & type application of polymorphic type: type `Collection` & type application of polymorphic type: type `Keyed` & type application of polymorphic type: type `Sequential`. This type is incompatible with declare type Vector<A> = Associative<number,A>
    var v__/*: Vector<string> */ = f(4);
  });

  it("'curries' functions", function () {
    var v/*: Vector<number> */ = mori.vector(1,2,3);
    var f = mori.curry(mori.conj, 4);
    var v_/*: Vector<number> */ = f(v);

    // $ExpectError intersection: type application of polymorphic type: type `Associative` & type application of polymorphic type: type `Collection` & type application of polymorphic type: type `Keyed` & type application of polymorphic type: type `Sequential`. This type is incompatible with declare type Vector<A> = Associative<number,A>
    var v__/*: Vector<string> */ = f(v);
  });

  it("infers that a pair is guaranteed to have two elements with distinct types", function () {
    var m/*: Map<string,number> */ = mori.hashMap('foo', 1, 'bar', 2);
    var p = mori.first(m);
    if (!p) { return; }  // Assures the type-checker that `p` is not `null`

    (mori.get(p, 0)/*: string */);
    (mori.get(p, 1)/*: number */);

    var v = mori.vector(1,2,3);
    (mori.get(v, 2)/*: ?number */);
  });

  it("transforms a Mori pair into a native Javascript pair", function () {
    // Producing a native array is useful for destructuring assignment.
    var m/*: Map<string,number> */ = mori.hashMap('foo', 1, 'bar', 2);
    var p = mori.first(m)
    if (!p) { return; }  // Assures the type-checker that `p` is not `null`
    var a = mori.intoArray(p)
    var k/*: string */ = a[0]
    var v/*: number */ = a[1]
  })

});
