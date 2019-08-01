/* @flow */

/**
 * it
 */

it('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
it('desc', 12);
// $ExpectError number. This type is incompatible with string.
it(12, () => {});


/**
 * fit
 */

fit('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
fit('desc', 12);
// $ExpectError number. This type is incompatible with string.
fit(12, () => {});


/**
 * xit
 */

xit('desc', () => {});

// $ExpectError number. This type is incompatible with function type.
xit('desc', 12);
// $ExpectError number. This type is incompatible with string.
xit(12, () => {});
