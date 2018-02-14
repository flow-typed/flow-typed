import md5 from "nano-md5";

// $ExpectError: accept only strings
md5(6);

md5.fromUtf8('hello').toHex();
md5.crypt('hello', '$1$01234567');

const hash: String = md5.fromBytes('hello');
