/* @flow */

import { expect, assert, config } from "chai";

/**
 * Word chains
 */
expect(
  true
).and.at.be.been.have.has.is.of.same.that.to.which.with.not.deep.any.all.a.an.eql(
  false
);

// $ExpectError
expect(1).to.what("nope");

// Fail message
expect(1, "Fail");

/**
 * Config
 */
config.includeStack = true;
config.showDiff = true;
config.truncateThreshold = 200;

// $ExpectError
config.includeStack = 100;

// $ExpectError
config.showDiff = 100;

// $ExpectError
config.truncateThreshold = true;

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

expect(1).to.eq(2);
expect(1).to.eql(2);
expect(1).to.equal(2);
expect(1).which.equals(2);

expect(1).to.be.above(7);
expect(1).to.be.at.least(7);
expect(1).to.be.below(7);
expect(1).to.be.at.most(7);
expect(1).to.be.within(5, 6);

expect(new Date()).to.be.an.instanceof(Date);
expect({ a: 1 }).to.have.property("a");
expect({ a: 1 })
  .to.have.property("a")
  .which.is.above(0);
expect({ a: 1 }).to.have.property("a", 1);
expect({ a: { b: 1 } }).to.have.nested.property("a.b", 1);

expect([1, 2, 3]).to.have.length.above(2);
expect([1, 2, 3]).to.have.lengthOf(3);
expect([1, 2, 3]).to.have.length(3);
// $ExpectError
expect([1, 2, 3]).to.have.length("three");

expect("abc").to.match(/[a-z]{3}/);
expect("abc").to.have.string("b");

expect({ a: 1, b: 2 }).to.have.key("a");
expect({ a: 1, b: 2 }).to.have.keys("a", "b");
expect({ a: 1, b: 2 }).to.have.keys(["a", "b"]);

expect(() => {}).to.throw();
expect(() => {}).to.throw(Error);
expect(() => {}).to.throw(new Error("stuff"));
expect(() => {}).to.throw("stuff");
expect(() => {}).to.throw(Error, "stuff");
expect(() => {}).to.throw(/stuff/);
expect(() => {}).to.throw(ReferenceError, /stuff/);

expect({}).to.respondTo("bar");
expect(Error).itself.to.respondTo("bar");

expect(1).to.satisfy(x => x > 0);
// $ExpectError
expect(1).to.satisfy((x, y) => x * y);

expect(0.3 - 0.2).to.be.closeTo(0.1, 1e-3);

expect([1, 2, 3]).to.include.members([3, 2]);
expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);

expect("a").to.be.oneOf(["a", "b", "c"]);

expect(x => x).to.change({ val: 0 }, "val");
expect(x => x).to.increase({ val: 0 }, "val");
expect(x => x).to.decrease({ val: 0 }, "val");

/**
 * assert API (http://chaijs.com/api/assert/)
 */

// expression
assert("1" === "1", "with message");
assert("1" === "1");
// $ExpectError
assert("1" === "1", 2);

// test standard assert function with overloaded message
assert.fail(1, 2, "numbers are not the same");
assert.fail("aa", "a");

// test constructor / function checking
class SampleClass {
  constructor() {}
}
var instance = new SampleClass();
assert.instanceOf(instance, SampleClass, "instance check");
// $ExpectError
assert.instanceOf(instance, instance);
assert.notInstanceOf(instance, Array);

// tests for chai-as-promised
expect(Promise.resolve(true))
  .to.eventually.equal(true)
  .notify(function() {});
expect(Promise.resolve(true))
  .to.eventually.be.resolved()
  .then(function() {})
  .catch(function() {});
expect(Promise.resolve(true))
  .to.eventually.be.resolvedWith(true)
  .then(function() {})
  .catch(function() {});
expect(Promise.resolve(true))
  .to.eventually.be.rejected()
  .then(function() {})
  .catch(function() {});
expect(Promise.resolve(true))
  .to.eventually.be.rejectedWith(Error)
  .then(function() {})
  .catch(function() {});

// tests for chai-subset
expect({}).to.containSubset({});
expect([{}]).to.containSubset([{}]);
// $ExpectError
expect({}).to.containSubset(0);

// tests for chai-redux-mock-store
expect({}).to.have.dispatchedActions([
  action => {
    expect(action).to.have.property("type", "HELLO");
  },
  { type: "SOME_TYPE", payload: { name: "John Doe" } }
]);
expect({}).to.contain.dispatchedActions([
  action => {
    expect(action).to.have.property("type", "HELLO");
  },
  { type: "SOME_TYPE", payload: { name: "John Doe" } }
]);
expect({}).to.have.dispatchedTypes(["HELLO", "OTHER_ACTION"]);
expect({}).to.contain.dispatchedTypes(["HELLO", "OTHER_ACTION"]);
// $ExpectError
expect({}).to.have.dispatchedActions(["HELLO", "OTHER_ACTION"]);
// $ExpectError
expect({}).to.have.dispatchedTypes([
  action => {
    expect(action).to.have.property("type", "HELLO");
  },
  { type: "SOME_TYPE", payload: { name: "John Doe" } }
]);

// chai-enzyme
expect({ }).to.have.attr('key', 1);
expect({ }).to.have.data('key', 1);
expect({ }).to.have.prop('key', 1);
expect({ }).to.have.state('key', 1);
expect({ }).to.have.value('val');

//chai-karma-snapshot
expect('test').to.matchSnapshot();
expect('<div></div>').to.matchSnapshot('html');
expect('<div></div>').to.matchSnapshot('html', true);
expect('<div></div>').to.matchSnapshot('html', true, 'Message');
// $ExpectError
expect('<div></div>').to.matchSnapshot('html', 'not_boolean', 'Message');
