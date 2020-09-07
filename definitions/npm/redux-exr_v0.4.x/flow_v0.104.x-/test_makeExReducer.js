/* @flow */

import {makeExReducer} from 'redux-exr';

const reducer = makeExReducer(
  '',
  {},
  (s, a) => s,
);

// TODO: extend tests
reducer('', {}, {}, {});

// $FlowExpectedError
reducer();
