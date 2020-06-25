// @flow

import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import type { Rect } from "react-visibility-sensor";
import { it, describe } from "flow-typed-test";

describe('react-visibility-sensor', () => {
  const handleChange = (isVisible: boolean, visibilityRect?: Rect) => {}

  it('should accept all parameters', () => {
    <VisibilitySensor
      active
      offset={{}}
      minTopValue={0}
      intervalCheck
      intervalDelay={100}
      scrollCheck
      scrollDelay={250}
      scrollThrottle={-1}
      resizeCheck
      resizeDelay={250}
      resizeThrottle={-1}
      delayedCall={false}
      partialVisibility={false}
      onChange={handleChange}
    />;
  });

  it("should not fail without optional parameters", () => {
    <VisibilitySensor onChange={handleChange} />;
  });

  it("should fail without required parameters", () => {
    // $FlowExpectedError
    <VisibilitySensor />;
  });
});
