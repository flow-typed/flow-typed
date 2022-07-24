<p align="center">
  <a href="https://flow-typed.github.io/flow-typed">
    <img alt="flow-typed" src="./docs/_media/flow.svg">
  </a>
</p>

<p align="center">
  A <a href="https://github.com/flow-typed/flow-typed/tree/master/definitions">repository</a> of
  high-quality, third-party <a href="https://flow.org/en/docs/libdefs">library type definitions</a>
  for use with <a href="http://flow.org">Flow</a>.
</p>

<p align="center">
  <a href="https://github.com/flow-typed/flow-typed/actions/workflows/main.yml">
    <img src="https://github.com/flow-typed/flow-typed/workflows/CI/badge.svg" alt="ci status">
  </a>
  <a href="https://www.npmjs.com/package/flow-typed"><img src="https://img.shields.io/npm/v/flow-typed.svg" alt="npm package"></a>
  <a href="https://flow-typed.github.io/flow-typed/#/"><img src="https://img.shields.io/badge/docs-latest-blueviolet" alt="docs"></a>
  <a href="https://discordapp.com/invite/8ezwRUK">
    <img src="https://img.shields.io/discord/539606376339734558.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=555555&cacheSeconds=60" alt="discord">
  </a>
  <a href="https://snyk.io/advisor/npm-package/flow-typed">
    <img src="https://snyk.io/advisor/npm-package/flow-typed/badge.svg?" alt="package health">
  </a>
</p>

---

## We're migrating our mainline from `master` to `main`

And with that comes new features, most notably the support for **definition dependencies**.

Learn how to add dependencies to a definition from the `main` branch [docs](https://github.com/flow-typed/flow-typed/blob/main/CONTRIBUTING.md#importing-types-from-other-libdefs) which can be consumed with the `v4` CLI.

```bash
$ yarn global add flow-typed@next
# or
$ npm install -g flow-typed@next
```

### What's happening to `master`?

Nothing for the most part! CLI versions < `v4` will still pull definitions from `master` so if you have library definitions that don't require dependencies we still recommend you contribute to `master` and it'll get periodically synced back to `main` for users >= `v4`.

Eventually we will deprecate `master` in favour of `main`.

---

Check out the [quick start](https://flow-typed.github.io/flow-typed/#/quickstart) page
in the docs to get started. It will walk you through installing typedefs, using them,
as well as writing and including your own.

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

## The CLI

The `flow-typed` npm package provides a CLI that includes several commands for
working with this repository. The full list of commands is available
[in the docs](https://flow-typed.github.io/flow-typed/#/install) .

## FAQs

Before opening an issue, take a look at the [FAQs](https://flow-typed.github.io/flow-typed/#/faq).
Chances are your question has already been answered! If not, don't hesitate to
[open an issue](https://github.com/flow-typed/flow-typed/issues/new).

## How Do I Contribute Library Definitions?

Just send a pull request! The documentation highlighted in [CONTRIBUTING.md](https://github.com/flow-typed/flow-typed/blob/master/CONTRIBUTING.md) should give a detailed overview of how to raise a pull request following our best practices.

### Contributing to the CLI

Bugfixes and improvements to the core CLI are welcome. If you'd like to contribute
a new feature, consider opening an issue first to discuss it.

## Active Maintenance Team

[![Andrew Smith](https://github.com/andrewsouthpaw.png?size=100)](https://github.com/andrewsouthpaw) | [![Brian Chen](https://github.com/Brianzchen.png?size=100)](https://github.com/Brianzchen)  | [![Georges-Antoine Assi](https://github.com/gantoine.png?size=100)](https://github.com/gantoine) | [![Pascal Duez](https://github.com/pascalduez.png?size=100)](https://github.com/pascalduez) | [![Ville Saukkonen](https://github.com/villesau.png?size=100)](https://github.com/villesau)
:---:|:---:|:---:|:---:|:---:
[@AndrewSouthpaw](https://github.com/andrewsouthpaw) | [@Brianzchen](https://github.com/Brianzchen) | [@GAntoine](https://github.com/gantoine) | [@pascalduez](https://github.com/pascalduez) | [@villesau](https://github.com/villesau)
