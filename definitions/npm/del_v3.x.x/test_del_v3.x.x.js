const del = require("del");

del("**/.DS_Store").then((x: string[]) => {});

del(["foo", "bar"]).then((x: string[]) => {});

del(["../../foo/**"], {
  force: true
}).then((x: string[]) => {});

(del.sync("**/.DS_Store"): string[]);

(del.sync(["foo", "bar"]): string[]);

// $FlowExpectedError
del(123);

// $FlowExpectedError
del.sync(123);
