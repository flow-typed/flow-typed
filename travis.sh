#!/bin/bash
#set -o errexit

npm install --global yarn
cd definitions && \
yarn install && \
yarn test && \
cd ../cli && \
yarn install && \
./node_modules/.bin/flow && \
node dist/cli.js validate-defs && \
node dist/cli.js run-tests
