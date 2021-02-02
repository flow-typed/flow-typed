import views from "koa-views";

// $FlowExpectedError[incompatible-call] (Must pass in a root)
views();
views("/");

// $FlowExpectedError[prop-missing] (Can't use invalid option)
views("/", { ext: "pug" });
views("/", { extension: "pug" });

// $FlowExpectedError[incompatible-call] (Options must have proper types)
views("/", { map: "{ html: 'nunjucks' }" });
views("/", { map: { html: "nunjucks" } });
