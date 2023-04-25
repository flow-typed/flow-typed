// @flow
declare module "react-hot-loader" {
  declare type Module = { id: string, ... };

  declare type ErrorReporterProps = {|
    error: Error,
    errorInfo: { componentStack: string, ... }
  |}

  declare export type ContainerProps = {|
    children: React$Element<any>,
    errorBoundary?: boolean,
    errorReporter?: React$ComponentType<ErrorReporterProps>,
  |}

  declare export class AppContainer extends React$Component<ContainerProps> {}

  declare export function hot(module: Module): <T: React$ComponentType<any>>(
    Component: T,
    props?: $Diff<ContainerProps, { children: React$Element<any>, ... }>
  ) => T

  declare export function cold<T: React$ComponentType<any>>(component: T): T

  declare export function areComponentsEqual<T>(
    typeA: React$ComponentType<T>,
    typeB: React$ComponentType<T>
  ): boolean

  declare type Config = {|
    logLevel: 'debug' | 'log' | 'warn' | 'error',
    pureSFC: boolean,
    pureRender: boolean,
    allowSFC: boolean,
    disableHotRenderer: boolean,
    disableHotRendererWhenInjected: boolean,
    ignoreSFC: boolean,
    ignoreComponents: boolean,
    errorReporter: React$ComponentType<ErrorReporterProps>,
    ErrorOverlay: React$ComponentType<{ errors: Array<ErrorReporterProps>, ... }>,
    onComponentRegister: (type: any, uniqueLocalName: string, fileName: string) => any,
    onComponentCreate: (type: any, displayName: string) => any,
  |}

  declare export function setConfig(config: $Shape<Config>): void
}

declare module "react-hot-loader/root" {
  import type { ContainerProps } from 'react-hot-loader';

  declare export function hot<T: React$ComponentType<any>>(
    Component: T,
    props?: $Diff<ContainerProps, { children: React$Element<any>, ... }>
  ): T;
}
