/** @flow */
import _ from 'totally-not-real-pkg';

// $ExpectError
_.zip([{x:1}], [{x:2,y:1}])[0][2]
