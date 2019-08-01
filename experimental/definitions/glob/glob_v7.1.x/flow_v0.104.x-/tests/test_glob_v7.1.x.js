// @flow

import { describe, it } from "flow-typed-test";
import glob, { type Options } from "glob";
const Glob = glob.Glob;

let pattern = "**/*.js";
let callback = (err, matches) => {};
let options = {
  debug: true,
  nobrace: true,
  noglobstar: true,
  dot: true,
  noext: true,
  nocase: true,
  nonull: true,
  matchBase: true,
  nocomment: true,
  nonegate: true,
  flipNegate: true,
  cwd: "",
  root: "",
  nomount: true,
  mark: true,
  nosort: true,
  stat: true,
  silent: true,
  strict: true,
  cache: {
    test: true
  },
  statCache: {
    test: true
  },
  symlinks: { test: true },
  realpathCache: { test: "" },
  sync: true,
  nounique: true,
  nodir: true,
  ignore: "",
  follow: true,
  realpath: true,
  absolute: true
};

describe("The `glob` function", () => {
  it("should validate the pattern, callback signature", () => {
    glob(pattern, callback);
    // $ExpectError
    glob(pattern);
    // $ExpectError
    glob({}, {});
  });

  it("should validate the pattern, options, callback signature", () => {
    glob(pattern, options, callback);
    // $ExpectError
    glob(pattern, options);
    // $ExpectError
    glob(pattern, callback, options);
  });

  it("should return undefined", () => {
    (glob(pattern, callback): void);
    // $ExpectError
    (glob(pattern, callback): boolean);
  });
});

describe("The `glob.hasMagic` function", () => {
  it("should accept a string for its `pattern` parameter", () => {
    glob.hasMagic(pattern);
    // $ExpectError
    glob.hasMagic({});
  });

  it("should accept an object for its `options` parameter", () => {
    glob.hasMagic(pattern, {});
    glob.hasMagic(pattern, options);
    // $ExpectError
    glob.hasMagic(pattern, callback);
  });

  it("should return a boolean", () => {
    (glob.hasMagic(pattern): boolean);
    // $ExpectError
    (glob.hasMagic(pattern): string);
  });
});

describe("The `glob.sync` function", () => {
  it("should accept a string for its `pattern` parameter", () => {
    glob.sync(pattern);
    // $ExpectError
    glob.sync({});
  });

  it("should accept an object for its `options` parameter", () => {
    glob.sync(pattern, {});
    glob.sync(pattern, options);
    // $ExpectError
    glob.sync(pattern, callback);
  });

  it("should return a matches Array", () => {
    (glob.sync(pattern): Array<string>);
    // $ExpectError
    (glob.sync(pattern): string);
  });
});

describe("The `Glob` constructor", () => {
  it("should validate the pattern signature", () => {
    new Glob(pattern);
    // $ExpectError
    new Glob({});
  });

  it("should validate the pattern, callback signature", () => {
    new Glob(pattern, callback);
    // $ExpectError
    new Glob(pattern, options);
  });

  it("should validate the pattern, options, callback signature", () => {
    new Glob(pattern, options, callback);
    // $ExpectError
    new Glob(pattern, callback, options);
  });
});

describe("The `Glob` properties", () => {
  it("should validate on default usage", () => {
    let mg = new Glob("");
    (mg.aborted: boolean);
    (mg.cache: $PropertyType<Options, "cache">);
    (mg.statCache: $PropertyType<Options, "statCache">);
  });
});

describe("The `Glob` events", () => {
  it("should validate on default usage", () => {
    let mg = new Glob("");
    mg.on("end", () => {});
    mg.on("match", () => {});
    mg.on("error", () => {});
    mg.on("abort", () => {});
  });
});

describe("The `Glob` methods", () => {
  it("should validate on default usage", () => {
    let mg = new Glob("");
    mg.pause();
    mg.resume();
    mg.abort();
    // $ExpectError
    mg.pause(() => {});
    // $ExpectError
    mg.resume(() => {});
    // $ExpectError
    mg.abort(() => {});
  });
});
