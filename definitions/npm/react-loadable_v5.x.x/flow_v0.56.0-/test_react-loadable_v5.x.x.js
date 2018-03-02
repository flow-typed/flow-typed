// @flow

import React from 'react';
import Loadable from 'react-loadable';

// $ExpectError
Loadable();

// $ExpectError
Loadable({
  loading: () => null
});

// $ExpectError
Loadable({
  loader: () => Promise.resolve(1),
  loading: () => null
});

type Props = { a: string };

class Component extends React.Component<Props> {}

// $ExpectError
Loadable({
  loader: () => Promise.resolve(Component),
  loading: () => null,
  delay: ''
});

// $ExpectError
Loadable({
  loader: () => Promise.resolve(Component),
  loading: () => null,
  timeout: ''
});

// $ExpectError
Loadable({
  loader: () => Promise.resolve(Component),
  loading: () => null,
  webpack: []
});

// $ExpectError
Loadable({
  loader: () => Promise.resolve(Component),
  loading: () => null,
  modules: [1]
});

// $ExpectError
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

  // $ExpectError
  const noWay = <Loaded a={1} />;

  <Loaded a="foo"/>
}

{
  const Loaded = Loadable({
    loader: () => Promise.resolve({ default: Component }),
    loading: () => null
  });

  // $ExpectError
  const noWay = <Loaded a={1} />;

  <Loaded a="foo"/>
}
