// @flow

import { describe, it } from 'flow-typed-test';

import React from 'react';
import ClickableBox from 'clickable-box';

const children = 'Test';
const ref = React.createRef();
const Component = () => <div />;

describe('The `ClickableBox` component', () => {
  it('should validate on default usage', () => {
    <ClickableBox />;
  });

  it('should allow props forwarding', () => {
    <ClickableBox data-testid="test" title="test" className="test" />;
  });

  describe('The `is` property', () => {
    it('should accept a React.ElementType', () => {
      <ClickableBox is="div" />;
      <ClickableBox is={Component} />;
      // $FlowExpectedError
      <ClickableBox is={<div />} />;
    });
  });

  describe('The `tabIndex` property', () => {
    it('should accept numbers', () => {
      <ClickableBox tabIndex={100} />;
      // $FlowExpectedError
      <ClickableBox tabIndex={false} />;
    });
  });

  describe('The `disabled` property', () => {
    it('should accept booleans', () => {
      <ClickableBox disabled />;
      // $FlowExpectedError
      <ClickableBox disabled={0} />;
    });
  });

  describe('The `innerRef` property', () => {
    it('should accept a React.Ref', () => {
      <ClickableBox innerRef="test" />;
      <ClickableBox innerRef={ref} />;
      <ClickableBox innerRef={node => (node: ?HTMLElement)} />;
      // $FlowExpectedError
      <ClickableBox innerRef={false} />;
    });
  });

  describe('The `children` property', () => {
    it('should accept a React.Node', () => {
      <ClickableBox>children</ClickableBox>;
      <ClickableBox>
        <div />
      </ClickableBox>;
      <ClickableBox>
        <Component />
      </ClickableBox>;
    });
  });

  describe('The `onClick` property', () => {
    it('should accept a callback', () => {
      <ClickableBox onClick={() => {}} />;
      <ClickableBox onClick={(evt: SyntheticMouseEvent<>) => {}} />;
      // $FlowExpectedError
      <ClickableBox onClick={(evt: SyntheticInputEvent<>) => {}} />;
    });
  });

  describe('The `onKeyPress` property', () => {
    it('should accept a callback', () => {
      <ClickableBox onKeyPress={() => {}} />;
      <ClickableBox onKeyPress={(evt: SyntheticKeyboardEvent<>) => {}} />;
      // $FlowExpectedError
      <ClickableBox onKeyPress={(evt: SyntheticInputEvent<>) => {}} />;
    });
  });
});
