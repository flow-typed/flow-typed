import humanize from "humanize-number";

humanize(1);

(humanize(1): string);

humanize(1.23);

humanize(100, { delimiter: " " });
humanize(100, { separator: "," });

// $FlowExpectedError - always returns a string
(humanize(1): number);
// $FlowExpectedError - always returns a string
(humanize(1.3424): boolean);

// $FlowExpectedError - only accepts a number
humanize(true);
// $FlowExpectedError - only accepts a number
humanize("flow");

// $FlowExpectedError - delimiter must be a string
humanize(1, { delimiter: true });
// $FlowExpectedError - separator must be a string
humanize(1, { separator: 1 });
