#!/bin/sh

if [ -d "./harness" ]
then
  cd harness
  npm i --save-dev flow-bin # load up a different version of harness
else
  mkdir harness
  cd harness
  npm init -y
  npm i --save-dev flow-bin # here add the @ version or use latest
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
