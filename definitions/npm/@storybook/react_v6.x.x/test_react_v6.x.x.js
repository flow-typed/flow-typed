// @flow

import { describe, it } from 'flow-typed-test';
import React from 'react';
import {
  storiesOf,
  addDecorator,
  addParameters,
  clearDecorators,
  getStorybook,
  forceReRender,
  configure,
  setAddon,
  type RenderFunction,
  type Story,
} from '@storybook/react';

const Button = props => <button {...props} />;

const Decorator = story => <div>{story()}</div>;

const parameters = { param: 'test' };

// The `storiesOf` function
storiesOf('', nodeModule);

// $FlowExpectedError[incompatible-call]
storiesOf([], nodeModule);
// $FlowExpectedError[incompatible-call]
storiesOf('', 123);
// $FlowExpectedError[prop-missing]
storiesOf('', nodeModule).foo('', () => <div />);

// The `add` method
storiesOf('', nodeModule).add('', () => <div />);
storiesOf('', nodeModule).add('', () => <Button>test</Button>);
storiesOf('', nodeModule).add('', () => [
  <Button>test</Button>,
  <Button>test</Button>,
  <Button>test</Button>,
]);

storiesOf('', nodeModule).add('', () => '');

storiesOf('', nodeModule).add('', () => 0);

storiesOf('', nodeModule).add('', () => <Button>test</Button>, {
  param: 'test',
});

// $FlowExpectedError[incompatible-call]
storiesOf('', nodeModule).add('', () => <Button>test</Button>, '');
// $FlowExpectedError[prop-missing]
storiesOf('', nodeModule).add('', parameters, () => <Button>test</Button>);

// $FlowExpectedError[incompatible-call]
storiesOf('', nodeModule).add('', () => () => null);
// $FlowExpectedError[incompatible-call]
storiesOf('', nodeModule).add('', () => Button);
// $FlowExpectedError[incompatible-call]
storiesOf('', nodeModule).add('', () => null);

storiesOf('', nodeModule).add('', ({ kind, story }) => (
  <div>
    {kind} {story}
  </div>
));

// $FlowExpectedError[prop-missing]
storiesOf('', nodeModule).add('', ({ kind, story, foo }) => (
  <div>
    {kind} {story} {foo}
  </div>
));

// The `addDecorator` function
storiesOf('', nodeModule)
  .addDecorator(Decorator)
  .add('', () => <div />);

addDecorator(Decorator);

// The `addParameters` function
storiesOf('', nodeModule)
  .addParameters(parameters)
  .add('', () => <div />);

addParameters(parameters);

// $FlowExpectedError[incompatible-call]
addParameters();
// $FlowExpectedError[incompatible-call]
addParameters('');

// The `clearDecorators` function
clearDecorators();

// $FlowExpectedError[extra-arg]
clearDecorators(true);
// $FlowExpectedError[extra-arg]
clearDecorators(parameters);

// The `getStorybook` function
getStorybook().forEach(({ kind, stories }) =>
  stories.forEach(({ name, render }) => render())
);

// The `forceReRender` function
it('should validate on default usage', () => {
  forceReRender();
});

// The `configure` function
configure(() => undefined, nodeModule);

// The `setAddon` function
interface Addon {
  test<T>(name: string, story: RenderFunction): Story & T;
}

const TestAddon: Addon = {
  test(name, story) {
    console.log(this.kind === 'TestAddon');
    return this.add(name, story);
  },
};

setAddon(TestAddon);

storiesOf<Addon>('TestAddon', nodeModule)
  .test('', () => <div />)
  .test('', () => <div />)
  .add('', () => <div />)
  .test('', () => <div />)
  .add('', () => <div />, parameters);
