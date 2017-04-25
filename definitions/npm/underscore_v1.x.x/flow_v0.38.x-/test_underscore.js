/** @flow */
import _ from 'underscore';

// $ExpectError
_.zip([{x:1}], [{x:2,y:1}])[0][2]
// $ExpectError array literal. Tuple arity mismatch.
_.bindAll({msg: 'hi', greet: function(){ return this.msg;}}, ['greet', 'toString']);

var identityIsString: string = _.identity('foo');
// $ExpectError
var identityIsNotString: string = _.identity(42);

var toArrayString: Array<string> = _.toArray({foo: 'bar', baz: 'qux'});
var toArrayNumber: Array<number> = _.toArray({foo: 4, bar: 2});
// $ExpectError
var toArrayNumberError: Array<string> = _.toArray({foo: 4, baz: 2});
