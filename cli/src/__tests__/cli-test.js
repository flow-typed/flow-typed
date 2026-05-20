// @flow
const {
  install,
  createDef,
  createStub,
  outdated,
  runTests,
  search,
  update,
  updateCache,
  validateDefs,
  runCLI,
  // $FlowExpectedError[prop-missing]
  foo,
} = require('../cli');

describe('cli', () => {
  it('exports public api', () => {
    expect(install).toBeDefined();
    expect(createDef).toBeDefined();
    expect(createStub).toBeDefined();
    expect(outdated).toBeDefined();
    expect(runTests).toBeDefined();
    expect(search).toBeDefined();
    expect(update).toBeDefined();
    expect(updateCache).toBeDefined();
    expect(validateDefs).toBeDefined();
    expect(runCLI).toBeDefined();
    expect(foo).not.toBeDefined();
  });
});
