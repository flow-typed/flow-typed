/* @flow */

fail('test failed');
fail(new Error('error'));
fail();

// $FlowExpectedError string. This type is incompatible with string.
fail(true);
