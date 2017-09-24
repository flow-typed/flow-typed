// @flow
declare module "react-hot-loader" {
  declare class AppContainer<S, A> extends React$Component<{
    errorReporter?: React$Element<any> | (() => React$Element<any>),
    children: React$Element<any>
  }> {}
}
