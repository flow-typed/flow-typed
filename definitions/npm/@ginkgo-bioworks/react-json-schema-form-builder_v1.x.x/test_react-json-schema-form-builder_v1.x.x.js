// @flow

import * as React from 'react';
import {
  FormBuilder,
  PredefinedGallery,
} from '@ginkgo-bioworks/react-json-schema-form-builder';
import { it, describe } from 'flow-typed-test';

describe('@ginkgo-bioworks/react-json-schema-form-builder', () => {
  const props = {
    schema: '',
    uischema: '',
    onChange: (newSchema, newUiSchema) => {},
  };
  const optionalProps = {
    schema: '',
    uischema: '',
    onChange: (newSchema, newUiSchema) => {},
    mods: {},
    className: 'foo'
  };

  const extraneousProps = {
    schema: '',
    uischema: '',
    onChange: (newSchema, newUiSchema) => {},
    extraneousProp: 'extraneous'
  }

  const malformedMods = {
    schema: '',
    uischema: '',
    onChange: (newSchema, newUiSchema) => {},
    mods: {
      extraneousProp: 'extraneous'
    },
    className: 'foo'
  }

  it('render form builder', () => {
    <FormBuilder {...props} />
  });

  it('render form builder with optional props', () => {
    <FormBuilder {...optionalProps} />
  });

  it('form builder errors on extraneous properties passed in', () => {
    // $FlowExpectedError
    <FormBuilder {...extraneousProps} />
  });

  it('form builder errors on improper mods passed in', () => {
    // $FlowExpectedError
    <FormBuilder {...malformedMods} />
  });

  it('render predefined gallery', () => {
    <PredefinedGallery {...props} />
  });

  it('render predefined with optional props', () => {
    <PredefinedGallery {...optionalProps} />
  });

  it('predefined gallery errors on extraneous properties passed in', () => {
    // $FlowExpectedError
    <PredefinedGallery {...extraneousProps} />
  });

  it('predefined gallery errors on improper mods passed in', () => {
    // $FlowExpectedError
    <PredefinedGallery {...malformedMods} />
  });
});
