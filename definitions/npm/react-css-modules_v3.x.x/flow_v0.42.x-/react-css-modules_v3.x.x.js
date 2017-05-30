// @flow

declare module 'react-css-modules' {
  declare function exports<D, P, S, C: React$Component<D, P, S>, X>(
    component: Class<C>,
    styles: X,
    options?: {|
      allowMultiple?: boolean,
      errorWhenNotFound?: boolean,
    |}
  ): Class<React$Component<D, $Diff<P, { styles: X }>, S>>
}
