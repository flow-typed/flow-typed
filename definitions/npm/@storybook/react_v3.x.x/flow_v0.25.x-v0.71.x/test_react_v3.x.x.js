// @flow

import { describe, it } from 'flow-typed-test';
import React from 'react';
import {
  storiesOf,
  addDecorator,
  getStorybook,
  forceReRender,
  configure,
} from '@storybook/react';

const Button = props => <button {...props} />;

const Decorator = story => <div>{story()}</div>;

// The `storiesOf` function
// should validate on default usage
storiesOf('', module);

// should error on invalid options
// $FlowExpectedError
storiesOf([], module);
// $FlowExpectedError
storiesOf('', 123);

// should error on invalid method call
// $FlowExpectedError
storiesOf('', module).foo('', () => <div />);

// The `add` method
// should validate on default usage (element)
storiesOf('', module).add('', () => <div />);

//should validate on default usage (component)
storiesOf('', module).add('', () => <Button>test</Button>);

// should validate on default usage (array)
storiesOf('', module).add('', () => [
  <Button>test</Button>,
  <Button>test</Button>,
  <Button>test</Button>,
]);

// should error on invalid default usage
// $FlowExpectedError
storiesOf('', module).add('', () => '');
// $FlowExpectedError
storiesOf('', module).add('', () => null);

// should validate when unwrapping arguments
storiesOf('', module).add('', ({ kind, story }) => (
  <div>
    {kind} {story}
  </div>
));

// should error when unwrapping invalid arguments
// $FlowExpectedError
storiesOf('', module).add('', ({ kind, story, foo }) => (
  <div>
    {kind} {story} {foo}
  </div>
));

// The `addDecorator` function
storiesOf('', module)
  .addDecorator(Decorator)
  .add('', () => <div />);

addDecorator(Decorator);

// The `getStorybook` function
getStorybook().forEach(({ kind, stories }) =>
  stories.forEach(({ name, render }) => render())
);

// The `forceReRender` function
forceReRender();

// The `configure` function
configure(() => undefined, module);
