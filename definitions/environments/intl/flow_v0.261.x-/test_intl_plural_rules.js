/* @flow */

// $FlowExpectedError[not-a-function]
  // $FlowExpectedError[prop-missing]
const a = Intl.PluralRules(); // incorrect
const PluralRules = Intl.PluralRules
if (PluralRules) { 
  // $FlowExpectedError[prop-missing]
  const b = PluralRules(); // incorrect
  const c = new PluralRules(); // correct
  // $FlowExpectedError[incompatible-type]
  new PluralRules(1); // incorrect
  new PluralRules('en'); // correct
  new PluralRules([ 'en', 'pt' ]); // correct
  new PluralRules('en', {
    // $FlowExpectedError[incompatible-type]
    localeMatcher: 'best one',
    // $FlowExpectedError[incompatible-type]
    type: 'count',
    // $FlowExpectedError[incompatible-type]
    minimumIntegerDigits: '',
    minimumFractionDigits: a,
    maximumFractionDigits: b,
    // $FlowExpectedError[incompatible-type]
    minimumSignificantDigits: c,
    // $FlowExpectedError[incompatible-type]
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
  // $FlowExpectedError[incompatible-type]
  new PluralRules().select() // incorrect

  new PluralRules().select(1) // correct

  new PluralRules().resolvedOptions() // correct

  // $FlowExpectedError[prop-missing]
  PluralRules.getCanonicalLocales() // incorrect

  // $FlowExpectedError[incompatible-type]
  PluralRules.supportedLocalesOf(1) // incorrect
  PluralRules.supportedLocalesOf('en') // correct
  PluralRules.supportedLocalesOf([ 'en' ]) // correct
}
