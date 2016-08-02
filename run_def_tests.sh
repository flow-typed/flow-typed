#!/bin/bash
set -o errexit

cd definitions
npm install
npm test
cd ../cli
npm install 
node dist/cli.js validate-defs 
node dist/cli.js run-tests "$@"
