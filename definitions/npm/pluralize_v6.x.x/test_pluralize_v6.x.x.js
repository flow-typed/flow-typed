// @flow

import pluralize from "pluralize";

(pluralize('word'): string);
pluralize('word', 0);
pluralize('word', 0, true);
pluralize.addIrregularRule('word', 'wordz');

// $ExpectError
pluralize();
// $ExpectError
pluralize.nope;


// All examples from github should pass https://github.com/blakeembrey/pluralize
pluralize('test');
pluralize('test', 1);
pluralize('test', 5);
pluralize('test', 1, true);
pluralize('test', 5, true);
pluralize('蘋果', 2, true);

pluralize.plural('regex');
pluralize.addPluralRule(/gex$/i, 'gexii');
pluralize.plural('regex');

pluralize.singular('singles');
pluralize.addSingularRule(/singles$/i, 'singular');
pluralize.singular('singles');

pluralize.plural('irregular');
pluralize.addIrregularRule('irregular', 'regular');
pluralize.plural('irregular');

pluralize.plural('paper');
pluralize.addUncountableRule('paper');
pluralize.plural('paper');

pluralize.isPlural('test');
pluralize.isSingular('test');
