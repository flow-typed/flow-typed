import raven from "raven-js";

// $ExpectError
raven.config();

// $ExpectError
raven.config(0, 0);

raven.config("dsn");
raven.config("dsn", {});
raven.config("dsn", {
  level: "critical"
});

// $ExpectError
raven.config("dsn", {
  level: "abc123"
});

raven.config("dsn").install();

(raven.isSetup(): boolean);
