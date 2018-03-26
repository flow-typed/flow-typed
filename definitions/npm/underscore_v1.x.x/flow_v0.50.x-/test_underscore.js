/** @flow */
import _ from 'underscore';

_.where([{title: "Cymbeline", author: "Shakespeare", year: 1611}, {title: "The Tempest", author: "Shakespeare", year: 1611}], {author: 'Shakespeare', year: 1611});

_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');

_.indexBy([{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}], 'age');

_.countBy([1, 2, 3, 4, 5], function(num) {
	return num % 2 == 0 ? 'even': 'odd';
});

_.shuffle([1, 2, 3, 4, 5, 6]);

_.unzip([['moe', 30, true], ['larry', 40, false], ['curly', 50, false]]);

_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);

_.sortedIndex([10, 20, 30, 40, 50], 35);

_.findLastIndex([{'id': 1, 'name': 'Bob', 'last': 'Brown'}, {'id': 2, 'name': 'Ted', 'last': 'White'}, {'id': 3, 'name': 'Frank', 'last': 'James'}, {'id': 4, 'name': 'Ted', 'last': 'Jones'}], {
	name: 'Ted'
});

_.once(function () {});

_.after(1, function () {});

_.before(1, function () {});

_.wrap(function (name) {return 'hello: ' + name;}, function(func) {return 'before, ' + func('moe') + ', after';});

_.negate(Boolean);

function Stooge(name) {
	this.name = name;
}
Stooge.prototype.silly = true;
_.allKeys(new Stooge('Moe'));

_.invert({Moe: 'Moses', Larry: 'Louis', Curly: 'Jerome'});

_.functions(_);

_.extend({name: 'moe'}, {age: 50});

/* starting with 1.8
_.extendOwn({name: 'moe'}, {age: 50});
_.assign({name: 'moe'}, {age: 50});
*/

_.defaults({flavor: 'chocolate'}, {flavor: 'vanilla', sprinkles: 'lots'});
_.defaults({}, {flavor: 'chocolate'});
_.defaults({flavor: 'chocolate'}, {sprinkles: 'lots'}, {foo: 'bar'}, {foo1: 'bar1'});
_.defaults({flavor: 'chocolate'}, {flavor: 'vanilla'});
_.defaults({zero: 0, one: 1, empty: '', nan: NaN, nothing: null}, {zero: 1, one: 10, twenty: 20, nothing: 'str'});
_.defaults({zero: 0, one: 1, empty: '', nan: NaN, nothing: null}, {empty: 'full'}, {nan: 'nan'}, {word: 'word'}, {word: 'dog'});
_.defaults(null, {a: 1});
_.defaults(void 0, {a: 1});
// $ExpectError
_.defaults({}, null, void 0, {a: 1});

_.isMatch({name: 'moe', age: 32}, {age: 32});

_.isElement(0);

_.constant({name: 'moe'})();

_.uniqueId('contact_');

_.escape('Curly, Larry & Moe');

_.unescape('Curly, Larry &amp; Moe');

_.some(['a', true, 0]);
_.any(['a', true, 0]);
_.every(['a', true, 0]);
_.all(['a', true, 0]);

_.union([1, 2, 3], [2, 30, 1], [1, 40]);
_([1, 2, 3]).union([2, 30, 1], [1, 40]);
_.union([1, 2, 3], [2, 30, 1], [1, 40, [1]]);
// $ExpectError
_.union([1, 2, 3], 4)

_.filter([1, 2, 3, 4, 5, 6], function(num: number): boolean { return num % 2 === 0; });
_.filter([1, 2, 3, 4, 5, 6], function(num, index: number, as: number[]): boolean {
  return num % 2 == 0 || index === 7 || as.length > 3;
});
_.filter({name: 'foo', a: 'bar'}, function (val, key, obj): boolean {
  var testKey = key + 'foo';
  var allKeys = _.keys(obj);
  return val === 'foo';
});
var list = [{a: 1, b: 2}, {a: 2, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
_.filter(list, {a: 1});
_.filter(list, {})
_(list).filter({})

_.findKey({a: {t: 'a'}, b: {t: 'b'}}, (v) => v.t === 'a');
_.findKey({a: {t: 'a'}, b: {t: 'b'}}, (v, k) => k === 'a' && v.t === 'a');
_.findKey({a: {t: 'a'}, b: {t: 'b'}}, (v, k, o) => k === 'a' && v.t === 'a' && o[k] === v);

// $ExpectError
_.findKey({a: {t: 'a'}, b: {t: 'b'}}, (v) => v.s === 'a');
// $ExpectError
_.findKey({a: {t: 'a'}, b: {t: 'b'}}, (v: {t: string}, k: number) => (k === 1) && (v.t === 'a'));
// $ExpectError
_.findKey({a: {t: 'a'}, b: {t: 'b'}}, (v, k, o: {t: string}) => k === 'a' && v.t === 'a' && o.t === v);


// $ExpectError
_.zip([{x:1}], [{x:2,y:1}])[0][2]
// $ExpectError array literal. Tuple arity mismatch.
_.bindAll({msg: 'hi', greet: function(){ return this.msg;}}, ['greet', 'toString']);

var identityIsString: string = _.identity('foo');
// $ExpectError
var identityIsNotString: string = _.identity(42);

var timesString: Array<string> = _.times(3, (i) => `str${i}`);
var timesNumber: Array<number> = _.times(3, (i) => i + 1);
// $ExpectError
var timesNumberError: Array<string> = _.times(3, (i) => i + 1);

var toArrayString: Array<string> = _.toArray({foo: 'bar', baz: 'qux'});
var toArrayNumber: Array<number> = _.toArray({foo: 4, bar: 2});
// $ExpectError
var toArrayNumberError: Array<string> = _.toArray({foo: 4, baz: 2});

var composed: (prop: {num: number}) => number = _.compose(
  (prop: {num: number}) => prop.num
);

var composed2: (prop: {num: number}) => string = _.compose(
  (num: number) => num + '',
  (prop: {num: number}) => prop.num,
);

// $ExpectError
var composedFail: (prop: {num: number}) => number = _.compose(
  (num: number) => num + '',
  (prop: {num: number}) => prop.num,
);

// Wrapped

_({a: {t: 'a'}, b: {t: 'b'}}).findKey((v) => v.t === 'a');
_({a: {t: 'a'}, b: {t: 'b'}}).findKey((v, k) => k === 'a' && v.t === 'a');
_({a: {t: 'a'}, b: {t: 'b'}}).findKey((v, k, o) => k === 'a' && v.t === 'a' && o[k] === v);

// $ExpectError
_({a: {t: 'a'}, b: {t: 'b'}}).findKey((v) => v.s === 'a');
// $ExpectError
_({a: {t: 'a'}, b: {t: 'b'}}).findKey((v: {t: string}, k: number) => (k === 1) && (v.t === 'a'));
// $ExpectError
_({a: {t: 'a'}, b: {t: 'b'}}).findKey((v, k, o: {t: string}) => k === 'a' && v.t === 'a' && o.t === v);
