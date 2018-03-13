// @flow

import React from 'react';
import Loadable from 'react-loadable';
import { describe, it } from 'flow-typed-test';

type Props = { a: string };
class Component extends React.Component<Props> {}

describe('options', () => {
  it('should fail when props is not provided', () => {
    // $ExpectError
    Loadable();
  });

  it('should fail when loader is missing', () => {
    // $ExpectError
    Loadable({
      loading: () => null
    });
  });

  it('should fail when loader option does not return a promise that resolves to a react component or a module object with default export which is a react component', () => {
    // $ExpectError
    Loadable({
      loader: () => Promise.resolve(1),
      loading: () => null
    });
  });

  it('delay property should be a number', () => {
    // $ExpectError
    Loadable({
      loader: () => Promise.resolve(Component),
      loading: () => null,
      delay: ''
    });

    Loadable({
      loader: () => Promise.resolve(Component),
      loading: () => null,
      delay: 1
    });
  });

  it('timeout property should be a number', () => {
    // $ExpectError
    Loadable({
      loader: () => Promise.resolve(Component),
      loading: () => null,
      timeout: ''
    });

    Loadable({
      loader: () => Promise.resolve(Component),
      loading: () => null,
      timeout: 1
    });
  });

  it('webpack option should be a function', () => {
    // $ExpectError
    Loadable({
      loader: () => Promise.resolve(Component),
      loading: () => null,
      webpack: []
    });

    Loadable({
      loader: () => Promise.resolve(Component),
      loading: () => null,
      webpack: () => [1]
    });
  });

  it('modules options should be an array of strings', () => {
    // $ExpectError modules option should be an array of module names
    Loadable({
      loader: () => Promise.resolve(Component),
      loading: () => null,
      modules: [1]
    });

    Loadable({
      loader: () => Promise.resolve(Component),
      loading: () => null,
      modules: ['f', 'o', 'o']
    });
  });

  it('render option should take a resolved module and related component props', () => {
    // $ExpectError render option should take a resolved module and related component props
    Loadable({
      loader: () => Promise.resolve(Component),
      loading: () => null,
      render: (a: string, b: string) => null
    });
  });
});

describe('props refinements', () => {
  class SyncComponent extends React.Component<{ a: string, b: number }> {}

  it('should refine props type from render function', () => {
    const LoadableComponent = Loadable({
      loader: (): Promise<number> => Promise.resolve(1),
      loading: () => null,
      render: (b: number, props: Props) => <SyncComponent a={props.a} b={b} />
    });

    const foo = <LoadableComponent a="foo"/>;
    // $ExpectError
    const bar = <LoadableComponent a={1} />;
  });

  it('should refine props type from loader option', () => {
    const Loaded1 = Loadable({
      loader: () => Promise.resolve(Component),
      loading: () => null
    });

    // $ExpectError
    const noWay = <Loaded1 a={1} />;
    <Loaded1 a="foo"/>;

    const Loaded2 = Loadable({
      loader: () => Promise.resolve({ default: Component }),
      loading: () => null
    });

    // $ExpectError
    const noWay = <Loaded2 a={1} />;

    <Loaded2 a="foo"/>
  });
});

describe('result component', () => {
  it('should be a react component', () => {
    const LoadableComponent: React$ComponentType<Props> = Loadable({
      loader: () => Promise.resolve({ default: Component }),
      loading: () => null
    });
  });

  it('should have preload() static method', () => {
    const LoadableComponent = Loadable({
      loader: () => Promise.resolve({ default: Component }),
      loading: () => null
    });

    LoadableComponent.preload();
  });
});

it('Loadable.Map() should work', () => {
  class Component extends React.Component<{ a: string, b: number }> {}

  const LoadableMap = Loadable.Map({
    loading: () => null,
    loader: {
      Cmp: () => Promise.resolve({ foo: Component }),
      b: () => Promise.resolve(1)
    },
    render: (loaded: { Cmp: { foo: React$ComponentType<{ a: string, b: number }> }, b: number }, props: { a: string }) => <loaded.Cmp.foo a={props.a} b={loaded.b} />
  });

  <LoadableMap a="foo" />
});

it('Loadable.preloadAll()', () => {
  Loadable.preloadAll();
});

it('Loadable.preloadReady()', () => {
  Loadable.preloadReady();
});
