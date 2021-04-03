const serve = require('koa-static');

// $FlowExpectedError[incompatible-call] (Must pass in a root)
serve();
serve("/");

// $FlowExpectedError[prop-missing] (Can't use invalid option)
serve("/", { zip: true });
serve("/", { gzip: true });

// $FlowExpectedError[incompatible-call] (Options must have proper types)
serve("/", { format: "true" });
serve("/", { format: true });
