/** @flow */
import _ from 'underscore';

// $ExpectError
_.zip([{x:1}], [{x:2,y:1}])[0][2]
