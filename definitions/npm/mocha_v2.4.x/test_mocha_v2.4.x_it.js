/* @flow */

/**
 * it
 */

it('desc', () => {});
it('desc', (done : Function) => {});
it('desc', () => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
it('desc', (done : number) => {});
// $ExpectError can't pass done, and return promise at the same time.
it('desc', (done : Function) => new Promise((res, rej) => {}));
// $ExpectError number. This type is incompatible with function type.
it('desc', 12);
// $ExpectError number. This type is incompatible with undefined.
it('desc', () => 1);
// $ExpectError number. This type is incompatible with string.
it(12, () => {});


/**
 * it.skip
 */

it.skip('desc', () => {});
it.skip('desc', (done : Function) => {});
it.skip('desc', () => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
it.skip('desc', (done : number) => {});
// $ExpectError can't pass done, and return promise at the same time.
it.skip('desc', (done : Function) => new Promise((res, rej) => {}));
// $ExpectError number. This type is incompatible with function type.
it.skip('desc', 12);
// $ExpectError number. This type is incompatible with undefined.
it.skip('desc', () => 1);
// $ExpectError number. This type is incompatible with string.
it.skip(12, () => {});

/**
 * it.only
 */

it.only('desc', () => {});
it.only('desc', (done : Function) => {});
it.only('desc', () => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
it.only('desc', (done : number) => {});
// $ExpectError can't pass done, and return promise at the same time.
it.only('desc', (done : Function) => new Promise((res, rej) => {}));
// $ExpectError number. This type is incompatible with function type.
it.only('desc', 12);
// $ExpectError number. This type is incompatible with undefined.
it.only('desc', () => 1);
// $ExpectError number. This type is incompatible with string.
it.only(12, () => {});

/**
 * it.timeout
 */

it.timeout(1000);

// $ExpectError string. This type is incompatible with number.
it.timeout('1000');