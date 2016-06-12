/* @flow */

/**
 * context
 */

context('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
context('desc', 12);
// $ExpectError number. This type is incompatible with undefined.
context('desc', () => 1);
// $ExpectError number. This type is incompatible with string.
context(12, () => {});


/**
 * context.skip
 */

context.skip('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
context.skip('desc', 12);
// $ExpectError number. This type is incompatible with undefined.
context.skip('desc', () => 1);
// $ExpectError number. This type is incompatible with string.
context.skip(12, () => {});

/**
 * context.only
 */

context.only('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
context.only('desc', 12);
// $ExpectError number. This type is incompatible with undefined.
context.only('desc', () => 1);
// $ExpectError number. This type is incompatible with string.
context.only(12, () => {});

/**
 * context.timeout
 */

context.timeout(1000);

// $ExpectError string. This type is incompatible with number.
context.timeout('1000');
