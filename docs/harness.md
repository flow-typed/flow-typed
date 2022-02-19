# Test Harness

A testing ground created to help you write and test flow definitions before contributing them back to our registry.

After cloning the repository you can run `./test_harness.sh` in the root directory to create the `./harness` directory. Here you can write general flow code or definitions to verify functionality in real time with an IDE.

``` bash
# Sample usage
./test_harness.sh
./test_harness.sh 0.140.0 # creates the test harness with flow-bin set to `v0.140.0`
```

The directory is git ignored so please feel free to add any settings to `.flowconfig`, dependencies to package.json or other library definitions to achieve your needs.

Once you're done with development you can delete the directory or leave it for next time, the choice is yours.

## Contributing back

If you wrote a definition you'd like to now contribute back you can read our [contributing](contributing.md) guide and copy the definition over. The test harness is originally setup with a `definition.js` and `test_definition.js` for definition creation and testing respectively for this purpose.

Once you have them copied, you can run our full test suite that runs them against various flow versions to ensure they're up to the standards we need for contribution.

**Contrary to the test harness code written in the `definitions` directory can't be checked by flow in real time**
