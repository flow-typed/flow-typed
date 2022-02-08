# run-tests

Run definition tests for library definitions in the flow-typed project.

### Examples

```
flow-typed run-tests
flow-typed run-tests axios
flow-typed run-tests axios_v0.16.x
```

### Flags

|Shorthand|Longhand|Description|Type|
|---------|--------|-----------|----|
||--onlyChanged|Only runs tests on changed definitions|boolean||
||--path|Override default path for libdef root (Mainly for testing purposes)|string||
||--numberOfFlowVersions|Only run against the latest X versions of flow|number||
