/* @flow */

/**
 * describe
 */

describe('desc', () => {});

// $FlowExpectedError[incompatible-call]
describe('desc', 12);
// $FlowExpectedError[incompatible-call]
describe(12, () => {});

/**
 * fdescribe
 */

fdescribe('desc', () => {});

// $FlowExpectedError[incompatible-call]
fdescribe('desc', 12);
// $FlowExpectedError[incompatible-call]
fdescribe(12, () => {});

/**
 * xdescribe
 */

xdescribe('desc', () => {});

// $FlowExpectedError[incompatible-call]
xdescribe('desc', 12);
// $FlowExpectedError[incompatible-call]
xdescribe(12, () => {});

