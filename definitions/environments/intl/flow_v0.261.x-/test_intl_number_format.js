/* @flow */

const a: Intl$NumberFormat = Intl.NumberFormat() // correct
const b: Intl$NumberFormat = new Intl.NumberFormat() // correct
// $FlowExpectedError[incompatible-type]
const c: Intl$DateTimeFormat = new Intl.NumberFormat() // incorrect
// $FlowExpectedError[incompatible-call]
Intl.NumberFormat(1, {
  // $FlowExpectedError[incompatible-call]
  localeMatcher: 'best',
  // $FlowExpectedError[incompatible-call]
  style: 'octal',
  // $FlowExpectedError[incompatible-call]
  currency: 123,
  // $FlowExpectedError[incompatible-call]
  currencyDisplay: 'sym',
  // $FlowExpectedError[incompatible-call]
  useGrouping: 5,
  // $FlowExpectedError[incompatible-call]
  minimumIntegerDigits: {},
  // $FlowExpectedError[incompatible-call]
  minimumFractionDigits: '',
  // $FlowExpectedError[incompatible-call]
  maximumFractionDigits: null,
  // $FlowExpectedError[incompatible-call]
  minimumSignificantDigits: '',
  // $FlowExpectedError[incompatible-call]
  maximumSignificantDigits: null
}) // incorrect
Intl.NumberFormat('en') // correct
Intl.NumberFormat([ 'en', 'en-GB' ], {
  localeMatcher: 'best fit',
  style: 'currency',
  currency: 'GBP',
  currencyDisplay: 'code',
  useGrouping: true,
  minimumIntegerDigits: 1,
  minimumFractionDigits: 0,
  maximumFractionDigits: 21,
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 21
}) // correct
const NumberFormat = Intl.NumberFormat;
// $FlowExpectedError[prop-missing]
new NumberFormat().select() // incorrect
// $FlowExpectedError[incompatible-call]
new NumberFormat().format() // incorrect

new NumberFormat().format(1) // correct

new NumberFormat().resolvedOptions() // correct

// $FlowExpectedError[prop-missing]
NumberFormat.getCanonicalLocales() // incorrect

// $FlowExpectedError[incompatible-call]
NumberFormat.supportedLocalesOf(1) // incorrect
NumberFormat.supportedLocalesOf('en') // correct
NumberFormat.supportedLocalesOf([ 'en' ]) // correct
