// @flow

import * as React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { it, describe } from 'flow-typed-test';

describe('@reach/visually-hidden', () => {
  it('works', () => {
    <VisuallyHidden>
      <span>test</span>
    </VisuallyHidden>;

    <VisuallyHidden>test</VisuallyHidden>;

    <VisuallyHidden>
      t<span>es</span>t
    </VisuallyHidden>;
  });

  it('allows any props', () => {
    <VisuallyHidden data-test={5} aria-hidden="true" disabled>
      test
    </VisuallyHidden>;
  });

  it('raises error', () => {
    // $FlowExpectedError - children must be a react node
    <VisuallyHidden />;
  });
});
