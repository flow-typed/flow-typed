#!/bin/sh

# Run this "quick test" script when you want a faster feedback loop on tests for your libdef. This script runs the
# libdef tests for any *changed* libdefs. (Also, it only runs tests against the most recent flow version libdef.)
#
# Prerequisite: you have run `build_and_test_cli.sh` before so you have a valid build of the flow-typed cli (which
# actually runs the tests).
#
# Usage: `$ ./quick_run_def_tests`

set -e

node cli/dist/cli.js run-tests --onlyChanged
