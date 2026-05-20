# flow-typed

## What is it?

> flow-typed is a [repository](https://github.com/flow-typed/flow-typed/tree/main/definitions)
of third-party [library interface definitions](https://flow.org/en/docs/libdefs)
for use with [Flow](http://flow.org).

See the [Quick start](quickstart.md) guide to get up and running.

## Huh?

When you start a project with Flow, **you likely want to use some third-party
libraries that were not written with Flow**. By default, Flow will just ignore
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

## FAQs

Before opening an issue, take a look at the [FAQs](faqs.md). Chances are your
question has already been answered! If not, don't hesitate to
[open an issue](https://github.com/flow-typed/flow-typed/issues/new/choose).

## How do I contribute library definitions?

Just send a pull request! You can read out [Contributing](contributing.md) guide which should give a detailed overview of how to raise a pull request following our best practices.

## Community

The user and maintainers of this project are available in the [Discord server](https://discordapp.com/invite/8ezwRUK).
