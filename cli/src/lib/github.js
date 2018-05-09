// @flow

import Octokit from '@octokit/rest';

type GetReleasesArgs = {
  owner: string,
  repo: string,
  page: number,
  per_page: number,
};

type Releases = {
  data: $ReadOnlyArray<{
    tag_name: string,
    assets: $ReadOnlyArray<{
      name: string,
      browser_download_url: string,
    }>,
  }>,
};

type GitHubClient = {
  repos: {
    getReleases(args: GetReleasesArgs): Promise<Releases>,
  },
  authenticate(args: Object): void,
};

const CLIENT: GitHubClient = new Octokit();

if (process.env.GH_TOK) {
  CLIENT.authenticate({type: 'oauth', token: process.env.GH_TOK});
}

export function getGitHubClient() {
  return CLIENT;
}
