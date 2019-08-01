import ErrorStackParser from "error-stack-parser";

ErrorStackParser.parse(new Error());

// $ExpectError
ErrorStackParser.parse("error");
