declare module 'react-jss' {
  /*
    P = Props
    OP = OwnProps
    Def = DefaultProps
    St = State
  */

  declare type Null = null | void;

  declare type StatelessComponent<P> = (props: P) => ?React$Element<any>;

  declare class ConnectedComponent<OP, P, Def, St> extends React$Component<void, OP, void> {
    static InnerComponent: Class<React$Component<Def, P, St>>;
    static defaultProps: void;
    props: OP;
    state: void;
  }

  declare type ConnectedComponentClass<OP, P, Def, St> = Class<ConnectedComponent<OP, P, Def, St>>;

  declare type Connector<OP, P> = {
    (component: StatelessComponent<P>): ConnectedComponentClass<OP, P, void, void>;
    <Def, St>(component: Class<React$Component<Def, P, St>>): ConnectedComponentClass<OP, P, Def, St>;
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
  };

  declare export default function injectSheet<OP, Styles: {}>(
    styles: Styles
  ): Connector<OP, $Supertype<InjectedProps<Styles> & OP>>;

  declare export function create(): typeof injectSheet
};
