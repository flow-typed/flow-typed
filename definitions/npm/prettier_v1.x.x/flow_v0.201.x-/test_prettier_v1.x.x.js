import prettier, { type Options } from "prettier";

const code = "let x =  10";

// $FlowExpectedError (Must pass in some source code)
prettier.format();
prettier.format(code);

// $FlowExpectedError (Can't use unsupported options)
prettier.format(code, { printWith: 80 });
prettier.format(code, { printWidth: 80 });

// $FlowExpectedError (Options should have proper types)
prettier.format(code, { parser: "flo" });
prettier.format(code, { parser: "flow" });

// $FlowExpectedError (Same as above, but with explicit annotation)
const badOptions: Options = { parser: "flo" };
const goodOptions: Options = { parser: "flow" };

// $FlowExpectedError (Must pass in some source code)
prettier.check();
prettier.check(code);

// $FlowExpectedError (Can't use unsupported options)
prettier.check(code, { sem: true });
prettier.check(code, { semi: true });

// $FlowExpectedError (Options should have proper types)
prettier.check(code, { singleQuote: "true" });
prettier.check(code, { singleQuote: true });

// $FlowExpectedError (Must include CursorOptions)
prettier.formatWithCursor(code);
// $FlowExpectedError (CursorOptions must have cursorOffset)
prettier.formatWithCursor(code, {});
// $FlowExpectedError (CursorOptions cannot have rangeStart or rangeEnd)
prettier.formatWithCursor(code, { cursorOffset: 10, rangeStart: 1 });
prettier.formatWithCursor(code, { cursorOffset: 10 });

// $FlowExpectedError (Must include filePath)
prettier.resolveConfig();
prettier.resolveConfig("/path");

const asyncConfig = prettier.resolveConfig("/path");
if (asyncConfig != null) {
  // $FlowExpectedError (Returns promise)
  (asyncConfig.printWidth: number);
}
(prettier.resolveConfig("/path"): Promise<?{ printWidth?: number, ... }>);

// $FlowExpectedError (Options should have proper types)
prettier.resolveConfig("/path", { useCache: "true" });
prettier.resolveConfig("/path", { useCache: true });

// $FlowExpectedError (Must include filePath)
prettier.resolveConfig.sync();
prettier.resolveConfig.sync("/path");

const syncConfig = prettier.resolveConfig.sync("/path");
if (syncConfig != null) {
  (syncConfig.printWidth: void | number);
}
// $FlowExpectedError (Does not return promise)
(syncConfig: Promise<?{ printWidth?: number, ... }>);

// $FlowExpectedError (Options should have proper types)
prettier.resolveConfig.sync("/path", { useCache: "true" });
prettier.resolveConfig.sync("/path", { useCache: true });

// $FlowExpectedError (Must use correct name)
prettier.clearConfigCash();
prettier.clearConfigCache();

// $FlowExpectedError (Version should be a string)
prettier.getSupportInfo(0.1);
prettier.getSupportInfo("0.1");

prettier.format(code, {
  parser() {
    // $FlowExpectedError (Custom parser should return an ast)
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
(result.languages: Array<any>);
(result.options: Array<any>);
