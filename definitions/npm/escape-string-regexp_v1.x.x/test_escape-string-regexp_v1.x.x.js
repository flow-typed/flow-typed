import escapeStringRegexp from 'escape-string-regexp';

const escapedString = escapeStringRegexp('how much $ for a unicorn?');
//=> 'how much \$ for a unicorn\?'

new RegExp(escapedString);

// $FlowExpectedError
escapeStringRegexp(42);

// $FlowExpectedError
(escapeStringRegexp('how much $ for a unicorn?'): number);
