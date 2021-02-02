const glob = require("glob-promise");

const strings = [];

glob("**/*.js").then((foo: string[]) => {
  foo.forEach(e => strings.push(e));
});

// $FlowExpectedError
glob("**/*.js").then((foo: string) => {
  strings.push(foo);
});

// $FlowExpectedError
glob.promise("**/*.js").then((foo: {}) => {
  strings.push(foo);
});

// $FlowExpectedError
glob.glob("**/*.js", (foo: {}) => {
  strings.push(foo);
});

glob.glob("**/*.js", (foo: string[]) => {
  foo.forEach(e => strings.push(e));
});

const inst = new glob.Glob("**/*.js");
const inst2 = new glob.Glob("**/*.js", {});
const inst3 = new glob.Glob("**/*.js", (foo: string[]) => {});
const inst4 = new glob.Glob("**/*.js", { nodir: true }, (foo: string[]) => {});
// $FlowExpectedError
const inst5 = new glob.Glob("**/*.js", (foo: string[]): void => {}, {});
inst.on("end", () => null);

const a: boolean = glob.hasMagic("**/*", {});
// $FlowExpectedError
const b: boolean = glob.hasMagic("**/*", { invalidOption: 123 });
const c = glob.sync("**/*");
const d: string[] = glob.sync("**/*", { cwd: "/" });
// $FlowExpectedError
const e: string = glob.sync("**/*");
