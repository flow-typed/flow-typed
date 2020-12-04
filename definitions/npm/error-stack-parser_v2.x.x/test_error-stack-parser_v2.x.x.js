import ErrorStackParser from "error-stack-parser";

ErrorStackParser.parse(new Error());

// $FlowExpectedError
ErrorStackParser.parse("error");
