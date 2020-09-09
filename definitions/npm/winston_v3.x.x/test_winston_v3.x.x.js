import winston, { format } from "winston";
import type { Logger, Levels, Format, ConsoleTransport, Container, FormatSubModule } from "winston";

const winstonAlternative = require('winston');
(winstonAlternative: typeof winston);

winston.log({
  level: "info",
  message: "default logger info message"
});
winston.error("default logger error message");
// $FlowExpectedError
winston.nonExistantLevel("default logger nonExistantLevel message");

// See example:
// https://github.com/winstonjs/winston/blob/c868f0ccdc6ddc45e586c9808d99ebae8351113b/README.md#formats
const customFormat = winston.format(info => info);

const customPrintf: Format = winston.format.printf(info => {
  return `${info.level}: ${info.message}`;
});

let logger: Logger<Levels> = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    customFormat(),
    winston.format.json(),
    winston.format.label({label: 'label'}),
    winston.format.colorize(),
    winston.format.logstash(),
    customPrintf
  ),
  level: "debug",
  exitOnError: false,
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({ format: 'This is timestamp string' }),
        winston.format.simple()
      )
    })
  ]
});
logger
  .info("info message")
  .error("error message")
  .log({
    level: "debug",
    message: "debug message"
  });

logger
  .clear()
  .close();

const consoleTransport: ConsoleTransport<Levels> = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.timestamp({ format: () => 'This is timestamp function' }),
    winston.format.simple()
  )
});

consoleTransport.level = 'debug';
consoleTransport.silent = true;

logger
  .add(consoleTransport)
  .remove(consoleTransport);

logger.configure({
  level: "error"
});
logger.warn("warn message");

// $FlowExpectedError
logger = winston.createLogger({
  format: winston.format.prettyPrint(),
  level: "foo",
  levels: {
    foo: 0,
    bar: 1,
    baz: 2
  },
  transports: [new winston.transports.Console()]
});
logger
  .foo("foo message")
  .bar("bar message")
  .info("info message");

logger = winston.loggers.add("categoryOneId", {
  format: winston.format.json(),
  level: "debug",
  transports: [new winston.transports.Console()]
});
const hasCategoryOneId: boolean = winston.loggers.has("categoryOneId");

logger.debug("categoryOneId debug message");

winston.loggers.close("categoryOneId");
winston.loggers.close();

const container: Container<Levels> = new winston.Container({
  format: winston.format.json(),
  level: "debug",
  transports: [new winston.transports.File({ filename: "new-container.log" })]
});

container.add("categoryTwoId");
const hasCategoryTwoId: boolean = container.has("categoryTwoId");

container.add("categoryThreeId");
const hasCategoryThreeId: boolean = container.has("categoryThreeId");

logger = container.get("categoryTwoId");

logger.error("categoryTwoId error message");

container.close("categoryThreeId");
container.close();

(format: FormatSubModule);
