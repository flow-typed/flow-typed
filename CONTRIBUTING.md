# Library Definition Best Practices

This is a set of best practices to keep in mind while writing a libdef. These
best practices should also be considered when reviewing new libdefs or changes
to existing libdefs.

## ToC

* [Running libdef tests](#running-libdef-tests)
* [Creating a new library definition](#creating-a-new-library-definition)
* [Writing libdefs tips](#writing-libdefs-tips)
  * [Read flow docs](#read-flow-docs)
  * [Don't import types from other libdefs](#dont-import-types-from-other-libdefs)
  * [Avoid `any` when possible](#avoid-any-when-possible)
  * [Exporting modules](#exporting-modules)
  * [Always prefix global variables that aren't really meant to be global](#prefix-global-variables-that-arent-really-meant-to-be-global)
* [Writing tests](#writing-tests)
  * [Use `describe` and `it` blocks to limit scope](#use-describe-and-it-blocks-to-limit-scope)

## Running libdef tests

We write tests for libdefs. When you make changes to a libdef, verify that the tests still pass and add tests to cover new functionality.

Running tests requires the flow-typed CLI to be installed, which we have scripts set up to build locally in a dist folder. To run your tests, you'll first have to run

```
$ ./build_and_test_cli.sh
```

to build the CLI. Once that's finished, you can repeatedly run

```
$ ./quick_run_def_tests.sh
```

to run tests for any libdefs that have changes. (Caveat: the tests are only run for the most recent flow version of the libdef, so if you make changes to an earlier flow version of the libdef, the tests won't run against them.

If you ever make changes to the CLI files, make sure you rerun the `./build_and_test_cli.sh` to update the local build of the CLI with your changes.

## Creating a new library definition

All definitions are contained in the [definitions/](https://github.com/flow-typed/flow-typed/tree/master/definitions)
directory and are named and structured very explicitly.

Let's say you've created a definition for an npm package called `left-pad` at
version 4.1.0. **[You've followed all of the
best practices for writing high quality definitions,](https://github.com/flow-typed/flow-typed/issues/13#issuecomment-214892914)**
and now you'd like to contribute it:

#### 1) Create a new directory called `definitions/left-pad_v4.1.0/`.

***We call this the "package version directory".***

The naming scheme of this directory must be formatted as
`${packageName}_v${packageVersion}`. This convention is enforced by the
library-definition test runner.

#### 2) In this new directory, create another new directory called `flow_v0.25.x-/`.

***We call this the "flow version directory".***

This specifies that the definition you are contributing is compatible with the
version range of the directiry. You MUST specify a version range with names like
`flow_v0.25.x-` ("any version at or after v0.22.x") or
`flow_-v0.25.x` ("any version at or before v0.22.x") or
`flow_v0.25.x-v0.28.x` ("any version inclusively between v0.22.x and
v0.28.x").

If you aren't sure which versions of Flow your definition is compatible with,
start with a very low version like `flow_v0.25.x-`, and the test runner
(which we'll run in a later step) will tell us if there are problems in some
versions of Flow.

You may create multiple flow version directories to target different versions of
Flow if necessary.

#### 3) Place your libdef inside the flow version directory and name it `left-pad_v4.1.0.js`.

The name of the definition file must match the name of the package version
directory two levels up. This, too, will be enforced by the library-definition
test runner.

#### 4) Write a test file whose name starts with `test_` in the package version directory.

The purpose of a test file is to exercise the library definition to some
reasonable degree. At minimum your tests should:

1. Import at least one thing from each of the modules `declare`d in the
   definition.
1. Use the library definition in a couple of common ways that *should not*
   produce a type error.
1. Use the library definition in a couple of ways that are *expected* to produce
   a type error. To indicate that a line in a test file expected to cause an
   error just put a `// $ExpectError` comment above the error-causing line.

[Here](https://github.com/flow-typed/flow-typed/blob/master/definitions/npm/highlight.js_v8.x.x/test_highlight.js-v8.js)
is an example of a nice and thorough test file. You don't necessarily have to be
this thorough, but the more thorough you are the better!

You can write as many test files as you like as long as their names start with
`test_`.

All test files that sit in the package version directory will be run by
the test-runner for *all* versions of Flow the package version supports. If you
ever need to write a test for a particular version of Flow, you can put the
`test_` file in the appropriate flow version directory.

#### 5) Run your tests with `flow-typed validate-defs definitions && flow-typed run-tests left-pad`

You may also leave off the argument `left-pad` to run *all* tests (this takes a while). Please note that this test (and the one on Travis-CI) only will be able to run if the name of the repo folder is still "flow-typed".

#### 6) Send a pull request

You know how to do it.

## Writing libdefs tips

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

Good news! You can use the raw, private React types (e.g. `React$Node`, `React$ComponentType`) directly without importing them. You can also import types built into Flow *inside* the module declaration:

```js
declare module 'example' {
  import type { Node } from 'react';
}
```

**So why don't I do that for importing other libdefs?**

Because it just don't work, sorry. You might think this is possible, but it isn't:

```js
declare module 'koa-router' {
  import type { Middleware } from 'koa';
}
```

To be super clear:

1. You can't import types from other libdefs in flow-typed
1. You can import types built into Flow (e.g. from `react`), only if you put the import statement inside the module declaration

[Further discussion here](https://github.com/flow-typed/flow-typed/issues/1857) and [here](https://github.com/flow-typed/flow-typed/issues/2023).

### Avoid `any` when possible

Using the `any` type for a variable or interface results in the loss of type information as types pass through it. That means if a type passes through `any` before propogating on to other code, the `any` will potentially cause Flow to miss type errors!

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

If, however, we had used `mixed` instead of `any`, Flow would ask us to verify that the type we got back from `getCache()` is in fact a `string` before using it as one:

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

Because we used a dynamic type test in the second example, we've proved to Flow that the `mixed` result must be a string. If we hadn't done this, Flow would have given us an error reminding us that the value could be anything and it isn't safe to assume without checking first.

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

### Prefix global variables that aren't really meant to be global

Right now we don't have a good way to write types inside `declare module {}` bodies that *aren't* exported. This problem is being worked on, but in the meantime the best option is to just put a declaration outside the `declare module {}` and reference it.

Because this effectively creates a global type, please be sure to namespace these types with something like `$npm$ModuleName$`:

```js
type $npm$MyModule$Options = {
  option1: number,
  option2: string,
};

declare module "MyModule" {
  declare function doStuff(options: $npm$MyModule$Options): void;
}
```

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
  //$ExpectError
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
  //$ExpectError
  const a: number = 'foo';
})
```
