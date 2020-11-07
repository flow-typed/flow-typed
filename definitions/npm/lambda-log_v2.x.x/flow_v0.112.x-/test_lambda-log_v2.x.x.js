// @flow

import log from "lambda-log";
import type { LogMessage, LambdaLog } from "lambda-log";

const logMessage: LogMessage = log.log("customLevel", "custom", {
  key: "value"
});
logMessage.level;
logMessage.meta;
logMessage.tags;
logMessage.msg;
logMessage.value;
logMessage.log;
logMessage.toJSON(true);

log.info("info", { key: "value" });
log.warn("warn", { key: "value" });
log.error(new Error("This is an error"), { key: "value" });
log.debug("debug", { key: "value" });

// $FlowExpectedError[incompatible-call]
log.info(1.2345, { key: "value" });

log.assert(true, "this will print");

const logInstance = new log.LambdaLog({
  dynamicMeta: (logMessage: LogMessage) => {
    return {
      value: logMessage.value
    };
  }
});
logInstance.log("customLevel", "custom", { key: "value" });
logInstance.info("info", { key: "value" });
logInstance.warn("warn", { key: "value" });
logInstance.error(new Error("This is an error"), { key: "value" });
logInstance.debug("debug", { key: "value" });
logInstance.assert(true, "this will print");
