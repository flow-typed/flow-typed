/* @flow */

/**
 * describe
 */

describe('desc', () => {});

// $FlowExpectedError number. This type is incompatible with function type.
describe('desc', 12);
// $FlowExpectedError number. This type is incompatible with string.
describe(12, () => {});

/**
 * fdescribe
 */

fdescribe('desc', () => {});

// $FlowExpectedError number. This type is incompatible with function type.
fdescribe('desc', 12);
// $FlowExpectedError number. This type is incompatible with string.
fdescribe(12, () => {});

/**
 * xdescribe
 */

xdescribe('desc', () => {});

// $FlowExpectedError number. This type is incompatible with function type.
xdescribe('desc', 12);
// $FlowExpectedError number. This type is incompatible with string.
xdescribe(12, () => {});

