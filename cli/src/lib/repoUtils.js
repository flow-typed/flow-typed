// @flow strict

export const DEFAULT_REPO_NAME: string = 'flowtype/flow-typed';

export function getGithubRepoUrl(repoName: string): string {
  // TODO: alternatively use ssh due to 2FA
  return `https://github.com/${repoName}.git`;
}

export function isFlowTypedRepoUrl(repoName: string): boolean {
  return repoName === DEFAULT_REPO_NAME;
}
