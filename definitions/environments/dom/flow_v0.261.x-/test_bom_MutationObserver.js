/* @flow */

// constructor
function callback(arr: Array<MutationRecord>, observer: MutationObserver): void {
  return;
}
const o: MutationObserver = new MutationObserver(callback); // correct
new MutationObserver((arr: Array<MutationRecord>) => true); // correct
new MutationObserver(() => {}); // correct
// $FlowExpectedError[incompatible-type]
new MutationObserver(); // incorrect
// $FlowExpectedError[incompatible-type]
new MutationObserver(42); // incorrect
// $FlowExpectedError[incompatible-type]
new MutationObserver((n: number) => {}); // incorrect

// observe
const div = document.createElement('div');
o.observe(div, { attributes: true, attributeFilter: ['style'] }); // correct
o.observe(div, { characterData: true, invalid: true }); // correct
// $FlowExpectedError[incompatible-type]
o.observe(); // incorrect
// $FlowExpectedError[incompatible-type]
o.observe('invalid'); // incorrect
// $FlowExpectedError[incompatible-type]
o.observe(div); // incorrect
// $FlowExpectedError[incompatible-type]
o.observe(div, {}); // incorrect
// $FlowExpectedError[incompatible-type]
o.observe(div, { subtree: true }); // incorrect
// $FlowExpectedError[incompatible-type]
o.observe(div, { attributes: true, attributeFilter: true }); // incorrect

// takeRecords
o.takeRecords(); // correct

// disconnect
o.disconnect(); // correct
