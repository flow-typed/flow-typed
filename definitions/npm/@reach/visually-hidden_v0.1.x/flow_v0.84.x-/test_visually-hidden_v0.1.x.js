// @flow

import * as React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { it, describe } from 'flow-typed-test';

describe('@reach/visually-hidden', () => {
  it('works', () => {
    <VisuallyHidden><span>test</span></VisuallyHidden>;
    <VisuallyHidden>test</VisuallyHidden>;
    <VisuallyHidden>t<span>es</span>t</VisuallyHidden>;
  });

  it('raises error', () => {
    // $ExpectError - children must be a react node
    <VisuallyHidden />;
  });
});
