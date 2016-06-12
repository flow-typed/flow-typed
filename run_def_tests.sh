#!/bin/bash
set -o errexit

cd cli
npm install 
node dist/cli.js validate-defs 
node dist/cli.js run-tests "$@"
