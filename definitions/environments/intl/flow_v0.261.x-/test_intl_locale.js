/** @flow */

// $FlowExpectedError[incompatible-type]
new Intl.Locale(); // incorrect
new Intl.Locale('en-US'); // correct
new Intl.Locale('en-US', {
  calendar: 'gregory',
  caseFirst: 'upper',
  collation: 'phone-sensitive',
  hourCycle: 'h11',
  numberingSystem: 'latn',
  numeric: true,
}); // correct
// $FlowExpectedError[incompatible-type]
new Intl.Locale('en-US', { calendar: 0 }); // incorrect
// $FlowExpectedError[incompatible-type]
new Intl.Locale('en-US', { caseFirst: 'aaa' }); // incorrect
// $FlowExpectedError[incompatible-type]
new Intl.Locale('en-US', { collation: 0 }); // incorrect
// $FlowExpectedError[incompatible-type]
new Intl.Locale('en-US', { hourCycle: 'aaa' }); // incorrect
// $FlowExpectedError[incompatible-type]
new Intl.Locale('en-US', { numeric: '' }); // incorrect
// $FlowExpectedError[incompatible-type]
new Intl.Locale('en-US', { numberingSystem: 0 }); // incorrect
const a: Intl$LocaleClass = new Intl.Locale('en-US').maximize(); // correct
const b: Intl$LocaleClass = new Intl.Locale('en-US').minimize(); // correct
