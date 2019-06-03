// @flow

import { describe, it } from 'flow-typed-test';
import React from 'react';
import {
  storiesOf,
  addDecorator,
  getStorybook,
  forceReRender,
  configure,
  setAddon,
  type RenderFunction,
  type Story,
} from '@storybook/react';

const Button = props => <button {...props} />;

const Decorator = story => <div>{story()}</div>;

describe('The `storiesOf` function', () => {
  it('should validate on default usage', () => {
    storiesOf('', module);
  });

  it('should error on invalid options', () => {
    // $ExpectError
    storiesOf([], module);
    // $ExpectError
    storiesOf('', 123);
  });

  it('should error on invalid method call', () => {
    // $ExpectError
    storiesOf('', module).foo('', () => <div />);
  });
});

describe('The `add` method', () => {
  it('should validate on default usage (element)', () => {
    storiesOf('', module).add('', () => <div />);
  });

  it('should validate on default usage (component)', () => {
    storiesOf('', module).add('', () => <Button>test</Button>);
  });

  it('should validate on default usage (array)', () => {
    storiesOf('', module).add('', () => [
      <Button>test</Button>,
      <Button>test</Button>,
      <Button>test</Button>,
    ]);
  });

  it('should error on invalid default usage', () => {
    // $ExpectError
    storiesOf('', module).add('', () => '');
    // $ExpectError
    storiesOf('', module).add('', () => null);
  });

  it('should validate when unwrapping arguments', () => {
    storiesOf('', module).add('', ({ kind, story }) => (
      <div>
        {kind} {story}
      </div>
    ));
  });

  it('should error when unwrapping invalid arguments', () => {
    // $ExpectError
    storiesOf('', module).add('', ({ kind, story, foo }) => (
      <div>
        {kind} {story} {foo}
      </div>
    ));
  });
});

describe('The `addDecorator` function', () => {
  it('should validate on default usage (local)', () => {
    storiesOf('', module)
      .addDecorator(Decorator)
      .add('', () => <div />);
  });

  it('should validate on default usage (global)', () => {
    addDecorator(Decorator);
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
    configure(() => undefined, module);
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

    storiesOf<Addon>('TestAddon', module)
      .test('', () => <div />)
      .test('', () => <div />)
      .add('', () => <div />)
      .test('', () => <div />);
  });
});
