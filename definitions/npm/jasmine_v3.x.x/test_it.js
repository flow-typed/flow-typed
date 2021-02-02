/* @flow */

/**
 * it
 */

it('desc', () => {});

// $FlowExpectedError[incompatible-call]
it('desc', 12);
// $FlowExpectedError[incompatible-call]
it(12, () => {});


/**
 * fit
 */

fit('desc', () => {});

// $FlowExpectedError[incompatible-call]
fit('desc', 12);
// $FlowExpectedError[incompatible-call]
fit(12, () => {});


/**
 * xit
 */

xit('desc', () => {});

// $FlowExpectedError[incompatible-call]
xit('desc', 12);
// $FlowExpectedError[incompatible-call]
xit(12, () => {});
