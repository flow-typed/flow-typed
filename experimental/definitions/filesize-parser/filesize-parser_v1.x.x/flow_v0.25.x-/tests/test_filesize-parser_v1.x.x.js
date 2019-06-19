const filesizeParser = require("filesize-parser");

(filesizeParser("100Kb"): number);

(filesizeParser("100Kb", { base: 2 }): number);

// $ExpectError
filesizeParser("100Kb", 123);

// $ExpectError
filesizeParser(123);

// $ExpectError
filesizeParser(true);

// $ExpectError
filesizeParser("100Kb", { base: true });
