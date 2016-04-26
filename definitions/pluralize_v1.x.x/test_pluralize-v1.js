// @flow
import Pluralize from 'pluralize';

const A: string = Pluralize('foo');
const B: string = Pluralize('foo', 3);
// $ExpectError wrong order
const C: string = Pluralize('foo', true, 3);
Pluralize.addPluralRule('rule', 'replacement');
Pluralize.addIrregularRule('rule', 'replacement');
