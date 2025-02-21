/* @flow */

// $FlowExpectedError[not-a-function]
  // $FlowExpectedError[prop-missing]
const a = Intl.PluralRules(); // incorrect
const PluralRules = Intl.PluralRules
if (PluralRules) { 
  // $FlowExpectedError[prop-missing]
  const b = PluralRules(); // incorrect
  const c = new PluralRules(); // correct
  // $FlowExpectedError[incompatible-call]
  new PluralRules(1); // incorrect
  new PluralRules('en'); // correct
  new PluralRules([ 'en', 'pt' ]); // correct
  new PluralRules('en', {
    // $FlowExpectedError[incompatible-call]
    localeMatcher: 'best one',
    // $FlowExpectedError[incompatible-call]
    type: 'count',
    // $FlowExpectedError[incompatible-call]
    minimumIntegerDigits: '',
    minimumFractionDigits: a,
    maximumFractionDigits: b,
    // $FlowExpectedError[incompatible-call]
    minimumSignificantDigits: c,
    // $FlowExpectedError[incompatible-call]
    maximumSignificantDigits: '' 
  }); // all kinds of incorrect
  new PluralRules('en', {
    localeMatcher: 'lookup',
    type: 'ordinal',
    minimumIntegerDigits: 2,
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
    minimumSignificantDigits: 4,
    maximumSignificantDigits: 6
  }); // correct

  // $FlowExpectedError[prop-missing]
  new PluralRules().format() // incorrect
  // $FlowExpectedError[incompatible-call]
  new PluralRules().select() // incorrect

  new PluralRules().select(1) // correct

  new PluralRules().resolvedOptions() // correct

  // $FlowExpectedError[prop-missing]
  PluralRules.getCanonicalLocales() // incorrect

  // $FlowExpectedError[incompatible-call]
  PluralRules.supportedLocalesOf(1) // incorrect
  PluralRules.supportedLocalesOf('en') // correct
  PluralRules.supportedLocalesOf([ 'en' ]) // correct
}
