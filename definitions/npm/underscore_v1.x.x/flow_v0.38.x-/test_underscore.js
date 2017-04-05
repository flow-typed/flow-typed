/** @flow */
import _ from 'underscore';

// $ExpectError
_.zip([{x:1}], [{x:2,y:1}])[0][2]
// $ExpectError array literal. Tuple arity mismatch.
_.bindAll({msg: 'hi', greet: function(){ return this.msg;}}, ['greet', 'toString']);

var identityIsString: string = _.identity('foo');
// $ExpectError
var identityIsNotString: string = _.identity(42);
