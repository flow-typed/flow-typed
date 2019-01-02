/* @flow */

/**
 * describe
 */

describe('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
describe('desc', 12);
// $ExpectError number. This type is incompatible with string.
describe(12, () => {});

/**
 * fdescribe
 */

fdescribe('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
fdescribe('desc', 12);
// $ExpectError number. This type is incompatible with string.
fdescribe(12, () => {});

/**
 * xdescribe
 */

xdescribe('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
xdescribe('desc', 12);
// $ExpectError number. This type is incompatible with string.
xdescribe(12, () => {});

