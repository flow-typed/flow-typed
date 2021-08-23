#!/bin/sh
set -e

LIB_NAME=$1
VERSION=$2
FLOW_VERSION="0.83.x"

ROOT_DEF_DIR="definitions/npm/${LIB_NAME}_v${VERSION}"
DEF_DIR="${ROOT_DEF_DIR}/flow_v${FLOW_VERSION}-"

mkdir ${ROOT_DEF_DIR}
mkdir ${DEF_DIR}

cat > "${DEF_DIR}/${LIB_NAME}_v${VERSION}.js" <<- EOM
declare module '$LIB_NAME' {
  declare module.exports: any;
}
EOM

cat > "${DEF_DIR}/test_${LIB_NAME}_v${VERSION}.js" <<- EOM
// @flow
import { describe, it } from 'flow-typed-test';
// import library from '$LIB_NAME';
EOM
