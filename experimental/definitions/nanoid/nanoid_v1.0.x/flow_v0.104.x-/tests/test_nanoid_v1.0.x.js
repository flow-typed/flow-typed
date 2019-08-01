import nanoid from "nanoid";
import format from "nanoid/format";
import generate from "nanoid/generate";
import url from "nanoid/url";

const id1: string = nanoid();

// $ExpectError
const id2: number = nanoid();

nanoid(10);

// $ExpectError
nanoid("10");

const random = () => [""];

const f1: string = format(random, "", 10);

// $ExpectError
const f2: number = format(random, "", 10);

// $ExpectError
format(10, "", 10);

// $ExpectError
format(random, 10, 10);

// $ExpectError
format(random, "", "");

const g1: string = generate("", 10);

// $ExpectError
const g2: number = generate("", 10);

// $ExpectError
generate(10, 10);

// $ExpectError
generate("", "");

const url1: string = url;

// $ExpectError
const url2: number = url;
