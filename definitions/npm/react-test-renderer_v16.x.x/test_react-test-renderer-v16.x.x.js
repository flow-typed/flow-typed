// @flow

import React from "react";
import renderer from "react-test-renderer";

const Example = () => <div>Example</div>;

// Renderer
const wrapper = renderer.create(Example);
const { root } = wrapper;
const instance = wrapper.getInstance();

// $ExpectError
renderer.create(NaN);
