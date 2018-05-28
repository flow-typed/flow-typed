const camelCase = require("camelcase");

// source: https://github.com/sindresorhus/camelcase/blob/a526ef03/readme.md#usage
camelCase("foo-bar");
camelCase("foo_bar");
camelCase("Foo-Bar");
camelCase("foo bar");

camelCase("Foo-Bar", {});
camelCase("Foo-Bar", { pascalCase: true });
camelCase("--foo.bar", { pascalCase: false });

camelCase(["foo", "bar"]);
camelCase(["__foo__", "--bar"], {});
camelCase(["__foo__", "--bar"], { pascalCase: true });
camelCase(["__foo__", "--bar"], { pascalCase: false });

// $ExpectError
camelCase(3);
// $ExpectError
camelCase("Foo-Bar", { pascalCase: "of course" });
// $ExpectError
camelCase();
