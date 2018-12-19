// @flow
declare module "react-hot-loader" {
  declare type Module = {
    id: string
  };

  declare type AppContainerProps = {|
    children: React$Element<any>,
    errorBoundary?: boolean,
    errorReporter?: React$ComponentType<{
      error: Error,
      errorInfo: { componentStack: string }
    }>
  |};

  declare export class AppContainer extends React$Component<
    AppContainerProps
  > {}

  declare export function hot(
    someModule: Module
  ): <T, W: React$ComponentType<T>>(
    wrappedComponent: W,
    props?: $Diff<AppContainerProps, { children: React$Element<any> }>
  ) => React$ComponentType<T>;
}
