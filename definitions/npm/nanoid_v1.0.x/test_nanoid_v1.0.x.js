import nanoid from "nanoid";
import format from "nanoid/format";
import generate from "nanoid/generate";
import url from "nanoid/url";

const id1: string = nanoid();

// $FlowExpectedError
const id2: number = nanoid();

nanoid(10);

// $FlowExpectedError
nanoid("10");

const random = () => [""];

const f1: string = format(random, "", 10);

// $FlowExpectedError
const f2: number = format(random, "", 10);

// $FlowExpectedError
format(10, "", 10);

// $FlowExpectedError
format(random, 10, 10);

// $FlowExpectedError
format(random, "", "");

const g1: string = generate("", 10);

// $FlowExpectedError
const g2: number = generate("", 10);

// $FlowExpectedError
generate(10, 10);

// $FlowExpectedError
generate("", "");

const url1: string = url;

// $FlowExpectedError
const url2: number = url;
