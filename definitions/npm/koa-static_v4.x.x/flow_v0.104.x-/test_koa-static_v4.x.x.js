import serve from "koa-static";

// $FlowExpectedError (Must pass in a root)
serve();
serve("/");

// $FlowExpectedError (Can't use invalid option)
serve("/", { zip: true });
serve("/", { gzip: true });

// $FlowExpectedError (Options must have proper types)
serve("/", { format: "true" });
serve("/", { format: true });
