import bodyParser from "koa-bodyparser";

// Should work with no options passed
bodyParser();

// $FlowExpectedError (Options should be an object)
bodyParser("{}");
bodyParser({});

// $FlowExpectedError (Can't use invalid option)
bodyParser({ stict: true });
bodyParser({ strict: true });

// $FlowExpectedError (Must use valid types for options)
bodyParser({ formLimit: 56 });
bodyParser({ formLimit: "56kb" });

// Should work when requiring koa-bodyparser
var requiredBodyParser = require('koa-bodyparser');
requiredBodyParser();
