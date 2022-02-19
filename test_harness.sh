#!/bin/sh

flowVersion=$1
if [ -z "$flowVersion" ]
then
  lib="flow-bin@latest"
else
  lib="flow-bin@$flowVersion"
fi

if [ -d "./harness" ]
then
  cd harness
  npm i --save-dev $lib
else
  mkdir harness
  cd harness
  npm init -y
  npm i --save-dev $lib
  npx flow-setup flow-typed-harness
  cat <<EOF > definition.js
declare module "" {

}
EOF
  cat <<EOF > test_definition.js
// @flow
import { describe, it } from 'flow-typed-test';
// import lib from 'test';

describe('', () => {
  it('', () => {

  });
});
EOF
fi

cat <<EOF > README.md
# flow-typed Test Harness

Welcome, this is a testing ground created to help you write and test flow definitions
before contributing them back to our registry.

This directory is git ignored so please feel free to add any settings to `.flowconfig`
or dependencies to package.json or other library definitions to achieve
your library definition.
EOF
