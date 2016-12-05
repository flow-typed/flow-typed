/* @flow */

import {expect, assert} from "chai";

/**
 * Word chains
 */
expect(true)
  .and.at.be.been.have.has
  .is.of.same.that.to.which
  .with.not.deep.any.all.a.an.eql(false);

/**
 * Simple Assertions
 */
expect(1).to.be.a("number");
expect([1]).to.be.an("array");
// $ExpectError
expect(1).to.be.a(["fail"]);

expect([1]).to.include(1);
expect([1]).which.includes(1);
expect([1]).to.contain(1);
expect([1]).which.contains(1);

expect(1).to.eql(2);
expect(1).to.equal(2);
expect(1).which.equals(2);

expect(1).to.be.above(7);
expect(1).to.be.at.least(7);
expect(1).to.be.below(7);
expect(1).to.be.at.most(7);
expect(1).to.be.within(5, 6);

expect(new Date()).to.be.an.instanceof(Date);
expect({a: 1}).to.have.property("a");
expect({a: 1}).to.have.property("a").which.is.above(0);
expect({a: 1}).to.have.property("a", 1);

expect([1,2,3]).to.have.length.above(2);
expect([1,2,3]).to.have.lengthOf(3);

expect("abc").to.match(/[a-z]{3}/);
expect("abc").to.have.string("b");

expect({a: 1, b: 2}).to.have.key("a");
expect({a: 1, b: 2}).to.have.keys("a", "b");
expect({a: 1, b: 2}).to.have.keys(["a", "b"]);

expect(() => {}).to.throw(Error);
expect(() => {}).to.throw(new Error("stuff"));
expect(() => {}).to.throw("stuff");
expect(() => {}).to.throw(Error, "stuff");
expect(() => {}).to.throw(/stuff/);
expect(() => {}).to.throw(ReferenceError, /stuff/);

expect({}).to.respondTo("bar");
expect(Error).itself.to.respondTo("bar");

expect(1).to.satisfy((x) => x > 0);
// $ExpectError
expect(1).to.satisfy((x, y) => x * y);

expect(0.3 - 0.2).to.be.closeTo(0.1, 1e-3);

expect([1, 2, 3]).to.include.members([3, 2]);

expect('a').to.be.oneOf(['a', 'b', 'c']);

expect((x) => x).to.change({val: 0}, 'val');
expect((x) => x).to.increase({val: 0}, 'val');
expect((x) => x).to.decrease({val: 0}, 'val');


// $ExpectError
expect(1).to.what("nope");

//
// assert API (http://chaijs.com/api/assert/)
//

// expression
assert("1" === "1", 'with message');
assert("1" === "1");
// $ExpectError
assert("1" === "1", 2);

// test standard assert function with overloaded message
assert.fail(1, 2, 'numbers are not the same');
assert.fail("aa", "a");

// test constructor / function checking
class SampleClass{constructor(){}};
var instance = new SampleClass();
assert.instanceOf(instance, SampleClass, "instance check");
// $ExpectError
assert.instanceOf(instance, instance);
assert.notInstanceOf(instance, Array);
