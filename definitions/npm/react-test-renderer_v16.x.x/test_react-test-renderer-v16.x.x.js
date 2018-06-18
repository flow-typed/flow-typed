// @flow

import React from "react";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow"

const Example = () => <div>Example</div>;

// Renderer
const wrapper = renderer.create(<Example />);
const { root } = wrapper;
const instance = wrapper.getInstance();

// $ExpectError
renderer.create(NaN);

// ShallowRenderer
const shallowRenderer = new ShallowRenderer()
const shallowWrapper = shallowRenderer.render(<Example />)
const shallowInstance = shallowRenderer.getRenderOutput()
