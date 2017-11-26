// @flow

import pino from "pino";
import type { Logger } from "pino";

const p: Logger = pino();

p.info("hello world");
p.error("this is at error level");
p.info("the answer is %d", 42);
p.info({ obj: 42 }, "hello world");
p.info({ obj: 42, b: 2 }, "hello world");
p.info({ obj: { aa: "bbb" } }, "another");
setImmediate(p.info, "after setImmediate");
p.error(new Error("an error"));

// $ExpectError
p.LOG_VERSION = 10;

// $ExpectError
p("no log level");

const pretty = pino.pretty();
pretty.pipe(process.stdout);
const log = pino(
  {
    name: "app",
    safe: true
  },
  pretty
);

log.child({ widget: "foo" }).info("hello");
log.child({ widget: "bar" }).warn("hello 2");
