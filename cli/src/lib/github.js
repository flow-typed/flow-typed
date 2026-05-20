// @flow
import {Octokit} from '@octokit/rest';

const CLIENT = process.env.GITHUB_TOKEN
  ? new Octokit({
      auth: process.env.GITHUB_TOKEN,
    })
  : new Octokit();

export function gitHubClient(): Octokit {
  return CLIENT;
}
