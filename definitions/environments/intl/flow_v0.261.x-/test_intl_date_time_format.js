/* @flow */

const a: Intl$DateTimeFormat = Intl.DateTimeFormat() // correct
const b: Intl$DateTimeFormat = new Intl.DateTimeFormat() // correct
// $FlowExpectedError[incompatible-type]
const c: Intl$NumberFormat = new Intl.DateTimeFormat() // incorrect
// $FlowExpectedError[incompatible-type]
Intl.DateTimeFormat(1, {
  // $FlowExpectedError[incompatible-type]
  localeMatcher: 'look',
  // $FlowExpectedError[incompatible-type]
  timeZone: 1,
  // $FlowExpectedError[incompatible-type]
  hour12: '',
  // $FlowExpectedError[incompatible-type]
  formatMatcher: 'basic fit',
  // $FlowExpectedError[incompatible-type]
  weekday: '2-digit',
  // $FlowExpectedError[incompatible-type]
  era: '',
  // $FlowExpectedError[incompatible-type]
  year: '',
  // $FlowExpectedError[incompatible-type]
  month: '',
  // $FlowExpectedError[incompatible-type]
  day: '',
  // $FlowExpectedError[incompatible-type]
  hour: '',
  // $FlowExpectedError[incompatible-type]
  minute: 'long',
  // $FlowExpectedError[incompatible-type]
  second: 'short',
  // $FlowExpectedError[incompatible-type]
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

// $FlowExpectedError[incompatible-type]
DateTimeFormat.supportedLocalesOf(1) // incorrect
DateTimeFormat.supportedLocalesOf('en') // correct
DateTimeFormat.supportedLocalesOf([ 'en' ]) // correct
