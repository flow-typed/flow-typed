// @flow

import GitHub from 'github';

const CLIENT = new GitHub({version: '3.0.0'});
if (process.env.GH_TOK) {
  CLIENT.authenticate({type: 'oauth', token: process.env.GH_TOK});
}

export function gitHubClient(): Object {
  return CLIENT;
}
