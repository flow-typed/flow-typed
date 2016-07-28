// @flow

import objectAssign from 'object-assign';

const result1: Object = objectAssign({}, null, 2, {}, []);
const result2: Object = objectAssign(null);

// $ExpectError
const result3: string = objectAssign();
