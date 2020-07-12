// @flow

import { describe, it } from 'flow-typed-test';
import React from 'react';

// $FlowExpectedError
import { storiesOf } from '@storybook/react';
import { checkA11y, configureA11y } from '@storybook/addon-a11y';

describe('The `checkA11y` decorator', () => {
  it('should validate on default usage', () => {
    storiesOf('button', module)
      .addDecorator(checkA11y)
      .add('Accessible', () => <button>Accessible button</button>);
  });
});

describe('The `configureA11y` function', () => {
  it('should accept valid options', () => {
    configureA11y();

    configureA11y({});

    configureA11y({ reporter: 'v1' });

    configureA11y({ branding: { brand: 'test' } });
  });

  it('should error on invalid options', () => {
    // $FlowExpectedError
    configureA11y(123);

    // $FlowExpectedError
    configureA11y([]);

    // $FlowExpectedError
    configureA11y('string');

    // $FlowExpectedError
    configureA11y({ disableOtherRules: 'string' });
  });
});
