declare module 'react-i18next' {
  declare type TFunction = (key?: ?string, data?: ?Object) => string;
  declare type Locales = string | Array<string>;

  declare type StatelessComponent<P> = (props: P) => ?React$Element<any>;

  declare type Comp<P> = StatelessComponent<P> | Class<React$Component<*, P, *>>;

  declare type Translator<OP, P> = {
    (component: StatelessComponent<P>): Class<React$Component<void, OP, void>>;
    <Def, St>(component: Class<React$Component<Def, P, St>>): Class<React$Component<Def, OP, St>>;
  }

  declare function translate<OP, P>(locales: Locales): Translator<OP, P>;

  declare type NamespacesProps = {
    components: Array<Comp<*>>,
    i18n: { loadNamespaces: Function },
  };

  declare function loadNamespaces(props: NamespacesProps): Promise<void>;

  declare type ProviderProps = { i18n: Object, children: React$Element<any> };

  declare var I18nextProvider: Class<React$Component<void, ProviderProps, void>>;

  declare type InterpolateProps = {
    children?: React$Element<any>,
    className?: string,
  };

  declare var Interpolate: Class<React$Component<void, InterpolateProps, void>>;
}
