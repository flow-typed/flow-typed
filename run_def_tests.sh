#!/bin/bash
set -o errexit

cd definitions
yarn install
yarn test
cd ../cli
yarn install
node dist/cli.js validate-defs
node dist/cli.js run-tests "$@"
