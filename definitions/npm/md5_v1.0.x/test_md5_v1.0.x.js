import md5 from "md5";

const hash = md5("message");

(hash: string);

md5(new Buffer("message áßäöü", "utf8"));

// $FlowExpectedError
md5(5);

// $FlowExpectedError
md5(undefined);
