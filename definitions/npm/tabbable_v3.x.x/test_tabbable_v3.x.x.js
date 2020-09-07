// @flow

import tabbable from 'tabbable';

const div = document.createElement('div');
const tabbables: Array<HTMLElement> = tabbable(div, {
  includeContainer: true,
});

tabbable(div);

tabbables.map(node => node.nodeName);

const isTabbable: boolean = tabbable.isTabbable(document.createElement('a'));
const isFocusable: boolean = tabbable.isFocusable(
  document.createElement('button')
);

const untouchabilityChecker = new (class {
  hasDisplayNone() {
    return true;
  }
  isUntouchable() {
    return false;
  }
})();

const isTabbableWithUntouchabilityChecker: boolean = tabbable.isTabbable(
  document.createElement('a'),
  untouchabilityChecker
);

const isFocusableWithUntouchabilityChecker: boolean = tabbable.isFocusable(
  document.createElement('button'),
  untouchabilityChecker
);

const isFocusable2: boolean = tabbable.isFocusable(
  document.createElement('button'),
  // $FlowExpectedError
  3
);

const isTabbable2: boolean = tabbable.isFocusable(
  document.createElement('button'),
  // $FlowExpectedError
  3
);
