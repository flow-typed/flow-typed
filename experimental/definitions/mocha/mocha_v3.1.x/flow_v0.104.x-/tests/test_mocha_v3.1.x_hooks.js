/* @flow */

/**
 * before
 */

before(() => {});
before((done : Function) => {});
before(() => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
before((done : number) => {});

/**
 * beforeEach
 */

beforeEach(() => {});
beforeEach((done : Function) => {});
beforeEach(() => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
beforeEach((done : number) => {});


/**
 * after
 */

after(() => {});
after((done : Function) => {});
after(() => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
after((done : number) => {});

/**
 * afterEach
 */

afterEach(() => {});
afterEach((done : Function) => {});
afterEach(() => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
afterEach((done : number) => {});
