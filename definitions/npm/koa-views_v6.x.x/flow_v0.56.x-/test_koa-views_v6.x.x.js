import views from "koa-views";

// $ExpectError (Must pass in a root)
views();
views("/");

// $ExpectError (Can't use invalid option)
views("/", { ext: "pug" });
views("/", { extension: "pug" });

// $ExpectError (Options must have proper types)
views("/", { map: "{ html: 'nunjucks' }" });
views("/", { map: { html: "nunjucks" } });
