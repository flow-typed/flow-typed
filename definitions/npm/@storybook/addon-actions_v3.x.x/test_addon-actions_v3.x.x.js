// @flow
import React from 'react';
import { action, decorateAction } from '@storybook/addon-actions'

const Button = (props) => <button {...props} />;

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);

// $FlowExpectedError
const erroneous = action(123);

// $FlowExpectedError
const erroneousDecorate = decorateAction([
  'a string'
]);

const App = () => (
  <div>
    <Button onClick={action('button-click')}>
      Hello World!
    </Button>

    <Button onClick={firstArgAction('button-click')}>
      Hello World!
    </Button>
  </div>
);
