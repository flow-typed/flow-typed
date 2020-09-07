// @flow

import React from 'react';
import Tooltip from "@reach/tooltip";
import { it, describe } from 'flow-typed-test';

describe('@reach/tooltip', () => {
    it('expects string label property', function () {
        <Tooltip label="foo">foo</Tooltip>;
        // $FlowExpectedError
        <Tooltip label={1}>foo</Tooltip>;
        // $FlowExpectedError
        <Tooltip label={{}}>foo</Tooltip>;
      });

    it('children have to be a react node', function () {
        <Tooltip label="foo">Foo</Tooltip>;
        <Tooltip label="foo"><div /></Tooltip>;
        // $FlowExpectedError
        <Tooltip label="foo"/>;
    });
  
    it('accepts string ariaLabel property', function () {
        <Tooltip label="foo" ariaLabel="portal-node">foo</Tooltip>;
        // $FlowExpectedError
        <Tooltip label="foo" ariaLabel={1}>foo</Tooltip>;
        // $FlowExpectedError
        <Tooltip label="foo" ariaLabel={{}}>foo</Tooltip>;
    });
});