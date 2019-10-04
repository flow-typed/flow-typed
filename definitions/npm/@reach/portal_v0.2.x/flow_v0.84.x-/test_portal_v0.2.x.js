// @flow

import React from 'react';
import Portal from '@reach/portal';
import { it, describe } from 'flow-typed-test';

describe('@reach/portal', () => {
  it('children have to be a react node', function () {
    // $ExpectError
    <Portal />;

    <Portal>Foo</Portal>;
    <Portal><div /></Portal>;
  });

  it('accepts string type property', function () {
    // $ExpectError
    <Portal type={1}>1</Portal>;

    // $ExpectError
    <Portal type={{}}>1</Portal>;

    <Portal type="portal-node">1</Portal>;
  });
});
