/* @flow */

/**
 * before
 */

before(() => {});
before((done : Function) => {});
before(() => new Promise((res, rej) => {}));
before('desc', () => {});
before('desc', (done : Function) => {});
before('desc', () => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
before((done : number) => {});
// $ExpectError number. This type is incompatible with string.
before(12, () => {});

/**
 * beforeEach
 */

beforeEach(() => {});
beforeEach((done : Function) => {});
beforeEach(() => new Promise((res, rej) => {}));
beforeEach('desc', () => {});
beforeEach('desc', (done : Function) => {});
beforeEach('desc', () => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
beforeEach((done : number) => {});
// $ExpectError number. This type is incompatible with string.
beforeEach(12, () => {});


/**
 * after
 */

after(() => {});
after((done : Function) => {});
after(() => new Promise((res, rej) => {}));
after('desc', () => {});
after('desc', (done : Function) => {});
after('desc', () => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
after((done : number) => {});
// $ExpectError number. This type is incompatible with string.
after(12, () => {});

/**
 * afterEach
 */

afterEach(() => {});
afterEach((done : Function) => {});
afterEach(() => new Promise((res, rej) => {}));
afterEach('desc', () => {});
afterEach('desc', (done : Function) => {});
afterEach('desc', () => new Promise((res, rej) => {}));

// $ExpectError number. This type is incompatible with function type.
afterEach((done : number) => {});
// $ExpectError number. This type is incompatible with string.
afterEach(12, () => {});
