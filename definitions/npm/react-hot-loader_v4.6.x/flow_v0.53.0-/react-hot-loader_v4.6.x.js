// @flow
declare type ErrorReporterProps = {|
  error: any,
|}

declare type AppContainerProps = {|
  errorBoundary?: boolean,
  errorReporter?: React$ComponentType<ErrorReporterProps>,
|}

declare module "react-hot-loader" {
  declare type Module = {
    id: string
  };

  declare type AppChildren = {|
    children?: React$Element<any>
  |}

  declare export class AppContainer extends React$Component<AppContainerProps & AppChildren> {}

  declare export function hot(module: Module): <T: React$ComponentType<any>>(Component: T, props?: AppContainerProps) => T

  declare export function cold<T: React$ComponentType<any>>(component: T): T

  declare export function areComponentsEqual<T>(typeA: React$ComponentType<T>, typeB: React$ComponentType<T>): boolean

  declare type HotError = {|
    error: Error,
    errorInfo?: { componentStack: string },
  |}

  declare type Config = {|
    logLevel: 'debug' | 'log' | 'warn' | 'error',
    pureSFC: boolean,
    pureRender: boolean,
    allowSFC: boolean,
    disableHotRenderer: boolean,
    disableHotRendererWhenInjected: boolean,
    ignoreSFC: boolean,
    ignoreComponents: boolean,
    errorReporter: React$ComponentType<HotError>,
    ErrorOverlay: React$ComponentType<{ errors: Array<HotError> }>,
    onComponentRegister: (type: any, uniqueLocalName: string, fileName: string) => any,
    onComponentCreate: (type: any, displayName: string) => any,
  |}

  declare export function setConfig(config: $Shape<Config>): void
}

declare module "react-hot-loader/root" {
  declare export function hot<T: React$ComponentType<any>>(
    Component: T,
    props?: AppContainerProps
  ): T;
}
