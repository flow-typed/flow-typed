/** @flow */
import _ from 'underscore';

/**
 * _.find
 */
_.find([1, 2, 3], x => x * 1 == 3);
// $ExpectError number cannot be compared to string
_.find([1, 2, 3], x => x == 'a');
// $ExpectError number. This type is incompatible with function type.
_.find([1, 2, 3], 1);
// $ExpectError property `y`. Property not found in object literal
_.find([{x:1}, {x:2}, {x:3}], v => v.y == 3);
_.find([{x:1}, {x:2}, {x:3}], v => v.x == 3);

/**
 * _.findWhere
 */
_.findWhere([{x: 1}, {y: 2}], {x: 2});
// $ExpectError number. This type is incompatible with function type.
_.findWhere([{x: 1}, {y: 2}], 1);
// XXX: It would be nice if Flow could catch this error.
// See https://github.com/facebook/flow/issues/946
_.findWhere([{x:1}, {x:2}, {x:3}], v => v.x == 3);


/**
 * _.clone
 */
_.clone({a: 1}).a == 1;
// $ExpectError property `b`. Property not found in object literal
_.clone({a: 1}).b == 1
// $ExpectError number. This type is incompatible with function type.
_.clone({a: 1}).a == 'c';

/**
 * _.isEqual
 */
_.isEqual('a', 'b');
_.isEqual({x: 1}, {y: 2});

// Flow considers these compatible with isEqual(a: any, b: any).
// Reasonable people disagree about whether these should be considered legal calls.
// See https://github.com/splodingsocks/FlowTyped/pull/1#issuecomment-149345275
// and https://github.com/facebook/flow/issues/956
_.isEqual(1);
_.isEqual(1, 2, 3);


/**
 * _.range
 */
_.range(0, 10)[4] == 4
// $ExpectError string. This type is incompatible with number
_.range(0, 'a');
// $ExpectError string cannot be compared to number
_.range(0, 10)[4] == 'a';


/**
 * _.extend
 */
_.extend({a: 1}, {b: 2}).a
_.extend({a: 1}, {b: 2}).b
// $ExpectError property `c`. Property not found in object literal
_.extend({a: 1}, {b: 2}).c


/**
 * _.zip
 */
_.zip(['a', 'b', 'c'], ['d', 'e', 'f'])[0].length;
_.zip(['a', 'b', 'c'], [1, 2, 3])[0].length;
_.zip(['a', 'b', 'c'], [1, 2, 3])[0][0] + 'a'
_.zip(['a', 'b', 'c'], [1, 2, 3])[0][1] * 10
// $ExpectError `x` property not found in Array
_.zip([{x:1}], [{x:2,y:1}])[0].x
// $ExpectError `y` property not found in object literal
_.zip([{x:1}], [{x:2,y:1}])[0][0].y
_.zip([{x:1}], [{x:2,y:1}])[0][1].y



/**
 * _.any
 */
_.any([1, 2, 3], x => x == 1);
// $ExpectError number cannot be compared to string.
_.any([1, 2, 3], x => x == 'a');


/**
 * _.find
 */
_.find([1, 2, 3], x => x == 1);
// $ExpectError number. This type is incompatible with function type.
_.find([1, 2, 3], 1);
// $ExpectError Callable signature not found in object literal
_.find([1, 2, 3], {val: 1});

(_.findIndex([1, 2, 3], function(i) { return i % 2 == 0} ): number);
// $ExpectError number cannot be compared to string.
(_.findIndex([1, 2, 3], function(i) { return i == '0'} ): number);

(_.indexOf(['a', 'b', 'c'], function(e) { return e == 'b'}): number);

(_.contains(['a', 'b', 'c'], 'b'): boolean);

(_.map(['hello', 'world'], function(e) { return e.length }): Array<number>);
(_.map({hello: 1, world: 2}, function(v, k) { return k.length }): Array<number>);
// $ExpectError This type is incompatible with string
(_.map({hello: 1, world: 2}, function(v, k) { return k * 2 }): Array<number>);

(_.mapObject({foo: 1, bar: 2}, function (v, k) {return (k.length + v).toString()}): {[key: string]: string});
// $ExpectError This type is incompatible with number
(_.mapObject({foo: 1, bar: 2}, function (v, k) {return (k.length + v).toString()}): number);

(_.pluck([{name: 'bob'}, {name: 'jane'}], 'name'): Array<string>);
(_.reduce([1, 2, 3], function(m, o) { return m + o }, 0): number);
(_.all([2, 4, 5], function(i) { return i % 2 == 0 }): boolean);
// $ExpectError Property not found in Number
(_.all([2, 4, 5], function(i) { return i.length }): boolean);
(_.some([2, 4, 5], function(i) { return i % 2 == 0 }): boolean);
(_.union(['a', 'b'], ['b']): Array<string>);
(_.intersection(['a', 'b'], ['b']): Array<string>);
(_.difference(['a', 'b'], ['b']): Array<string>);
(_.first([1,2,3]): number);
(_.first([1,2,3], 2): Array<number>);
(_.last([1,2,3]): number);
(_.last([1,2,3], 2): Array<number>);
(_.sample([1,2,3]): number);
(_.sortBy(['hello', 'world'], function(e) { return e.length }): Array<string>);
(_.uniq([1,2,2]): Array<number>);
(_.compact([1, null]): Array<number>);
(_.select([1,2,3], function(e) { return e % 2 == 0 }): Array<number>);
(_.reject([1,2,3], function(e) { return e % 2 == 0 }): Array<number>);
(_.without([1,2,3], 1, 2): Array<number>);
(_.has({a: 1, b: 2}, 'b'): boolean);
(_.isArray([1, 2]): boolean);
(_.isArray(1): boolean);
(_.pick({a: 1, b: 2}, 'a'): {[key: string]: number});
(_.omit({a: 1, b: 2}, 'a'): {[key: string]: number});

_.throttle(function(a) {a.length}, 10)('hello');
_.debounce(function(a) {a.length}, 10)('hello');

_.memoize(function(){})();
_.partial(function (a, b) { return a + b }, 1)(2);
_.defer(function(){});

(

  _.compose(
    function (name:string):string { return name + ', hello!'; },
    function (user:Object):string { return user.name; }
  ): (user: Object) => string

);

(_.partition([1,5,2,4], function(i: number) { return i<4 }): [Array<number>, Array<number>]);
(_.partition({x: 'foo', y: 'bar'}, function(v: string, k: string) { return k === 'bar' }): [Array<string>, Array<string>]);

(_.size([1,2]): number);
(_.size({a: 1, b: 2}): number);

_.template("a<%=b%>c")({b: "_"});
// $ExpectError `foo` property not found in Function
_.template(321).foo;
// $ExpectError This type is incompatible with string
_.template(321)({b: "_"});
// $ExpectError This type is incompatible with string
_.template("a<%=b%>c")({b: 1});

_.isObject({});
_.isArguments(null);
_.isFunction(() => {});
_.isString('');
_.isBoolean(true);
_.isNumber(1);
_.isFinite(1);
_.isBoolean(1);
_.isDate(new Date());
_.isRegExp(/[a-z]/);
_.isError(new Error('?'));
_.isNaN(NaN);
_.isNull(null);
_.isUndefined(undefined);
