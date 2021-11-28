<img
  alt="Flow Logo"
  src="https://raw.githubusercontent.com/flow-typed/flow-typed/master/flow-typed-logo.png"
  width="400"
/>

![Build](https://github.com/flow-typed/flow-typed/workflows/CI/badge.svg)
[![npm](https://img.shields.io/npm/dm/flow-typed.svg)](https://www.npmjs.com/package/flow-typed)
[![Join the chat at https://discordapp.com/invite/8ezwRUK](https://img.shields.io/discord/539606376339734558.svg?label=discord&logo=discord&logoColor=white)](https://discordapp.com/invite/8ezwRUK)
[![flow-typed](https://snyk.io/advisor/npm-package/flow-typed/badge.svg)](https://snyk.io/advisor/npm-package/flow-typed)

`flow-typed` is a [repository](https://github.com/flow-typed/flow-typed/tree/master/definitions) of third-party
[library interface definitions](https://flow.org/en/docs/libdefs)
for use with [Flow](http://flow.org).

You can grab definitions directly from this GitHub repo, or you can use the CLI to install a libdef for a given library:
```bash
$ yarn global add flow-typed

$ cd /path/to/my/project
$ yarn install
$ flow-typed install rxjs@5.0.x
'rxjs_v5.0.x.js' installed at /path/to/my/project/flow-typed/npm/rxjs_v5.0.x.js
```

## Huh?

When you start a project with Flow, **you likely want to use some third-party
libraries that were *not* written with Flow**. By default, Flow will just ignore
these libraries **leaving them untyped**. As a result, Flow can't give errors if
you accidentally mis-use the library (nor will it be able to auto-complete the
library).

To address this, **Flow supports
[library definitions](https://flow.org/en/docs/libdefs)** which allow
you to describe the interface of a module or library separate from the
implementation of that module/library.

**The `flow-typed` repo is a collection of high-quality library definitions**,
tests to ensure that definitions remain high quality, and tooling to make it
as easy as possible to import them into your project.

All you have to do when you add one or more new dependencies to your project
is run `flow-typed install`. This will search the libdef repo and download all
the libdefs that are relevant for your project and install them for you. After
that, **simply check them in** and be on your way!

## Getting Started

Check out the [quick start](https://flow-typed.github.io/flow-typed/#/quickstart) page
in the docs. It will walk you through installing typedefs, using them,
as well as writing and including your own.

## The CLI

The `flow-typed` npm package provides a CLI that includes several commands for
working with this repository. The full list of commands is available at
[CLI commands](https://flow-typed.github.io/flow-typed/#/install) in the docs.

## FAQs

Before opening an issue, take a look at the [FAQs](https://flow-typed.github.io/flow-typed/#/faq).
Chances are your question has already been answered! If not, don't hesitate to
[open an issue](https://github.com/flow-typed/flow-typed/issues/new).

## How Do I Contribute Library Definitions?

Just send a pull request! The docs on
[contributing definitions](https://flow-typed.github.io/flow-typed/#/contributing)
detail the format of new contributions. Contributions should follow the best practices outlined on
[CONTRIBUTING.md](https://github.com/flow-typed/flow-typed/blob/master/CONTRIBUTING.md).

#### Contributing to the CLI

Bugfixes and improvements to the core CLI are welcome. If you'd like to contribute
a new feature, consider opening an issue first to discuss it.

## Active Maintenance Team

[![Andrew Smith](https://github.com/andrewsouthpaw.png?size=100)](https://github.com/andrewsouthpaw) | [![Brian Chen](https://github.com/Brianzchen.png?size=100)](https://github.com/Brianzchen)  | [![Georges-Antoine Assi](https://github.com/gantoine.png?size=100)](https://github.com/gantoine) | [![Pascal Duez](https://github.com/pascalduez.png?size=100)](https://github.com/pascalduez) | [![Ville Saukkonen](https://github.com/villesau.png?size=100)](https://github.com/villesau)
:---:|:---:|:---:|:---:|:---:
[@AndrewSouthpaw](https://github.com/andrewsouthpaw) | [@Brianzchen](https://github.com/Brianzchen) | [@GAntoine](https://github.com/gantoine) | [@pascalduez](https://github.com/pascalduez) | [@villesau](https://github.com/villesau)
