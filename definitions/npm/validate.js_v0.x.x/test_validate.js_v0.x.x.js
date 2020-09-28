// @flow

import validate from 'validate.js';

/* Trivial case */

// $FlowExpectedError
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

// $FlowExpectedError
validate.validators.new_validator = true;
