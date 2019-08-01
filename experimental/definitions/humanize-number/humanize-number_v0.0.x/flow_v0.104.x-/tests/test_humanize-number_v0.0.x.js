import humanize from "humanize-number";

humanize(1);

(humanize(1): string);

humanize(1.23);

humanize(100, { delimiter: " " });
humanize(100, { separator: "," });

// $ExpectError - always returns a string
(humanize(1): number);
// $ExpectError - always returns a string
(humanize(1.3424): boolean);

// $ExpectError - only accepts a number
humanize(true);
// $ExpectError - only accepts a number
humanize("flow");

// $ExpectError - delimiter must be a string
humanize(1, { delimiter: true });
// $ExpectError - separator must be a string
humanize(1, { separator: 1 });
