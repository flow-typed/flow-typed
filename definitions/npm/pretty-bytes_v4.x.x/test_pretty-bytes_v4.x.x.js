const prettyBytes = require("pretty-bytes");

(prettyBytes(123): string);

// $ExpectError
prettyBytes("123");

// $ExpectError
prettyBytes(true);
