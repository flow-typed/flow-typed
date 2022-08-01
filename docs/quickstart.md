# Quick start

We recommend installing the CLI globally.

```bash
$ yarn global add flow-typed
# or
$ npm install -g flow-typed
```

## Initialize

The quickest way to install all available types is to run:

```bash
$ flow-typed install
```

You can also specify a library and version to install:

```bash
flow-typed install rxjs@5.0.x
> 'rxjs_v5.0.x.js' installed at /path/to/my/project/flow-typed/npm/rxjs_v5.0.x.js
```

Once you're set up, start [importing types](/docs/importing-types) into your project files.
