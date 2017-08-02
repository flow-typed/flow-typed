#!/bin/bash
#set -o errexit

cd definitions && \
#npm install && \
#npm test && \
cd ../cli && \
yarn && \
yarn flow && \
node dist/cli.js validate-defs ../definitions && \
node dist/cli.js run-tests --onlyChanged
