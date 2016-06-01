## Contributing to the definitions repository

All definitions are contained in the [definitions/](https://github.com/flowtype/flow-typed/tree/master/definitions) 
directory and are named and structured very explicitly.

Let's say you've created a definition for an npm package called `left-pad` at 
version 4.1.0. **[You've followed all of the 
best practices for writing high quality definitions,](https://github.com/flowtype/flow-typed/issues/13#issuecomment-214892914)**
and now you'd like to contribute it:

#### 1) Create a new directory called `definitions/left-pad_v4.1.0/`. 

***We call this the "package version directory".***

The naming scheme of this directory must be formatted as
`${packageName}_v${packageVersion}`. This convention is enforced by the
library-definition test runner.

#### 2) In this new directory, create another new directory called `flow_all/`.

***We call this the "flow version directory".***

This specifies that the definition you are contributing is compatible with all 
versions of Flow. If it is not, you can specify a version range with names like 
`flow_>=v0.21.x` ("any version at or after v0.21.x") or 
`flow_>=v0.21.x_<=v0.24.x` ("any version inclusively between v0.21.x and 
v0.24.x").

If you aren't sure which versions of Flow your definition is compatible with, 
start with `flow_all` and the test runner (which we'll run in a later step) will
tell us if there are problems in some versions of Flow.

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

[Here](https://github.com/flowtype/flow-typed/blob/master/definitions/npm/highlight.js_v8.x.x/test_highlight.js-v8.js) 
is an example of a nice and thorough test file. You don't necessarily have to be
this thorough, but the more thorough you are the better!

You can write as many test files as you like as long as their names start with
`test_`. 

All test files that sit in the package version directory will be run by
the test-runner for *all* versions of Flow the package version supports. If you 
ever need to write a test for a particular version of Flow, you can put the 
`test_` file in the appropriate flow version directory.

#### 5) Run your tests with `./run_def_tests.sh left-pad`

You may also leave off the argument to run *all* tests (this takes a while).

#### 6) Send a pull request
