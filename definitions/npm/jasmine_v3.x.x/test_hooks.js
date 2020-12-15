/* @flow */

/**
 * beforeAll
 */

beforeAll(() => {});
// $FlowExpectedError[incompatible-call]
beforeAll();

/**
 * beforeEach
 */

beforeEach(() => {});
// $FlowExpectedError[incompatible-call]
beforeEach();


/**
 * afterAll
 */

afterAll(() => {});
// $FlowExpectedError[incompatible-call]
afterAll();

/**
 * afterEach
 */

afterEach(() => {});
// $FlowExpectedError[incompatible-call]
afterEach();
