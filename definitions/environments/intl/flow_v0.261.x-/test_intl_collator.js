/* @flow */

const a: Intl$Collator = Intl.Collator() // correct
const b: Intl$Collator = new Intl.Collator() // correct
// $FlowExpectedError[incompatible-type]
const c: Intl$PluralRules = new Intl.Collator() // incorrect
// $FlowExpectedError[incompatible-call]
Intl.Collator(1, {
  // $FlowExpectedError[incompatible-call]
  localeMatcher: 'look fit',
  // $FlowExpectedError[incompatible-call]
  usage: 'find',
  // $FlowExpectedError[incompatible-call]
  sensitivity: '',
  // $FlowExpectedError[incompatible-call]
  ignorePunctuation: null,
  // $FlowExpectedError[incompatible-call]
  numeric: 1,
  // $FlowExpectedError[incompatible-call]
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
// $FlowExpectedError[incompatible-call]
new Collator().compare() // incorrect
// $FlowExpectedError[incompatible-call]
new Collator().compare('a') // incorrect

new Collator().compare('a', 'b') // correct

new Collator().resolvedOptions() // correct

// $FlowExpectedError[prop-missing]
Collator.getCanonicalLocales() // incorrect

// $FlowExpectedError[incompatible-call]
Collator.supportedLocalesOf(1) // incorrect
Collator.supportedLocalesOf('en') // correct
Collator.supportedLocalesOf([ 'en' ]) // correct
