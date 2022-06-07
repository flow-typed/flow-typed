# create-stub

Create a libdef stub for an untyped npm package.

#### Examples

```
flow-typed create-stub foo@^1.2.0
flow-typed create-stub foo bar baz
```

### Flags

|Shorthand|Longhand&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Description|Type|
|---------|--------|-----------|----|
|-o|--overwrite|Overwrite an existing stub if it is already present in the`flow-typed` directory and has been modified|boolean|
|-l|--libdefDir|Use a custom directory to install libdefs (instead of the default, `./flow-typed`)|string|
|-r|--rootDir|Directory of .flowconfig relative to node_modules|string|
|  |--typescript|Generates the types starting from its TypeScript definitions|boolean|
