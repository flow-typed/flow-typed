import views from "koa-views";

// $FlowExpectedError (Must pass in a root)
views();
views("/");

// $FlowExpectedError (Can't use invalid option)
views("/", { ext: "pug" });
views("/", { extension: "pug" });

// $FlowExpectedError (Options must have proper types)
views("/", { map: "{ html: 'nunjucks' }" });
views("/", { map: { html: "nunjucks" } });
