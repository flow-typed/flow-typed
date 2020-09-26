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

const nodeModule = module;

describe('The `storiesOf` function', () => {
  it('should validate on default usage', () => {
    storiesOf('', nodeModule);
  });

  it('should error on invalid options', () => {
    // $FlowExpectedError[incompatible-call]
    storiesOf([], nodeModule);
    // $FlowExpectedError[incompatible-call]
    storiesOf('', 123);
  });

  it('should error on invalid method call', () => {
    // $FlowExpectedError[prop-missing]
    storiesOf('', nodeModule).foo('', () => <div />);
  });
});

describe('The `add` method', () => {
  it('should validate on default usage (element)', () => {
    storiesOf('', nodeModule).add('', () => <div />);
  });

  it('should validate on default usage (component)', () => {
    storiesOf('', nodeModule).add('', () => <Button>test</Button>);
  });

  it('should validate on default usage (array)', () => {
    storiesOf('', nodeModule).add('', () => [
      <Button>test</Button>,
      <Button>test</Button>,
      <Button>test</Button>,
    ]);
  });

  it('should validate on default usage (string)', () => {
    storiesOf('', nodeModule).add('', () => '');
  });

  it('should validate on default usage (number)', () => {
    storiesOf('', nodeModule).add('', () => 0);
  });

  it('should validate on default usage (parameters)', () => {
    storiesOf('', nodeModule).add('', () => <Button>test</Button>, {
      param: 'test',
    });
  });

  it('should error on invalid default usage (parameters)', () => {
    // $FlowExpectedError
    storiesOf('', nodeModule).add('', () => <Button>test</Button>, '');
    // $FlowExpectedError
    storiesOf('', nodeModule).add('', parameters, () => <Button>test</Button>);
  });

  it('should error on invalid default usage', () => {
    // $FlowExpectedError
    storiesOf('', nodeModule).add('', () => () => null);
    // $FlowExpectedError
    storiesOf('', nodeModule).add('', () => Button);
    // $FlowExpectedError
    storiesOf('', nodeModule).add('', () => null);
  });

  it('should validate when unwrapping arguments', () => {
    storiesOf('', nodeModule).add('', ({ kind, story }) => (
      <div>
        {kind} {story}
      </div>
    ));
  });

  it('should error when unwrapping invalid arguments', () => {
    // $FlowExpectedError
    storiesOf('', nodeModule).add('', ({ kind, story, foo }) => (
      <div>
        {kind} {story} {foo}
      </div>
    ));
  });
});

describe('The `addDecorator` function', () => {
  it('should validate on default usage (local)', () => {
    storiesOf('', nodeModule)
      .addDecorator(Decorator)
      .add('', () => <div />);
  });

  it('should validate on default usage (global)', () => {
    addDecorator(Decorator);
  });
});

describe('The `addParameters` function', () => {
  it('should validate on default usage (local)', () => {
    storiesOf('', nodeModule)
      .addParameters(parameters)
      .add('', () => <div />);
  });

  it('should validate on default usage (global)', () => {
    addParameters(parameters);
  });

  it('should error on invalid usage (global)', () => {
    // $FlowExpectedError
    addParameters();
    // $FlowExpectedError
    addParameters('');
  });
});

describe('The `clearDecorators` function', () => {
  it('should validate on default usage (global)', () => {
    clearDecorators();
  });

  it('should error on invalid usage (global)', () => {
    // $FlowExpectedError
    clearDecorators(true);
    // $FlowExpectedError
    clearDecorators(parameters);
  });
});

describe('The `getStorybook` function', () => {
  it('should validate on default usage', () => {
    getStorybook().forEach(({ kind, stories }) =>
      stories.forEach(({ name, render }) => render())
    );
  });
});

describe('The `forceReRender` function', () => {
  it('should validate on default usage', () => {
    forceReRender();
  });
});

describe('The `configure` function', () => {
  it('should validate on default usage', () => {
    configure(() => undefined, nodeModule);
  });
});

describe('The `setAddon` function', () => {
  it('should validate on default usage', () => {
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
  });
});
