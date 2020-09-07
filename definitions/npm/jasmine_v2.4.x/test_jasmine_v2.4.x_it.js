/* @flow */

/**
 * it
 */

it('desc', () => {});

// $FlowExpectedError number. This type is incompatible with function type.
it('desc', 12);
// $FlowExpectedError number. This type is incompatible with string.
it(12, () => {});


/**
 * fit
 */

fit('desc', () => {});

// $FlowExpectedError number. This type is incompatible with function type.
fit('desc', 12);
// $FlowExpectedError number. This type is incompatible with string.
fit(12, () => {});


/**
 * xit
 */

xit('desc', () => {});

// $FlowExpectedError number. This type is incompatible with function type.
xit('desc', 12);
// $FlowExpectedError number. This type is incompatible with string.
xit(12, () => {});
