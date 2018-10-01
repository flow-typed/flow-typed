// @flow
import React from "react";

declare module "react-css-modules" {
  declare type StatelessComponent<P, S> = (props: P, state: S) => React$Element<any>;
  declare module.exports: <P, S, C: React$Component<P, S>, X>(
    component: Class<C> | StatelessComponent<P, S>,
    styles: X,
    options?: {|
      allowMultiple?: boolean,
      errorWhenNotFound?: boolean,
    |},
  ) => Class<React$Component<$Diff<P, { styles: X }>, S>>;
}
