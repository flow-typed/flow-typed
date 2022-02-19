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
  npx flow-setup library
  tee -a definition.js <<EOF
declare module "" {

}

EOF
  tee -a test_definition.js <<EOF
// @flow
import { describe, it } from 'flow-typed-test';
// import lib from 'test';

describe('', () => {
  it('', () => {

  });
});

EOF
fi
