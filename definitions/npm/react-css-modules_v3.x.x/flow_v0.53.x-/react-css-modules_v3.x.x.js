// @flow
import React from "react";

declare module "react-css-modules" {
  declare module.exports: <P, S, C: React$Component<P, S>, X>(
    component: Class<C>,
    styles: X,
    options?: {|
      allowMultiple?: boolean,
      errorWhenNotFound?: boolean
    |}
  ) => Class<React$Component<$Diff<P, { styles: X }>, S>>;
}
