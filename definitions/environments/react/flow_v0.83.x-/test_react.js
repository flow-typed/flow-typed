// @flow
import { describe, it } from 'flow-typed-test';
import * as React from 'react';

describe('react', () => {
  describe('React$AbstractComponentStatics override', () => {
    it('can have any property attached to the component', () => {
      declare var Comp: React$AbstractComponent<{ ... }, HTMLElement>;

      Comp.random = 'test';
    });

    it('has other props still typed correctly', () => {
      declare var Comp: React$AbstractComponent<{ ... }, HTMLElement>;

      Comp.displayName = 'test';
      // $FlowExpectedError[incompatible-type]
      Comp.displayName = 123;
    });
  });
});
