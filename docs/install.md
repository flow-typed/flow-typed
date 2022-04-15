# install

Installs libdefs into the ./flow-typed directory.

### Examples

```
flow-typed install
flow-typed install webpack // Not specifying version only works when listed in package.json
flow-typed install react-redux@7
flow-typed install axios@0.11.x
flow-typed install --ignoreDeps peer bundle
```

### Flags

|Shorthand|Longhand|Description|Type|
|---------|--------|-----------|----|
|-f|--flowVersion|The Flow version that fetched libdefs must be compatible with|string|
||--verbose|Print additional, verbose info while installing libdefs|boolean|
|-s|--skip|Do not generate stubs for missing libdefs|boolean|
||--skipCache|Do not update cache prior to installing libdefs|boolean|
||--skipFlowRestart|Do not restart flow after installing libdefs|boolean|
|-l|--libdefDir|Use a custom directory to install libdefs (instead of the default, `./flow-typed`)|string|
|-c|--cacheDir|Directory (absolute or relative path, ~ is not supported) to store cache of libdefs|string|
|-p|--packageDir|The relative path of package.json where flow-bin is installed|string|
|-o|--overwrite|Overwrite an existing libdef, of the same version, if it is already present in the`flow-typed` directory and has been modified|boolean|
|-i|--ignoreDeps|Dependency categories to ignore when installing definitions. Available options are `dev`, `bundle`, and `peer`.|array|
|-r|--rootDir|Directory of .flowconfig relative to node_modules|string|
|-u|--useCacheUntil|Use cache until specified time in milliseconds|number|

### Ignoring dependencies

Sometimes you will come across dependencies that you both don't use in code and aren't defined in `flow-typed`. `@babel/core` is a good example of this where you don't want it polluting your codebase or causing unnecessarily large diffs during updates. Alternatively you may have some specific libdef version different to what is referenced in package.json and you don't want that swapped out.

You can achieve this with the `ignore` property in [flow-typed.config.js](flow-typed-config.md)

#### .ignore _(deprecated)_
The `.ignore` file which you can place in `./flow-typed` can solve this by referencing scopes or packages you'd like to explicitly exclude when `flow-typed` tries to install/update libdefs for you.

```
# in `./flow-typed/.ignore`
# libraries are excluded on an exact match basis
@babel/
@testing-library/react
eslint
eslint-config-airbnb
```
