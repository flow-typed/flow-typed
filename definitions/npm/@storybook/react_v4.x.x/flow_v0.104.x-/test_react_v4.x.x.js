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

declare var fakeModule: {
  exports: any,
  require(id: string): any,
  id: string,
  filename: string,
  loaded: boolean,
  parent: any,
  children: Array<any>,
  builtinModules: Array<string>,
  ...
};

const Button = props => <button {...props} />;

const Decorator = story => <div>{story()}</div>;

const parameters = { param: 'test' };

// The `storiesOf` function
storiesOf('', fakeModule);

// $FlowExpectedError[incompatible-call]
storiesOf([], fakeModule);
// $FlowExpectedError[incompatible-call]
storiesOf('', 123);

// $FlowExpectedError[prop-missing]
storiesOf('', fakeModule).foo('', () => <div />);

// The `add` method
storiesOf('', fakeModule).add('', () => <div />);

storiesOf('', fakeModule).add('', () => <Button>test</Button>);

storiesOf('', fakeModule).add('', () => [
  <Button>test</Button>,
  <Button>test</Button>,
  <Button>test</Button>,
]);

storiesOf('', fakeModule).add('', () => <Button>test</Button>, {
  param: 'test',
});

// $FlowExpectedError[incompatible-call]
storiesOf('', fakeModule).add('', () => <Button>test</Button>, '');
// $FlowExpectedError[prop-missing]
storiesOf('', fakeModule).add('', parameters, () => <Button>test</Button>);

// $FlowExpectedError[incompatible-call]
storiesOf('', fakeModule).add('', () => '');
// $FlowExpectedError[incompatible-call]
storiesOf('', fakeModule).add('', () => null);

storiesOf('', fakeModule).add('', ({ kind, story }) => (
  <div>
    {kind} {story}
  </div>
));

// $FlowExpectedError[prop-missing]
storiesOf('', fakeModule).add('', ({ kind, story, foo }) => (
  <div>
    {kind} {story} {foo}
  </div>
));

// The `addDecorator` function
storiesOf('', fakeModule)
  .addDecorator(Decorator)
  .add('', () => <div />);

addDecorator(Decorator);

// The `addParameters` function
storiesOf('', fakeModule)
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
forceReRender();

// The `configure` function
configure(() => undefined, fakeModule);

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

storiesOf<Addon>('TestAddon', fakeModule)
  .test('', () => <div />)
  .test('', () => <div />)
  .add('', () => <div />)
  .test('', () => <div />)
  .add('', () => <div />, parameters);
