// @flow

import * as React from 'react';
import {
  FormBuilder,
  PredefinedGallery,
} from '@ginkgo-bioworks/react-json-schema-form-builder';
import type { CardBodyProps } from '@ginkgo-bioworks/react-json-schema-form-builder';
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
  const propsWithMods = {
    schema: '',
    uischema: '',
    onChange: (newSchema, newUiSchema) => {},
    mods: {
      customFormInputs: {
        customFormInput0: {
          displayName: 'custom form input 0',
          defaultDataSchema: {
            'type': 'number',
          },
          defaultUiSchema: {
            'ui:widget': 'customFormInput0',
          },
          type: 'number',
          cardBody: (props: CardBodyProps) => <div/>,
          modalBody: (props: CardBodyProps) => <div/>,
          matchIf: [{
            types: ['number'],
            widget: 'customFormInput0',
          }],
        },
        customFormInput1: {
          displayName: 'custom form input 1',
          defaultDataSchema: {
            'type': 'string',
          },
          defaultUiSchema: {
            'ui:field': 'customFormInput1',
          },
          type: 'string',
          cardBody: (props: CardBodyProps) => <div/>,
          modalBody: (props: CardBodyProps) => <div/>,
          matchIf: [{
            types: ['string'],
            field: 'customFormInput1',
          }],
        },
      },
      tooltipDescriptions: {
        add: 'add text',
        cardObjectName: 'card object name text',
        cardDisplayName: 'card display name text',
        cardDescription: 'card description text',
        cardInputType: 'card input type text',
        cardSectionObjectName: 'card section object name text',
        cardSectionDisplayName: 'card section display name text',
        cardSectionDescription: 'card section description text',
      },
      labels: {
        formNameLabel: 'alternative form name label',
        formDescriptionLabel: 'alternative form description label',
        objectNameLabel: 'alternative object name label',
        displayNameLabel: 'alternative display name label',
        descriptionLabel: 'alternative description label',
        inputTypeLabel: 'alternative input type lablel',
      },
      showFormHead: false,
      deactivatedFormInputs: ['shortAnswer'],
      newElementDefaultDataOptions: {
        title: 'new title',
        type: 'string',
        description: 'new description',
        $ref: '#/definitions/newDefinition',
        default: 'new default value',
      },
      newElementDefaultUiSchema: { 'ui:widget': 'foobiz' },
    },
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

  it('render the form builder with props with mods', () => {
    <FormBuilder {...propsWithMods} />
  });

  it('form builder errors on extraneous properties passed in', () => {
    // $FlowExpectedError[prop-missing]
    <FormBuilder {...extraneousProps} />
  });

  it('form builder errors on improper mods passed in', () => {
    // $FlowExpectedError[prop-missing]
    <FormBuilder {...malformedMods} />
  });

  it('render predefined gallery', () => {
    <PredefinedGallery {...props} />
  });

  it('render predefined gallery with optional props', () => {
    <PredefinedGallery {...optionalProps} />
  });

  it('render predefined gallery with mods in props', () => {
    <PredefinedGallery {...propsWithMods}/>
  })

  it('predefined gallery errors on extraneous properties passed in', () => {
    // $FlowExpectedError[prop-missing]
    <PredefinedGallery {...extraneousProps} />
  });

  it('predefined gallery errors on improper mods passed in', () => {
    // $FlowExpectedError[prop-missing]
    <PredefinedGallery {...malformedMods} />
  });
});
