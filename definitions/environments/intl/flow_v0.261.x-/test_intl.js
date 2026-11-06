/* @flow */

// $FlowExpectedError[incompatible-type]
// $FlowExpectedError[not-a-function]
const a: string = Intl.getCanonicalLocales(); // incorrect
const getCanonicalLocales = Intl.getCanonicalLocales;
if (getCanonicalLocales) {
  // $FlowExpectedError[incompatible-type]
  const b: string = getCanonicalLocales(); // incorrect
  // $FlowExpectedError[incompatible-type]
  const c: string[] = getCanonicalLocales(null); // incorrect
  // $FlowExpectedError[incompatible-type]
  const d: string[] = getCanonicalLocales([ 1, 2 ]); // incorrect
  const e: string[] = getCanonicalLocales(); // correct
  const f: string[] = getCanonicalLocales('ar'); // correct
  const g: string[] = getCanonicalLocales([ 'en', 'pt-BR' ]); // correct
}

// $FlowExpectedError[prop-missing]
const h = Intl.Unknown; // incorrect
const i = Intl.Collator; // correct
const j = Intl.DateTimeFormat; // correct
const k = Intl.Locale; // correct
const l = Intl.NumberFormat; // correct
const m = Intl.PluralRules; // correct
