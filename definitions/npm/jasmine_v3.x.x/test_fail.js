/* @flow */

fail('test failed');
fail(new Error('error'));
fail();

// $FlowExpectedError[incompatible-call]
fail(true);
