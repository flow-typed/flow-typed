// @flow

declare module 'react-jss' {
  import type { Component, ComponentType, ElementConfig } from 'react';

  declare export class JssProvider extends React$Component<any, any> {}

  declare export default function injectStyle(styles: Object): <Props, Component: ComponentType<Props>>(
    WrappedComponent: Component,
    // return class because of https://github.com/facebook/flow/issues/6057
  ) => Class<
    React$Component<$Diff<ElementConfig<Component>, { classes: any }>>
  >;
}