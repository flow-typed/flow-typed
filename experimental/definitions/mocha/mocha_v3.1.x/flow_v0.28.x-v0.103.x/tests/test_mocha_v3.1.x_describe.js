/* @flow */

/**
 * describe
 */

describe('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
describe('desc', 12);
// $ExpectError number. This type is incompatible with undefined.
describe('desc', () => 1);
// $ExpectError number. This type is incompatible with string.
describe(12, () => {});


/**
 * describe.skip
 */

describe.skip('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
describe.skip('desc', 12);
// $ExpectError number. This type is incompatible with undefined.
describe.skip('desc', () => 1);
// $ExpectError number. This type is incompatible with string.
describe.skip(12, () => {});

/**
 * describe.only
 */

describe.only('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
describe.only('desc', 12);
// $ExpectError number. This type is incompatible with undefined.
describe.only('desc', () => 1);
// $ExpectError number. This type is incompatible with string.
describe.only(12, () => {});

/**
 * describe.timeout
 */

describe.timeout(1000);

// $ExpectError string. This type is incompatible with number.
describe.timeout('1000');