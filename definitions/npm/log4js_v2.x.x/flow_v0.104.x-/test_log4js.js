/* @flow */

import log4js from "log4js";
import type { LoggingEvent } from "log4js";

log4js.configure({
  appenders: { out: { type: "stdout", layout: { type: "dummy" } } },
  categories: { default: { appenders: ["out"], level: "info" } }
});

// $FlowExpectedError
log4js.configure({
  appenders: [{}]
});

log4js.getLogger().log("test");
log4js.getLogger("test").error("test", "test");

// $FlowExpectedError
log4js.getLogger("test").test("test");

// $FlowExpectedError
log4js.getLogger(1);

log4js.shutdown(() => {});

log4js.connectLogger(log4js.getLogger(), {});

log4js.addLayout("test", config => {
  return (event: LoggingEvent) => "log";
});
