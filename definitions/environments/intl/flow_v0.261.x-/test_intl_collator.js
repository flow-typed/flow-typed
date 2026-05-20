/* @flow */

const a: Intl$Collator = Intl.Collator() // correct
const b: Intl$Collator = new Intl.Collator() // correct
// $FlowExpectedError[incompatible-type]
const c: Intl$PluralRules = new Intl.Collator() // incorrect
// $FlowExpectedError[incompatible-type]
Intl.Collator(1, {
  // $FlowExpectedError[incompatible-type]
  localeMatcher: 'look fit',
  // $FlowExpectedError[incompatible-type]
  usage: 'find',
  // $FlowExpectedError[incompatible-type]
  sensitivity: '',
  // $FlowExpectedError[incompatible-type]
  ignorePunctuation: null,
  // $FlowExpectedError[incompatible-type]
  numeric: 1,
  // $FlowExpectedError[incompatible-type]
  caseFirst: 'true'
}) // incorrect
Intl.Collator('en') // correct
Intl.Collator([ 'en', 'en-GB' ], {
  localeMatcher: 'best fit',
  usage: 'sort',
  sensitivity: 'accent',
  ignorePunctuation: false,
  numeric: true,
  caseFirst: 'false'
}) // correct
const Collator = Intl.Collator;
// $FlowExpectedError[prop-missing]
new Collator().format() // incorrect
// $FlowExpectedError[incompatible-type]
new Collator().compare() // incorrect
// $FlowExpectedError[incompatible-type]
new Collator().compare('a') // incorrect

new Collator().compare('a', 'b') // correct

new Collator().resolvedOptions() // correct

// $FlowExpectedError[prop-missing]
Collator.getCanonicalLocales() // incorrect

// $FlowExpectedError[incompatible-type]
Collator.supportedLocalesOf(1) // incorrect
Collator.supportedLocalesOf('en') // correct
Collator.supportedLocalesOf([ 'en' ]) // correct
