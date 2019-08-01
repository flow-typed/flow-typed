const del = require("del");

del("**/.DS_Store").then((x: string[]) => {});

del(["foo", "bar"]).then((x: string[]) => {});

del(["../../foo/**"], {
  force: true
}).then((x: string[]) => {});

(del.sync("**/.DS_Store"): string[]);

(del.sync(["foo", "bar"]): string[]);

// $ExpectError
del(123);

// $ExpectError
del.sync(123);
