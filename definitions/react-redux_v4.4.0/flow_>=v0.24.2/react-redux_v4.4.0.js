// @flow
import React from 'react';

declare module 'react-redux' {
  declare type storeShape = {
    subscribe: Function,
    dispatch: Function,
    getState: Function,
  }

  declare type DefaultProps = {
  }

  declare type Props = {
    store: storeShape,
    children: React$Element,
  }

  declare class Provider extends React$Component {
    static defaultProps: DefaultProps;
    props: Props;
  }

  declare class Connected extends React$Component {
    props: { store: storeShape };
  }

  declare function connect(mapStateToProps: Function, mapDispatchToProps: Function, mergeProps: any, options?: Object): (component: React.Component) => Connected;

  declare type ReactRedux = {
    Provider: typeof Provider;
    connect: connect;
  }
  declare var exports: ReactRedux;
}
