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

describe('The `storiesOf` function', () => {
  it('should validate on default usage', () => {
    storiesOf('', fakeModule);
  });

  it('should error on invalid options', () => {
    // $FlowExpectedError[incompatible-call]
    storiesOf([], fakeModule);
    // $FlowExpectedError[incompatible-call]
    storiesOf('', 123);
  });

  it('should error on invalid method call', () => {
    // $FlowExpectedError[prop-missing]
    storiesOf('', fakeModule).foo('', () => <div />);
  });
});

describe('The `add` method', () => {
  it('should validate on default usage (element)', () => {
    storiesOf('', fakeModule).add('', () => <div />);
  });

  it('should validate on default usage (component)', () => {
    storiesOf('', fakeModule).add('', () => <Button>test</Button>);
  });

  it('should validate on default usage (array)', () => {
    storiesOf('', fakeModule).add('', () => [
      <Button>test</Button>,
      <Button>test</Button>,
      <Button>test</Button>,
    ]);
  });

  it('should validate on default usage (parameters)', () => {
    storiesOf('', fakeModule).add('', () => <Button>test</Button>, {
      param: 'test',
    });
  });

  it('should error on invalid default usage (parameters)', () => {
    // $FlowExpectedError[incompatible-call]
    storiesOf('', fakeModule).add('', () => <Button>test</Button>, '');
    // $FlowExpectedError[prop-missing]
    storiesOf('', fakeModule).add('', parameters, () => <Button>test</Button>);
  });

  it('should error on invalid default usage', () => {
    // $FlowExpectedError[incompatible-call]
    storiesOf('', fakeModule).add('', () => '');
    // $FlowExpectedError[incompatible-call]
    storiesOf('', fakeModule).add('', () => null);
  });

  it('should validate when unwrapping arguments', () => {
    storiesOf('', fakeModule).add('', ({ kind, story }) => (
      <div>
        {kind} {story}
      </div>
    ));
  });

  it('should error when unwrapping invalid arguments', () => {
    // $FlowExpectedError[prop-missing]
    storiesOf('', fakeModule).add('', ({ kind, story, foo }) => (
      <div>
        {kind} {story} {foo}
      </div>
    ));
  });
});

describe('The `addDecorator` function', () => {
  it('should validate on default usage (local)', () => {
    storiesOf('', fakeModule)
      .addDecorator(Decorator)
      .add('', () => <div />);
  });

  it('should validate on default usage (global)', () => {
    addDecorator(Decorator);
  });
});

describe('The `addParameters` function', () => {
  it('should validate on default usage (local)', () => {
    storiesOf('', fakeModule)
      .addParameters(parameters)
      .add('', () => <div />);
  });

  it('should validate on default usage (global)', () => {
    addParameters(parameters);
  });

  it('should error on invalid usage (global)', () => {
    // $FlowExpectedError[incompatible-call]
    addParameters();
    // $FlowExpectedError[incompatible-call]
    addParameters('');
  });
});

describe('The `clearDecorators` function', () => {
  it('should validate on default usage (global)', () => {
    clearDecorators();
  });

  it('should error on invalid usage (global)', () => {
    // $FlowExpectedError[extra-arg]
    clearDecorators(true);
    // $FlowExpectedError[extra-arg]
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
    configure(() => undefined, fakeModule);
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

    storiesOf<Addon>('TestAddon', fakeModule)
      .test('', () => <div />)
      .test('', () => <div />)
      .add('', () => <div />)
      .test('', () => <div />)
      .add('', () => <div />, parameters);
  });
});
