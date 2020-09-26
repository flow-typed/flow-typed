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
storiesOf('', module);

// $FlowExpectedError[incompatible-call]
storiesOf([], module);
// $FlowExpectedError[incompatible-call]
storiesOf('', 123);
// $FlowExpectedError[prop-missing]
storiesOf('', module).foo('', () => <div />);

// The `add` method
storiesOf('', module).add('', () => <div />);
storiesOf('', module).add('', () => <Button>test</Button>);
storiesOf('', module).add('', () => [
  <Button>test</Button>,
  <Button>test</Button>,
  <Button>test</Button>,
]);

storiesOf('', module).add('', () => '');

storiesOf('', module).add('', () => 0);

storiesOf('', module).add('', () => <Button>test</Button>, {
  param: 'test',
});

// $FlowExpectedError[incompatible-call]
storiesOf('', module).add('', () => <Button>test</Button>, '');
// $FlowExpectedError[prop-missing]
storiesOf('', module).add('', parameters, () => <Button>test</Button>);

// $FlowExpectedError[incompatible-call]
storiesOf('', module).add('', () => () => null);
// $FlowExpectedError[incompatible-call]
storiesOf('', module).add('', () => Button);
// $FlowExpectedError[incompatible-call]
storiesOf('', module).add('', () => null);

storiesOf('', module).add('', ({ kind, story }) => (
  <div>
    {kind} {story}
  </div>
));

// $FlowExpectedError[prop-missing]
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

// The `addParameters` function
storiesOf('', module)
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
configure(() => undefined, module);

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

storiesOf<Addon>('TestAddon', module)
  .test('', () => <div />)
  .test('', () => <div />)
  .add('', () => <div />)
  .test('', () => <div />)
  .add('', () => <div />, parameters);
