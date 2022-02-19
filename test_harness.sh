#!/bin/sh

if [ -d "./harness" ]
then
  echo "it's here"
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
// import lib from 'lib';
EOF
fi
