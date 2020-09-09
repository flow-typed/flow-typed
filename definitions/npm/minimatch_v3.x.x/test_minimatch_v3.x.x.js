const minimatch = require("minimatch");
const Minimatch = minimatch.Minimatch;

(minimatch("bar.foo", "*.foo"): boolean);

(minimatch("bar.foo", "*.+(bar|foo)", { debug: true }): boolean);

const mm = new Minimatch("*.foo", { noglobstar: true });
(mm.match("x.foo"): boolean);

// $FlowExpectedError
new Minimatch("*.foo", 1);

// $FlowExpectedError
minimatch("bar.foo");

minimatch.filter("*.foo", { dot: true });
