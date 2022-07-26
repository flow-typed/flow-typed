# Contributing

Contributing library definitions is as easy as sending a pull request!

## ToC

* [Understanding the definitions structure](#understanding-the-definitions-structure)
* [Making a contribution](#making-a-contribution)
  * [Create package directory](#1-create-a-new-directory-called-definitionsnpmleft-pad_v4xx)
  * [Create flow directory](#2-in-this-new-directory-create-another-new-directory-called-flow_v083x-)
  * [Create definition](#3-place-your-libdef-inside-the-flow-version-directory-and-name-it-left-pad_v4xxjs)
  * [Create tests](#4-write-a-test-file-whose-name-starts-with-test_-in-the-flow-version-directory)
  * [Run tests](#5-run-your-tests)
  * [Raise pull request](#6-send-a-pull-request)
  * [Environment definitions](environment-definitions)
* [Libdef best practices](#libdef-best-practices)
  * [Read flow docs](#read-flow-docs)
  * [Don't import types from other libdefs](#dont-import-types-from-other-libdefs)
  * [Avoid `any` when possible](#avoid-any-when-possible)
  * [Exporting modules](#exporting-modules)
  * [Declaring types](#declaring-types)
  * [Avoid global types](#avoid-global-types)
  * [Prefer immutability](#prefer-immutability)
  * [Prefer exactness](#prefer-exactness)
  * [Partial/definitions definitions](#partialdefinitions-definitions)
  * [A note on flowgen](#a-note-on-flowgen)
* [Writing tests](#writing-tests)
  * [Use `describe` and `it` blocks to limit scope](#use-describe-and-it-blocks-to-limit-scope)

## Understanding the definitions structure

All definitions sit under the
[/definitions](https://github.com/flowtype/flow-typed/tree/master/definitions)
directory. They all must follow the following directory structure and naming
format:

```
└ definitions/
  ├ npm/
    ├ yargs_v4.x.x/           # <-- The name of the library, followed by _v<VERSION>
    | |
    | ├ flow_v0.83.x/         # <-- A folder containing libdefs tested against the
    | | |                     #     specified version(s) of Flow (v0.83.x in this
    | | |                     #     case).
    | | |
    | | └ yargs_v4.x.x.js     # <-- The libdef file meant for the Flow version
    | |                       #     specified by the containing directory's name.
    | |                       #     Must be named `<LIB>_v<VERSION>.js`.
    | |
    | ├ flow_v0.85.x-v0.91.x/ # <-- A folder containing libdefs tested against a
    | | |                     #     different range of Flow versions:
    | | |                     #     Anything from v0.85.x to v0.91.x (inclusive)
    | | |
    | | ├ yargs_v4.x.x.js     # <-- The libdef file for versions of Flow from
    | | |                     #     v0.85.x to v0.91.x (inclusive)
    | | |
    | | └ test_yargs.js       # <-- Tests in this directory only apply to the
    | |                       #     adjacent libdef (and thus, are specific to
    | |                       #     the libdefs for this specific Flow version)
    | |
    | └ test_yargs.js         # <-- Tests in this directory apply to libdefs for
    |                         #     all versions of Flow.
    ├ color_v0.7.x/
    ├ ...
  |
  ├ environments/
    ├ jsx/                    # <-- The name of the env environment
    | |
    | ├ flow_v0.83.x-/        # <-- A folder containing definition tested against the
    | | |                     #     specified version(s) of Flow (v0.83.x and onwards
    | | |                     #     in this case).
    | | |
    | | └ jsx.js              # <-- The environment definition file meant for the Flow version
    | ├ ...
    ├ ...
  ├ ...
```

Flow versions are semantically versioned (semver) with some restrictions:

* All of MAJOR, MINOR, and PATCH versions must be specified. It's acceptable to
  specify `x` in place of a number for MINOR and PATCH, but MAJOR cannot be `x`.
* Library versions cannot specify a semver range, but Flow versions can of the
  following forms:
  * **`flow_v0.83.x-`**: Flow v0.83.x and above
  * **`flow_v0.85.x-v0.91.x`**: Flow versions v0.85.x up to v0.91.x (inclusive)
  * **`flow_-v0.106.x`**: Every version under (and including) Flow v0.106.x

**We structure files this way to enable automated testing and tooling.**
Tests ensure that library definitions continue to work as expected and the
`flow-typed` tooling ensures that it's as easy as possible to find and install
library definitions.

## Making a contribution

Now that we understand where definitions go, let's say you've created a definition for an npm package in your own project called `left-pad` at
version `4.1.0`. **[You've followed all of the
best practices for writing high quality definitions,](https://github.com/flow-typed/flow-typed/issues/13#issuecomment-214892914)**
and now you'd like to contribute it.

> Flow-typed comes with a handy script to simplify the file creation process (`./create_def.sh`) which takes two args, the library name and the version you'd like to type. In the :point_down: example that would be `./create_def.sh left-pad 4.x.x`.
>
> This will cover steps 1 - 4, of course without real definitions or tests written for you.

> Before you start, if you think you have a fairly complicated library definition or one that you have not yet written and tested with your personal project you may consider leveraging our **test harness** which allows you to write code immediately in a simplified clean environment. Learn more [here](https://flow-typed.github.io/flow-typed/#/harness) or just create the harness (`./test_harness.sh`) to get started.

#### 1) Create a new directory called `definitions/npm/left-pad_v4.x.x/`.

***We call this the "package version directory".***

The naming scheme of this directory must be formatted as
`${packageName}_v${packageVersion}`. This convention is enforced by the
library-definition test runner.

You'll notice we specified the minor and patch as `x`, this will ensure that this libdef can cater to as many other consumers as possible, though you may opt to refine the version more if the library you're typing changes dramatically on minor/patch updates.

#### 2) In this new directory, create another new directory called `flow_v0.83.x-/`.

***We call this the "flow version directory".***

If you aren't sure which versions of flow your definition is compatible with,
just start with `flow_v0.83.x-`, and the test runner
(which we'll run in a later step) will tell us if there are problems in some
versions of Flow. `flow_v0.83.x-` is the version where the inexact object syntax
was added.

You may create multiple flow version directories to target different versions of
Flow if necessary.

#### 3) Place your libdef inside the flow version directory and name it `left-pad_v4.x.x.js`.

The name of the definition file must match the name of the package version
directory two levels up. This, too, will be enforced by the library-definition
test runner.

#### 4) Write a test file whose name starts with `test_` in the flow version directory.

> Such as `test_left-pad_v4.x.x.js`

Tests are simply `test_*.js` files that sit next to the library definition
file. They are normal @flow-ified .js files that import from and use the types
declared in the libdef in a way they are expected to be used.

The purpose of a test file is to exercise the library definition to some
reasonable degree. At minimum your tests should:

1. Import at least one thing from each of the modules `declare`'d in the
   definition.
1. Use the library definition in a couple of common ways that *should not*
   produce a type error.
1. Use the library definition in a couple of ways that are *expected* to produce
   a type error. Though type errors should fail your tests, you can add [error suppressions](https://flow.org/en/docs/errors/) to the line above just like you would in your own codebase.

[Here](https://github.com/flow-typed/flow-typed/blob/master/definitions/npm/highlight.js_v8.x.x/test_highlight.js-v8.js)
is an example of a nice and thorough test file. You don't necessarily have to be
this thorough, but the more thorough you are the better!

Sometimes you may want to break down your test suite instead of having one gigantic file. In that case you can actually write as many test files as you like as long as their names start with `test_`. [Redux](https://github.com/flow-typed/flow-typed/tree/master/definitions/npm/redux_v4.x.x/flow_v0.134.x-) followed this pattern.

Alternatively you can add test files in the **package version directory** which will be run by
the test-runner for *all* versions of flow the package version supports. Though general best practice as outlined above is using the **flow version directory**.

#### 5) Run your tests

```sh
# You only need to run this once which will
# build your local CLI allowing the test suite to run
# and run definition validations/tests
#
# If you ever make changes to the CLI files,
# make sure you rerun `./build.sh` to update the
# local build of the CLI with your changes.
./build.sh

# Subsequent testing after initial build can just use the following.
# This will run all changed files based on a git diff
# note: If you find that your changed files aren't being picked up
#       you can try `git add -A` then run the following script
./quick_run_def_tests.sh

# If you want to run something very specific,
# taking the left-pad example you can point to the
# local cli script and run tests against it
node cli/dist/cli.js run-tests left-pad

# Running the local cli without any args will run `all`
# tests which may take a while
node cli/dist/cli.js run-tests
```

> Windows instructions TBD if someone wants to help :construction_worker:

#### 6) Send a pull request

You know how to do it.

---

#### Environment definitions

The above are instructions on how to submit a library definition against npm packages though the process is similar if contributing environment definitions. Except instead of a package directory you just have an environment package that is the name of the environment without the need of versions.

## Libdef best practices

### Read flow docs

There's a solid writeup in the [Flow docs](https://flow.org/en/docs/libdefs/creation/) about creating new library definitions. Give it a read!

### Don't import types from other libdefs

You might think it would be possible to import types from other libdefs, much the same way you do in your own code:

```js
import type { MyType } from 'some-module';
declare module 'other-module' {
  declare export function takesMyType(val: MyType): number;
}
```

...but you would be wrong. Flow silently converts `MyType` to be typed `any`, and then sadness ensues.

**But wait, I want my React types!**

Good news! You can use the raw, private React types (e.g. `React$Node`, `React$ComponentType`) directly without importing them. You can also import types built into flow *inside* the module declaration:

```js
declare module 'example' {
  import type { Node } from 'react';
}
```

**So why don't I do that for importing other libdefs?**

Because it just doesn't work, sorry. You might think this is possible, but it isn't:

```js
declare module 'koa-router' {
  import type { Middleware } from 'koa';
}
```

To be super clear:

1. You can't import types from other libdefs in flow-typed
1. You can import types built into flow (e.g. from `react` or `fs`), only if you put the import statement inside the module declaration

[Further discussion here](https://github.com/flow-typed/flow-typed/issues/1857) and [here](https://github.com/flow-typed/flow-typed/issues/2023).

### Avoid `any` when possible

Using the `any` type for a variable or interface results in the loss of type information as types pass through it. That means if a type passes through `any` before propogating on to other code, the `any` will potentially cause flow to miss type errors!

In many places it is better (but also stricter) to use the `mixed` type rather than the `any` type. The `mixed` type is safer in that it allows anything to flow in to it, but can never be used downstream without [dynamic type tests](https://flow.org/en/docs/lang/refinements/#_) that verify the type at runtime.

Consider this code:

```js
const cache = new Map();
function setCache(key: string, value: any) {
  cache.set(key, value);
}
function getCache(key: string) {
  return cache.get(key);
}

setCache('foo', 42);
var someString = getCache('foo'); // oops, 'foo' isn't a string!
someString.length; // but because we used `any`, we don't know toerror here!
```

Because we've typed the values of the map as `any`, we open ourselves up to type errors:

If, however, we had used `mixed` instead of `any`, flow would ask us to verify that the type we got back from `getCache()` is in fact a `string` before using it as one:

```js
const cache = new Map();
function setCache(key: string, value: mixed) {
  cache.set(key, value);
}
function getCache(key: string) {
  return cache.get(key);
}

setCache('foo', 42);
var someString = getCache('foo');
if (typeof someString === 'string') {
  someString.length;
} else {
  throw new Error('`foo` is unexpectedly something other than a string!');
}
```

Because we used a dynamic type test in the second example, we've proved to flow that the `mixed` result must be a string. If we hadn't done this, flow would have given us an error reminding us that the value could be anything and it isn't safe to assume without checking first.

There is sometimes a trade-off with using `mixed`, though. Using `mixed` means that if your variable ever does flow downstream, you'll always have to prove what kind of type it is (with a type test) before you can use it. Sometimes this is just too annoying and the risk involved with `any` is just worth the trade-off.

In the case of library definitions, it is almost always better to use `mixed` for function and method parameters because the trade-off is hidden from users:

```js
declare function setCache(key: string, value: mixed): void;

setCache('number', 42); // Ok
setCache('string', 'asdf'); // Ok
```

It is also almost always ok to use `mixed` as the return type of a callback:

```js
declare function getUser(cb: (user: User) => mixed): void;
getUser((user) => console.log('Got the user!'));
```

Using `mixed` in place of `any` for the return type of a function or the type of a variable is a judgement call, though. Return types and declared variables flow into users' programs, which means that users will have to prove the type of `mixed` before they can use them.

### Exporting modules

When you export a module, you have a choice to use CommonJS or ES6 syntax. We generally recommend to use ES6 syntax. As [discussed here](https://github.com/flow-typed/flow-typed/issues/1859#issuecomment-374575368), if you need both named exports and a default export, then you need to use the ES6 syntax.

Learn to export [es6](https://flow.org/en/docs/libdefs/creation/#toc-declaring-an-es-module) or [commonjs](https://flow.org/en/docs/libdefs/creation/#toc-declaring-a-commonjs-module) modules.

### Declaring types

Types in contrast to variables when declared inside a module do not need to be explicitly exported as they will be exported automatically.

These two will work the same
```js
declare type Func = () => void;
declare export type Func = () => void;
```

It can then be used like the following, though be aware that even if you're using commonjs in your consuming module your imports will still use es6 import syntax.
```js
// In a commonjs module
import type { Func } from 'my-module';

const Foo = require('my-module');

// ---
// In an es module
import Foo, { type Func } from 'my-module';
```

---

Because of this feature you may opt to break down types into separate declarations as opposed to inlining them on a variable or property to make it easier for library consumers to cast or annotate a variable.

```js
declare type Options = { ... };

class Foo {
  constructor(options?: Options): this;
}

// or
type Bar = { ... };

declare module.exports: Bar;
```

### Avoid global types

Sometimes you see global definitions like `$npm$ModuleName$`. This is due to the fact that in the past flow didn't support private types. **Global types should not be used anymore**. Since then Flow has added support for `declare export` which means that every type which doesn't have it are defined as private and can't be imported, see https://flow.org/en/docs/libdefs/creation/#toc-declaring-an-es-module for details.

### Prefer immutability

If the function does not mutate input values, always prefer immutable types.
This is imporant since immutable types accepts mutable types in, but mutable types does not accept immutable types in, see [good example](https://flow.org/try/#0PTAEAEDMBsHsHcBQiAmBTAxtAhgJzaJAK4B2GALgJawmjloDO5AFJSQA5HkBcoAJACU02FAHkS0AJ4BBXLmySAPCSIBbAEZpcAPgCUvAG6xKKANzIMNJoVoBeUMzy5es+UpUate0Le2gA3oigoACQTgB0nAwAFswAjABMAMy6iCH0TI5yuuYAvohAA) and [bad example](https://flow.org/try/#0PTAEAEDMBsHsHcBQiAmBTAxtAhgJzaJAK4B2GALgJawmjloDO5AFJSQA5HkBcoAgrlzYAngB4SRALYAjNLgB8ASl4A3WJRQBuZBhpNCtALyhmeXLwAkAJTTYUAeRLRhAoWIky5S0IfmgA3ogAkPRMpoKK2gC+iEA)
- Instead of `Array<string>` use `$ReadOnlyArray<string>`
- Instead of `{ value: string }` prefer `{ +value: string }` [$ReadOnly<{ value: string }>](https://flow.org/en/docs/types/utilities/#toc-readonly)

### Prefer exactness

If the object has known set of properties, always define them as exact:
- Instead of `{ +value: string }` prefer `{| +value: string |}`

### Partial/definitions definitions

We welcome contributions of partial, incomplete or work-in-progress definitions!
When submitting a partial definition, please stub out the missing parts with `any`.
If the definition was generated from `create-stub`, those parts should already be stubbed.

### A note on flowgen

[flowgen](https://github.com/joarwilk/flowgen) is a CLI tool that generates flowtype definitions from TypeScript types.
While it supports most of the TypeScript syntax, in some cases manual changes may be needed before use.
You can check out supported syntax constructs in thier section on the [state of the converter](https://github.com/joarwilk/flowgen#the-state-of-the-converter).

## Writing tests

### Use `describe` and `it` blocks to limit scope

You can use `describe` and `it` verbs, much like you do in Mocha/Jest/whatever, to write descriptive tests and limit scope. These are available under 'flow-typed-test'. (Note that they don't actually run tests, they're just sugar to limit scope and emulate the TDD language with which we're all familiar).

```js
import { describe, it } from 'flow-typed-test';

describe('#someFunction', () => {
  it('should do something', () => {
    const a: number = 1;
  });

  // you can also do type checks outside an it statement
  //$FlowExpectedError
  const a: number = 'foo';
})
```

`describe` or `it` have the potential of causing collisions. In the event of a name collision, import them under new names.

```js
import { describe as foo, it as bar } from 'flow-typed-test';

foo('#someFunction', () => {
  bar('should do something', () => {
    const a: number = 1;
  });

  // you can also do type checks outside an it statement
  //$FlowExpectedError
  const a: number = 'foo';
})
```
