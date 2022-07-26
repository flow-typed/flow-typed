# FAQs

## General questions

### Why do I need to commit the libdefs that `flow-typed` installs for my project?

Libdefs in flow-typed are tagged at both Flow and library version when they are
installed, but libdefs themselves can improve over time. For example, they may
have a bug or there may be an improvement to their accuracy or completeness.

When a libdef is improved or updated in flow-*typed*, there's some chance that
the change could introduce new Flow errors into your project. As good as it is
to find new issues, **we also want to make sure that Flow-errors in your project
are consistent and predictable over time**.

So if/when you wish to upgrade a libdef that you've already checked in to your
project's version control, you can do so explicitly with the
`flow-typed install --overwrite` command.

### What is the preferred way for a module to provide its own libdef?

> I'm writing a Node module. I would like to expose my module's types so that dependent projects (if they are also using Flow) may automatically use types. Should I PR a libdef into flow-typed after publishing my module? Or is it better to just include .js.flow file(s) with my published code?

If you're not planing on versioning your definitions, the preferred way is to copy source files to `*.js.flow` format, and include them with the release. A tool like [flow-copy-source](https://www.npmjs.com/package/flow-copy-source) works really well for this.

### How do I build type definitions that depend on other definitions?

Types can be imported from other `flow-typed` definitions, or from external definitions, using `import type`:

```javascript
declare module "react-redux" {
  import type { Dispatch, Store } from "redux";
  declare type Context = { store: Store<*, *> };
}
```

*Do not* do it this way (where the import is outside the module declaration), as it will silently type the imports as `any`:

```javascript
import type { Dispatch, Store } from "redux";

declare module "react-redux" {
  declare type Context = { store: Store<*, *> };
}
```

> Think **very carefully** before you import types from other libraries. We have no smart way to track dependencies between libdefs.

### How come some definition's types use `$` as a delimiter

Older versions of Flow had trouble with scoping in definitions. Types were effectively globally scoped in a libdef. It used to be recommended that we use a $ delimited definition such as `express$Foo`.

Mostly what you're seeing is legacy and nobody has gotten around to updating it.

The question was asked here:
[#2818](https://github.com/flow-typed/flow-typed/issues/2818#issuecomment-507407754)

## Issues

### When I install the `flow-typed` CLI, I get an error that mentions `OpenSSL or Libgcrypt`

You may need to install Libgcrypt. Try setting up
[homebrew](http://brew.sh/index.html) and running `brew install libgcrypt`.

This issue was first reported here:
[#336](https://github.com/flowtype/flow-typed/issues/336)

### When I install the `flow-typed` CLI, I get an error immediately after `[configuring libssh2]`

You may need to install OpenSSL. Try setting up
[homebrew](http://brew.sh/index.html) and running `brew install openssl`.

This issue was first reported here:
[#331](https://github.com/flowtype/flow-typed/issues/331)

### My flow-typed/npm dir is throwing lots of eslint errors after installing definitions

When you install lib defs using `flow-typed install` the files are copied from the central [definition registry](https://github.com/flow-typed/flow-typed/tree/main/definitions/npm) which have their own code styles and standards which may (probably will) be vastly different to the ones in your project.

You may first consider fixing the linting errors every time you install (eg: `yarn eslint ./flow-typed/npm --fix`) though you shouldn't, definitions may get updates which can install next time you run `flow-typed install` but the CLI will not update a definition if it sees a definition has been modified.

Instead the simplest way is to disable eslint from running in this dir with either
```
// .eslintignore
flow-typed/npm
```
or
```
// flow-typed/.eslintrc.js
module.exports = {
  ignorePatterns: ['**/*.js'],
};
```

### When running `flow-typed install` I get `UNCAUGHT ERROR`

If you are getting this error upon the cache rebase step you most likely have a corrupt cache.

```
• rebasing flow-typed cache...
UNCAUGHT ERROR: [
  {}
]
```

Try clearing it and running a fresh install but if that doesn't work please raise an [issue](https://github.com/flow-typed/flow-typed/issues/new/choose) with us.

```
rm -rf ~/.flow-typed
flow-typed install
```

> You shouldn't experience this unless you've been messing around in the cache itself
