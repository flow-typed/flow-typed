declare module 'react-jss' {
  /*
    P = Props
    OP = OwnProps
    Def = DefaultProps
    St = State
  */

  declare type Null = null | void;

  declare type Dictionary = { [key: string]: {} }

  declare type StatelessComponent<P> = (props: P) => ?React$Element<any>;

  declare type ClassComponent<Def, P, St> = Class<React$Component<Def, P, St>>;

  declare class ConnectedComponent<OP, P, Def, St> extends React$Component<void, OP, void> {
    static InnerComponent: Class<React$Component<Def, P, St>>;
    static defaultProps: void;
    props: OP;
    state: void;
  }

  declare type ConnectedComponentClass<OP, P, Def, St> = Class<ConnectedComponent<OP, P, Def, St>>;

  declare type Connector<OP, P> = {
    (component: StatelessComponent<P>): ConnectedComponentClass<OP, P, void, void>;
    <Def, St>(component: ClassComponent<Def, P, St>): ConnectedComponentClass<OP, P, Def, St>;
    (component: Null): ConnectedComponentClass<OP, P, void, void>;
  };

  declare export type Classes<Styles> = { [classname: $Keys<Styles>]: string };

  declare export type Sheet<Styles> = {
    attached: boolean,
    classes: Classes<Styles>,
    deployed: boolean,
    linked: boolean,
    options: Object,
    renderer: mixed,
    rules: mixed,
  };

  declare type InjectedProps<Styles> = {
    classes: Classes<Styles>,
    sheet: Sheet<Styles>,
    theme?: Dictionary
  };

  declare type Theme = Dictionary | (parentTheme: Theme) => Dictionary

  declare type StylesCreatorFn<S> = (theme: Theme) => S

  declare export default function injectSheet<OP, Styles: Dictionary>(
    stylesOrCreator: StylesCreatorFn<Styles> | Styles
  ): Connector<OP, $Supertype<InjectedProps<Styles> & OP>>;

  // TODO: improve `JssProvider` type
  declare export class JssProvider extends React$Component<any, any, any> {}

  // TODO: improve `ThemeProvider` type
  declare export class ThemeProvider extends React$Component<any, any, any> {}

  declare export function withTheme<ThemeType, OP>(
    component: StatelessComponent<$Supertype<{ theme: ThemeType } & OP>>
  ): ConnectedComponentClass<OP, $Supertype<{ theme: ThemeType } & OP>, void, void>;

  declare export function withTheme<ThemeType, OP, Def, St>(
    component: ClassComponent<Def, $Supertype<{ theme: ThemeType } & OP>, St>
  ): ConnectedComponentClass<OP, $Supertype<{ theme: ThemeType } & OP>, Def, St>;

  declare export function createTheming(customChannel: string): {
    channel: string,
    withTheme: Function,
    ThemeProvider: ThemeProvider,
    themeListener: {},
  };
};
