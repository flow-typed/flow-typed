import serve from "koa-static";

// $ExpectError (Must pass in a root)
serve();
serve("/");

// $ExpectError (Can't use invalid option)
serve("/", { zip: true });
serve("/", { gzip: true });

// $ExpectError (Options must have proper types)
serve("/", { format: "true" });
serve("/", { format: true });
