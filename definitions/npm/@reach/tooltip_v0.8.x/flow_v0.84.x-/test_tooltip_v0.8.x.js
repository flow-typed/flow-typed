// @flow

import React from 'react';
import Tooltip from "@reach/tooltip";
import { it, describe } from 'flow-typed-test';

describe('@reach/tooltip', () => {
    it('expects string label property', function () {
        <Tooltip label="foo">foo</Tooltip>;
        // $ExpectError
        <Tooltip label={1}>foo</Tooltip>;
        // $ExpectError
        <Tooltip label={{}}>foo</Tooltip>;
      });

    it('children have to be a react node', function () {
        <Tooltip label="foo">Foo</Tooltip>;
        <Tooltip label="foo"><div /></Tooltip>;
        // $ExpectError
        <Tooltip label="foo"/>;
    });
  
    it('accepts string ariaLabel property', function () {
        <Tooltip ariaLabel="portal-node">foo</Tooltip>;
        // $ExpectError
        <Tooltip ariaLabel={1}>foo</Tooltip>;
        // $ExpectError
        <Tooltip ariaLabel={{}}>foo</Tooltip>;
    });
});