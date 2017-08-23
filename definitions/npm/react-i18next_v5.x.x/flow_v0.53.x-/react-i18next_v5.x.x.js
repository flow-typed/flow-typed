declare module "react-i18next" {
  declare type TFunction = (
    key?: ?string,
    data?: ?{ [key: string]: string }
  ) => string;
  declare type Locales = string | Array<string>;

  declare type TranslatorProps = {
    t: TFunction,
    i18nLoadedAt: ?Date,
    i18n: Object
  };

  declare type StatelessComponent<P> = (props: P) => ?React$Element<any>;
  declare type LegacyTranslator<OP, P> = {
    (component: StatelessComponent<P>): Class<React$Component<OP, void>>,
    <St>(
      component: Class<React$Component<P, St>>
    ): Class<React$Component<OP, St>>
  };

  declare type Translator = <P: {}>(
    component: React$ComponentType<TranslatorProps & P>
  ) => Class<React$Component<P, *>>;

  declare function translate(locales: Locales): Translator;
  declare function translate<OP, P>(locales: Locales): LegacyTranslator<OP, P>;

  declare type NamespacesProps = {
    components: Array<React$ComponentType<*>>,
    i18n: { loadNamespaces: Function }
  };

  declare function loadNamespaces(props: NamespacesProps): Promise<void>;

  declare type ProviderProps = { i18n: Object, children: React$Element<*> };

  declare var I18nextProvider: React$ComponentType<ProviderProps>;

  declare type InterpolateProps = {
    children?: React$Element<any>,
    className?: string
  };

  declare var Interpolate: React$ComponentType<InterpolateProps>;
}
