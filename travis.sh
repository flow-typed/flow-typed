#!/bin/sh
#set -e

cd definitions && \
yarn install && \
yarn test && \
cd ../cli && \
yarn && \
yarn run flow && \
node dist/cli.js validate-defs ../definitions && \
node dist/cli.js run-tests --onlyChanged
