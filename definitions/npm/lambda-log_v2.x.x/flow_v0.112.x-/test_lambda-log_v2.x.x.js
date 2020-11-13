// @flow

import log from "lambda-log";
import type { LogMessage } from "lambda-log";

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

const goodLogLevels = {
  fatal: "error",
  ok: function(message) {return 'log';}
};

const goodCustomInstance = new log.LambdaLog<typeof goodLogLevels>({}, goodLogLevels);
goodCustomInstance.fatal("custom level");

// $FlowExpectedError[prop-missing]
goodCustomInstance.wrong("not a defined log level");


const badLogLevels = {
  fatal: "error",
  wrong: "verybad"
};

// $FlowExpectedError[incompatible-call]
const badCustomInstance = new log.LambdaLog<typeof badLogLevels>({}, badLogLevels);
