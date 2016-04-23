// @flow

import GitHub from "github";
import {versionToString} from "./semver.js";

import type {LibDef} from "./libDef.js";

const CLIENT = new GitHub({version: "3.0.0"});

const {
  GH_CLIENT_SECRET,
  GH_CLIENT_ID,
  GH_TOK,
} = process.env;

if (GH_TOK) {
  CLIENT.authenticate({
    type: "oauth",
    token: process.env.GH_TOK
  });
} else if (GH_CLIENT_ID && GH_CLIENT_SECRET) {
  CLIENT.authenticate({
    type: "oauth",
    key: GH_CLIENT_ID,
    secret: GH_CLIENT_SECRET,
  });
}

export function gitHubClient(): Object {
  return CLIENT;
};

