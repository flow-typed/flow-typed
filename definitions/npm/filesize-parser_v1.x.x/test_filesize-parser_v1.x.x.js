const filesizeParser = require("filesize-parser");

(filesizeParser("100Kb"): number);

(filesizeParser("100Kb", { base: 2 }): number);

// $FlowExpectedError
filesizeParser("100Kb", 123);

// $FlowExpectedError
filesizeParser(123);

// $FlowExpectedError
filesizeParser(true);

// $FlowExpectedError
filesizeParser("100Kb", { base: true });
