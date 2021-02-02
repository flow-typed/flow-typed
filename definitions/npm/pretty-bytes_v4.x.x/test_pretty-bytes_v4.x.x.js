const prettyBytes = require("pretty-bytes");

(prettyBytes(123): string);

// $FlowExpectedError
prettyBytes("123");

// $FlowExpectedError
prettyBytes(true);
