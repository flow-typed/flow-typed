// @flow

import React from 'react';
import {
  FormBuilder,
  PredefinedGallery,
} from '@ginkgo-bioworks/react-json-schema-form-builder';
import { it, describe, expect } from 'flow-typed-test';
import { mount } from 'enzyme';

describe('react-json-schema-form-builder', () => {
  const props = {
    schema: '',
    uischema: '',
    onChange: (newSchema, newUiSchema) => {},
  };
  it('render form builder', () => {
    const wrapper = mount(<FormBuilder {...props} />);
    expect(wrapper.exists('.form-body')).toBeTruthy();
  });

  it('render predefined gallery', () => {
    const wrapper = mount(<PredefinedGallery {...props} />);
    expect(wrapper.exists('.form_gallery_container')).toBeTruthy();
  });
});
