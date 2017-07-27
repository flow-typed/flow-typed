// @flow
import Popper from 'popper.js';

const reference = document.createElement('div');
const popper = document.createElement('div');

new Popper(reference, popper);
new Popper(reference, popper, {
  placement: 'top',
});
new Popper(reference, popper, {
  modifiers: {
    offset: { offset: 10 },
  },
});

// $ExpectError
new Popper(null, null);
// $ExpectError
new Popper(reference, popper, {
  placement: 'oblique',
});
// $ExpectError
new Popper(reference, popper, {
  modifiers: {
    offset: { offset: null },
  },
});
