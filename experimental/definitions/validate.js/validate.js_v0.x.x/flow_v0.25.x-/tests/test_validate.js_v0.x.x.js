// @flow

import validate from 'validate.js';

/* Trivial case */

// $ExpectError
validate.foo();

validate.isString(true)
validate.isArray(true)

validate({
}, {
  foofield: {
    required: true,
  }
}, {
  format: 'grouped'
})

/* validate.validators */

validate.validators.new_validator = () => {};

// $ExpectError
validate.validators.new_validator = true;
