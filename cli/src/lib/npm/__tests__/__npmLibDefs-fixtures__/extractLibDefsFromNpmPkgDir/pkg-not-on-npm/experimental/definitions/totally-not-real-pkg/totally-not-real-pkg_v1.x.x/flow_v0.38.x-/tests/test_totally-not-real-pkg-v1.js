/** @flow */
import tnrp from 'totally-not-real-pkg';

tnrp.zip(['a', 'b', 'c'], ['d', 'e', 'f'])[0].length;
// $ExpectError `x` property not found in Array
tnrp.zip([{x:1}], [{x:2,y:1}])[0].x;
