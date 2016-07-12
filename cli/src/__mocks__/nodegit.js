// @flow

const repo = {
  checkoutBranch: jest.fn(),
  fetch: jest.fn(),
  rebaseBranches: jest.fn(),
};
module.exports = {
  Clone: jest.fn(),
  Repository: {
    _mockRepo: repo,
    open: jest.fn(() => repo),
  },
};
