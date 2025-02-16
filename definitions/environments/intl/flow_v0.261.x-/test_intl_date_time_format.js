/* @flow */

const a: Intl$DateTimeFormat = Intl.DateTimeFormat() // correct
const b: Intl$DateTimeFormat = new Intl.DateTimeFormat() // correct
// $FlowExpectedError[incompatible-type]
const c: Intl$NumberFormat = new Intl.DateTimeFormat() // incorrect
// $FlowExpectedError[incompatible-call]
Intl.DateTimeFormat(1, {
  // $FlowExpectedError[incompatible-call]
  localeMatcher: 'look',
  // $FlowExpectedError[incompatible-call]
  timeZone: 1,
  // $FlowExpectedError[incompatible-call]
  hour12: '',
  // $FlowExpectedError[incompatible-call]
  formatMatcher: 'basic fit',
  // $FlowExpectedError[incompatible-call]
  weekday: '2-digit',
  // $FlowExpectedError[incompatible-call]
  era: '',
  // $FlowExpectedError[incompatible-call]
  year: '',
  // $FlowExpectedError[incompatible-call]
  month: '',
  // $FlowExpectedError[incompatible-call]
  day: '',
  // $FlowExpectedError[incompatible-call]
  hour: '',
  // $FlowExpectedError[incompatible-call]
  minute: 'long',
  // $FlowExpectedError[incompatible-call]
  second: 'short',
  // $FlowExpectedError[incompatible-call]
  timeZoneName: 'narrow'
}) // incorrect
Intl.DateTimeFormat('en') // correct
Intl.DateTimeFormat([ 'en', 'en-GB' ], {
  localeMatcher: 'best fit',
  timeZone: 'America/Pacific',
  hour12: true,
  formatMatcher: 'best fit',
  weekday: 'long',
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'long'
}) // correct
const DateTimeFormat = Intl.DateTimeFormat;
// $FlowExpectedError[prop-missing]
new DateTimeFormat().select() // incorrect

new DateTimeFormat().format() // correct
new DateTimeFormat().format(1) // correct
new DateTimeFormat().format(new Date(2018, 3, 17)) // correct

new DateTimeFormat().formatToParts();
new DateTimeFormat().formatToParts(1) // correct
new DateTimeFormat().formatToParts(new Date(2018, 3, 17)) // correct

new DateTimeFormat().resolvedOptions() // correct

// $FlowExpectedError[prop-missing]
DateTimeFormat.getCanonicalLocales() // incorrect

// $FlowExpectedError[incompatible-call]
DateTimeFormat.supportedLocalesOf(1) // incorrect
DateTimeFormat.supportedLocalesOf('en') // correct
DateTimeFormat.supportedLocalesOf([ 'en' ]) // correct
