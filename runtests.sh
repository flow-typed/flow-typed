#!/bin/bash
set -o errexit

cd npm && npm install && npm test && npm run build && node dist/cli.js validate-defs && node dist/cli.js run-tests
