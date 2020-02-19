// @flow

import {Octokit} from '@octokit/rest';

const CLIENT = new Octokit();

if (process.env.GH_TOK) {
  CLIENT.authenticate({type: 'oauth', token: process.env.GH_TOK});
}

export function gitHubClient(): Object {
  return CLIENT;
}
