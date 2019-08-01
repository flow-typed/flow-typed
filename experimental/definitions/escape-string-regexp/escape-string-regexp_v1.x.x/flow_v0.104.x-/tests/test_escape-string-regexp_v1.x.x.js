import escapeStringRegexp from 'escape-string-regexp';

const escapedString = escapeStringRegexp('how much $ for a unicorn?');
//=> 'how much \$ for a unicorn\?'

new RegExp(escapedString);

// $ExpectError
escapeStringRegexp(42);

// $ExpectError
(escapeStringRegexp('how much $ for a unicorn?'): number);
