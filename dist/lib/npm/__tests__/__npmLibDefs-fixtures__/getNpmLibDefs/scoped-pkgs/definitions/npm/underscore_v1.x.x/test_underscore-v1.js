"use strict";

var _underscore = _interopRequireDefault(require("underscore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * _.find
 */
_underscore.default.find([1, 2, 3], function (x) {
  return x * 1 == 3;
}); // $ExpectError number cannot be compared to string


_underscore.default.find([1, 2, 3], function (x) {
  return x == 'a';
}); // $ExpectError number. This type is incompatible with function type.


_underscore.default.find([1, 2, 3], 1); // $ExpectError property `y`. Property not found in object literal


_underscore.default.find([{
  x: 1
}, {
  x: 2
}, {
  x: 3
}], function (v) {
  return v.y == 3;
});

_underscore.default.find([{
  x: 1
}, {
  x: 2
}, {
  x: 3
}], function (v) {
  return v.x == 3;
});
/**
 * _.findWhere
 */


_underscore.default.findWhere([{
  x: 1
}, {
  y: 2
}], {
  x: 2
}); // $ExpectError number. This type is incompatible with function type.


_underscore.default.findWhere([{
  x: 1
}, {
  y: 2
}], 1); // XXX: It would be nice if Flow could catch this error.
// See https://github.com/facebook/flow/issues/946


_underscore.default.findWhere([{
  x: 1
}, {
  x: 2
}, {
  x: 3
}], function (v) {
  return v.x == 3;
});
/**
 * _.clone
 */


_underscore.default.clone({
  a: 1
}).a == 1; // $ExpectError property `b`. Property not found in object literal

_underscore.default.clone({
  a: 1
}).b == 1; // $ExpectError number. This type is incompatible with function type.

_underscore.default.clone({
  a: 1
}).a == 'c';
/**
 * _.isEqual
 */

_underscore.default.isEqual('a', 'b');

_underscore.default.isEqual({
  x: 1
}, {
  y: 2
}); // Flow considers these compatible with isEqual(a: any, b: any).
// Reasonable people disagree about whether these should be considered legal calls.
// See https://github.com/splodingsocks/FlowTyped/pull/1#issuecomment-149345275
// and https://github.com/facebook/flow/issues/956


_underscore.default.isEqual(1);

_underscore.default.isEqual(1, 2, 3);
/**
 * _.range
 */


_underscore.default.range(0, 10)[4] == 4; // $ExpectError string. This type is incompatible with number

_underscore.default.range(0, 'a'); // $ExpectError string cannot be compared to number


_underscore.default.range(0, 10)[4] == 'a';
/**
 * _.extend
 */

_underscore.default.extend({
  a: 1
}, {
  b: 2
}).a;
_underscore.default.extend({
  a: 1
}, {
  b: 2
}).b; // $ExpectError property `c`. Property not found in object literal

_underscore.default.extend({
  a: 1
}, {
  b: 2
}).c;
/**
 * _.zip
 */

_underscore.default.zip(['a', 'b', 'c'], ['d', 'e', 'f'])[0].length;
_underscore.default.zip(['a', 'b', 'c'], [1, 2, 3])[0].length;
_underscore.default.zip(['a', 'b', 'c'], [1, 2, 3])[0][0] + 'a';
_underscore.default.zip(['a', 'b', 'c'], [1, 2, 3])[0][1] * 10; // $ExpectError `x` property not found in Array

_underscore.default.zip([{
  x: 1
}], [{
  x: 2,
  y: 1
}])[0].x; // $ExpectError `y` property not found in object literal

_underscore.default.zip([{
  x: 1
}], [{
  x: 2,
  y: 1
}])[0][0].y;
_underscore.default.zip([{
  x: 1
}], [{
  x: 2,
  y: 1
}])[0][1].y;
/**
 * _.any
 */

_underscore.default.any([1, 2, 3], function (x) {
  return x == 1;
}); // $ExpectError number cannot be compared to string.


_underscore.default.any([1, 2, 3], function (x) {
  return x == 'a';
});
/**
 * _.find
 */


_underscore.default.find([1, 2, 3], function (x) {
  return x == 1;
}); // $ExpectError number. This type is incompatible with function type.


_underscore.default.find([1, 2, 3], 1); // $ExpectError Callable signature not found in object literal


_underscore.default.find([1, 2, 3], {
  val: 1
});

_underscore.default.findIndex([1, 2, 3], function (i) {
  return i % 2 == 0;
}); // $ExpectError number cannot be compared to string.


_underscore.default.findIndex([1, 2, 3], function (i) {
  return i == '0';
});

_underscore.default.indexOf(['a', 'b', 'c'], function (e) {
  return e == 'b';
});

_underscore.default.contains(['a', 'b', 'c'], 'b');

_underscore.default.map(['hello', 'world'], function (e) {
  return e.length;
});

_underscore.default.map({
  hello: 1,
  world: 2
}, function (v, k) {
  return k.length;
}); // $ExpectError This type is incompatible with string


_underscore.default.map({
  hello: 1,
  world: 2
}, function (v, k) {
  return k * 2;
});

_underscore.default.mapObject({
  foo: 1,
  bar: 2
}, function (v, k) {
  return (k.length + v).toString();
}); // $ExpectError This type is incompatible with number


_underscore.default.mapObject({
  foo: 1,
  bar: 2
}, function (v, k) {
  return (k.length + v).toString();
});

_underscore.default.pluck([{
  name: 'bob'
}, {
  name: 'jane'
}], 'name');

_underscore.default.reduce([1, 2, 3], function (m, o) {
  return m + o;
}, 0);

_underscore.default.all([2, 4, 5], function (i) {
  return i % 2 == 0;
}); // $ExpectError Property not found in Number


_underscore.default.all([2, 4, 5], function (i) {
  return i.length;
});

_underscore.default.some([2, 4, 5], function (i) {
  return i % 2 == 0;
});

_underscore.default.union(['a', 'b'], ['b']);

_underscore.default.intersection(['a', 'b'], ['b']);

_underscore.default.difference(['a', 'b'], ['b']);

_underscore.default.first([1, 2, 3]);

_underscore.default.first([1, 2, 3], 2);

_underscore.default.last([1, 2, 3]);

_underscore.default.last([1, 2, 3], 2);

_underscore.default.sample([1, 2, 3]);

_underscore.default.sortBy(['hello', 'world'], function (e) {
  return e.length;
});

_underscore.default.uniq([1, 2, 2]);

_underscore.default.compact([1, null]);

_underscore.default.select([1, 2, 3], function (e) {
  return e % 2 == 0;
});

_underscore.default.reject([1, 2, 3], function (e) {
  return e % 2 == 0;
});

_underscore.default.without([1, 2, 3], 1, 2);

_underscore.default.has({
  a: 1,
  b: 2
}, 'b');

_underscore.default.isArray([1, 2]);

_underscore.default.isArray(1);

_underscore.default.pick({
  a: 1,
  b: 2
}, 'a');

_underscore.default.omit({
  a: 1,
  b: 2
}, 'a');

_underscore.default.throttle(function (a) {
  a.length;
}, 10)('hello');

_underscore.default.debounce(function (a) {
  a.length;
}, 10)('hello');

_underscore.default.memoize(function () {})();

_underscore.default.partial(function (a, b) {
  return a + b;
}, 1)(2);

_underscore.default.defer(function () {});

_underscore.default.compose(function (name) {
  return name + ', hello!';
}, function (user) {
  return user.name;
});

_underscore.default.partition([1, 5, 2, 4], function (i) {
  return i < 4;
});

_underscore.default.partition({
  x: 'foo',
  y: 'bar'
}, function (v, k) {
  return k === 'bar';
});

_underscore.default.size([1, 2]);

_underscore.default.size({
  a: 1,
  b: 2
});

_underscore.default.template("a<%=b%>c")({
  b: "_"
}); // $ExpectError `foo` property not found in Function


_underscore.default.template(321).foo; // $ExpectError This type is incompatible with string

_underscore.default.template(321)({
  b: "_"
}); // $ExpectError This type is incompatible with string


_underscore.default.template("a<%=b%>c")({
  b: 1
});

_underscore.default.isObject({});

_underscore.default.isArguments(null);

_underscore.default.isFunction(function () {});

_underscore.default.isString('');

_underscore.default.isBoolean(true);

_underscore.default.isNumber(1);

_underscore.default.isFinite(1);

_underscore.default.isBoolean(1);

_underscore.default.isDate(new Date());

_underscore.default.isRegExp(/[a-z]/);

_underscore.default.isError(new Error('?'));

_underscore.default.isNaN(NaN);

_underscore.default.isNull(null);

_underscore.default.isUndefined(undefined);