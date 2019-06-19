/* @flow */

fail('test failed');
fail(new Error('error'));
fail();

// $ExpectError string. This type is incompatible with string.
fail(true);
