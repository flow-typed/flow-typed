#!/bin/bash
set -o errexit

cd definitions
yarn install
yarn test
cd ../cli
yarn
node dist/cli.js validate-defs ../definitions
