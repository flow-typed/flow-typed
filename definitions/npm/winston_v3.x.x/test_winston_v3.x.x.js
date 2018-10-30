import winston from "winston";

winston.log({
  level: "info",
  message: "default logger info message"
});
winston.error("default logger error message");
// $ExpectError
winston.nonExistantLevel("default logger nonExistantLevel message");

// See example:
// https://github.com/winstonjs/winston/blob/c868f0ccdc6ddc45e586c9808d99ebae8351113b/README.md#formats
const customPrintf = winston.format.printf(info => {
  return `${info.level}: ${info.message}`;
});
let logger = winston.createLogger({
  format: winston.format.combine(
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
        winston.format.timestamp(),
        winston.format.simple()
      )
    })
  ]
});
logger.info("info message");
logger.error("error message");
logger.log({
  level: "debug",
  message: "debug message"
});

logger.clear();

const consoleTransport = new winston.transports.Console();

consoleTransport.level = 'debug';
consoleTransport.silent = true;

logger.add(consoleTransport);
logger.remove(consoleTransport);

logger.configure({
  level: "error"
});
logger.warn("warn message");

// $ExpectError
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
logger.foo("foo message");
logger.bar("bar message");
logger.info("info message");

logger = winston.loggers.add("categoryOneId", {
  format: winston.format.json(),
  level: "debug",
  transports: [new winston.transports.Console()]
});

logger.debug("categoryOneId debug message");

const container = new winston.Container({
  format: winston.format.json(),
  level: "debug",
  transports: [new winston.transports.File({ filename: "new-container.log" })]
});
container.add("categoryTwoId");
container.add("categoryThreeId");

logger = container.get("categoryTwoId");

logger.error("categoryTwoId error message");
