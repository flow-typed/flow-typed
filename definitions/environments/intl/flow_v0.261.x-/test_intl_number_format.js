/* @flow */

const a: Intl$NumberFormat = Intl.NumberFormat() // correct
const b: Intl$NumberFormat = new Intl.NumberFormat() // correct
// $FlowExpectedError[incompatible-type]
const c: Intl$DateTimeFormat = new Intl.NumberFormat() // incorrect
// $FlowExpectedError[incompatible-type]
Intl.NumberFormat(1, {
  // $FlowExpectedError[incompatible-type]
  localeMatcher: 'best',
  // $FlowExpectedError[incompatible-type]
  style: 'octal',
  // $FlowExpectedError[incompatible-type]
  currency: 123,
  // $FlowExpectedError[incompatible-type]
  currencyDisplay: 'sym',
  // $FlowExpectedError[incompatible-type]
  useGrouping: 5,
  // $FlowExpectedError[incompatible-type]
  minimumIntegerDigits: {},
  // $FlowExpectedError[incompatible-type]
  minimumFractionDigits: '',
  // $FlowExpectedError[incompatible-type]
  maximumFractionDigits: null,
  // $FlowExpectedError[incompatible-type]
  minimumSignificantDigits: '',
  // $FlowExpectedError[incompatible-type]
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
// $FlowExpectedError[incompatible-type]
new NumberFormat().format() // incorrect

new NumberFormat().format(1) // correct

new NumberFormat().resolvedOptions() // correct

// $FlowExpectedError[prop-missing]
NumberFormat.getCanonicalLocales() // incorrect

// $FlowExpectedError[incompatible-type]
NumberFormat.supportedLocalesOf(1) // incorrect
NumberFormat.supportedLocalesOf('en') // correct
NumberFormat.supportedLocalesOf([ 'en' ]) // correct
