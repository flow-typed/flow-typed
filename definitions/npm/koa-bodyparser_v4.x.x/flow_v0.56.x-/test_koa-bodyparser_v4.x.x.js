import bodyParser from "koa-bodyparser";

// Should work with no options passed
bodyParser();

// $ExpectError (Options should be an object)
bodyParser("{}");
bodyParser({});

// $ExpectError (Can't use invalid option)
bodyParser({ stict: true });
bodyParser({ strict: true });

// $ExpectError (Must use valid types for options)
bodyParser({ formLimit: 56 });
bodyParser({ formLimit: "56kb" });
