// @flow

export default function isInFlowTypedRepo() {
  return /\/flow-typed/.test(process.cwd());
}
