import md5 from "md5";

const hash = md5("message");

(hash: string);

md5(new Buffer("message áßäöü", "utf8"));

// $ExpectError
md5(5);

// $ExpectError
md5(undefined);
