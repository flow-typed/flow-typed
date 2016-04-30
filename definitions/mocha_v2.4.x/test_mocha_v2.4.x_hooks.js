/* @flow */

/**
 * before
 */

before(() => {});
before((done : Function) => {});
before(() => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
before((done : number) => {});
// $ExpectError can't pass done, and return promise at the same time.
before((done : Function) => new Promise((res, rej) => {}));

/**
 * beforeEach
 */

beforeEach(() => {});
beforeEach((done : Function) => {});
beforeEach(() => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
beforeEach((done : number) => {});
// $ExpectError can't pass done, and return promise at the same time.
beforeEach((done : Function) => new Promise((res, rej) => {}));


/**
 * after
 */

after(() => {});
after((done : Function) => {});
after(() => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
after((done : number) => {});
// $ExpectError can't pass done, and return promise at the same time.
after((done : Function) => new Promise((res, rej) => {}));

/**
 * afterEach
 */

afterEach(() => {});
afterEach((done : Function) => {});
afterEach(() => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
afterEach((done : number) => {});
// $ExpectError can't pass done, and return promise at the same time.
afterEach((done : Function) => new Promise((res, rej) => {}));