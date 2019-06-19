// @flow

import { describe, it } from 'flow-typed-test';
import React from 'react';
import { Portal, PortalWithState } from 'react-portal';

let node = document.getElementById('');
let comp = () => <div />;

describe('The `Portal` component', () => {
  let defaultProps = {
    children: 'Just a test',
  };

  it('should accept children', () => {
    <Portal {...defaultProps} />;
    // $ExpectError
    <Portal />;
  });

  it('should accept a DOM Element for its `node` property', () => {
    <Portal {...defaultProps} node={node} />;
    // $ExpectError
    <Portal {...defaultProps} node={comp} />;
  });
});

describe('The `PortalWithState` component', () => {
  let defaultProps = {
    children: ({ openPortal, closePortal, portal, isOpen }) => (
      <div>
        <button type="button" onClick={openPortal}>
          open
        </button>
        <p>{isOpen ? 'Open' : 'Closed'}</p>
        {portal(
          <div>
            <p>Portal content</p>
            <button type="button" onClick={closePortal}>
              close
            </button>
          </div>
        )}
      </div>
    ),
  };

  it('should accept a render function as children', () => {
    <PortalWithState {...defaultProps} />;
    // $ExpectError
    <PortalWithState />;
    // $ExpectError
    <PortalWithState>
      <div />
    </PortalWithState>;
  });

  it('should accept a DOM Element for its `node` property', () => {
    <PortalWithState {...defaultProps} node={node} />;
    // $ExpectError
    <PortalWithState {...defaultProps} node={comp} />;
  });

  it('should accept a boolean for its `defaultOpen` property', () => {
    <PortalWithState {...defaultProps} defaultOpen />;
    <PortalWithState {...defaultProps} defaultOpen={false} />;
    // $ExpectError
    <PortalWithState {...defaultProps} defaultOpen={() => {}} />;
  });

  it('should accept a boolean for its `closeOnEsc` property', () => {
    <PortalWithState {...defaultProps} closeOnEsc />;
    <PortalWithState {...defaultProps} closeOnEsc={false} />;
    // $ExpectError
    <PortalWithState {...defaultProps} closeOnEsc={() => {}} />;
  });

  it('should accept a boolean for its `closeOnOutsideClick` property', () => {
    <PortalWithState {...defaultProps} closeOnOutsideClick />;
    <PortalWithState {...defaultProps} closeOnOutsideClick={false} />;
    // $ExpectError
    <PortalWithState {...defaultProps} closeOnOutsideClick={() => {}} />;
  });

  it('should accept a function for its `onOpen` property', () => {
    <PortalWithState {...defaultProps} onOpen={() => {}} />;
    // $ExpectError
    <PortalWithState {...defaultProps} onOpen={false} />;
  });

  it('should accept a function for its `onClose` property', () => {
    <PortalWithState {...defaultProps} onClose={() => {}} />;
    // $ExpectError
    <PortalWithState {...defaultProps} onClose={false} />;
  });
});
