import prettier, { type Options } from "prettier";

const code = "let x =  10";

// $ExpectError (Must pass in some source code)
prettier.format();
prettier.format(code);

// $ExpectError (Can't use unsupported options)
prettier.format(code, { printWith: 80 });
prettier.format(code, { printWidth: 80 });

// $ExpectError (Options should have proper types)
prettier.format(code, { parser: "flo" });
prettier.format(code, { parser: "flow" });

// $ExpectError (Same as above, but with explicit annotation)
const badOptions: Options = { parser: "flo" };
const goodOptions: Options = { parser: "flow" };

// $ExpectError (Must pass in some source code)
prettier.check();
prettier.check(code);

// $ExpectError (Can't use unsupported options)
prettier.check(code, { sem: true });
prettier.check(code, { semi: true });

// $ExpectError (Options should have proper types)
prettier.check(code, { singleQuote: "true" });
prettier.check(code, { singleQuote: true });

// $ExpectError (Must include CursorOptions)
prettier.formatWithCursor(code);
// $ExpectError (CursorOptions must have cursorOffset)
prettier.formatWithCursor(code, {});
// $ExpectError (CursorOptions cannot have rangeStart or rangeEnd)
prettier.formatWithCursor(code, { cursorOffset: 10, rangeStart: 1 });
prettier.formatWithCursor(code, { cursorOffset: 10 });

// $ExpectError (Must include filePath)
prettier.resolveConfig();
prettier.resolveConfig("/path");

const asyncConfig = prettier.resolveConfig("/path");
if (asyncConfig != null) {
  // $ExpectError (Returns promise)
  (asyncConfig.printWidth: number);
}
(prettier.resolveConfig("/path"): Promise<?{ printWidth?: number }>);

// $ExpectError (Options should have proper types)
prettier.resolveConfig("/path", { useCache: "true" });
prettier.resolveConfig("/path", { useCache: true });

// $ExpectError (Must include filePath)
prettier.resolveConfig.sync();
prettier.resolveConfig.sync("/path");

const syncConfig = prettier.resolveConfig.sync("/path");
if (syncConfig != null) {
  (syncConfig.printWidth: void | number);
}
// $ExpectError (Does not return promise)
(syncConfig: Promise<?{ printWidth?: number }>);

// $ExpectError (Options should have proper types)
prettier.resolveConfig.sync("/path", { useCache: "true" });
prettier.resolveConfig.sync("/path", { useCache: true });

// $ExpectError (Must use correct name)
prettier.clearConfigCash();
prettier.clearConfigCache();

// $ExpectError (Version should be a string)
prettier.getSupportInfo(0.1);
prettier.getSupportInfo("0.1");

prettier.format(code, {
  parser() {
    // $ExpectError (Custom parser should return an ast)
    return null;
  }
});

prettier.format(code, {
  parser(text, { babylon }) {
    const ast = babylon(text);
    return ast;
  }
});

/**
 * Test return types
 */

let result;

result = prettier.format(code);
(result: string);

result = prettier.check(code);
(result: boolean);

result = prettier.formatWithCursor(code, { cursorOffset: 1 });
(result.formatted: string);
(result.cursorOffset: number);

result = prettier.resolveConfig("/");
(result.then: Function);

result = prettier.clearConfigCache();
(result: void);

result = prettier.getSupportInfo("1.0");
(result.languages: Array<*>);
(result.options: Array<*>);
