// @flow

import React from 'react';
import Loadable from 'react-loadable';

// $ExpectError options object is required
Loadable();

// $ExpectError loader option is required
Loadable({
  loading: () => null
});

// $ExpectError loader option should return a promise that resolves to a react component or a module object with default export which is a react component
Loadable({
  loader: () => Promise.resolve(1),
  loading: () => null
});

type Props = { a: string };

class Component extends React.Component<Props> {}

// $ExpectError delay option should be a number
Loadable({
  loader: () => Promise.resolve(Component),
  loading: () => null,
  delay: ''
});

// $ExpectError timeout option should be a number
Loadable({
  loader: () => Promise.resolve(Component),
  loading: () => null,
  timeout: ''
});

// $ExpectError webpack option should be a function
Loadable({
  loader: () => Promise.resolve(Component),
  loading: () => null,
  webpack: []
});

// $ExpectError modules option should be an array of module names
Loadable({
  loader: () => Promise.resolve(Component),
  loading: () => null,
  modules: [1]
});

// $ExpectError render option should take a resolved module and related component props
Loadable({
  loader: () => Promise.resolve(Component),
  loading: () => null,
  render: (a: string, b: string) => null
});

Loadable({
  loader: () => Promise.resolve(Component),
  loading: () => null,
  render: (C: React$ComponentType<Props> | { default: React$ComponentType<Props> }, props: Props) => null
});

{
  const Loaded = Loadable({
    loader: () => Promise.resolve(Component),
    loading: () => null
  });

  // $ExpectError "a" property should be a string (inherited from Component)
  const noWay = <Loaded a={1} />;

  <Loaded a="foo"/>
}

{
  const Loaded = Loadable({
    loader: () => Promise.resolve({ default: Component }),
    loading: () => null
  });

  // $ExpectError "a" property should be a string (inherited from Component)
  const noWay = <Loaded a={1} />;

  <Loaded a="foo"/>
}
