import type { TFunction } from 'i18next'

declare module 'react-i18next' {
  declare type TFunction = TFunction;
  declare type Locales = string | Array<string>;

  declare type StatelessComponent<P> = (props: P) => ?React$Element<any>;

  declare type Comp<P> = StatelessComponent<P> | Class<React$Component<void, P, void>>;
  declare type TranslatedComponent<OP> = Class<React$Component<void, $Diff<OP, { t: TFunction }>, void>>;
  declare type Translator<OP, P> = (component: Comp<P>) => TranslatedComponent<OP>;

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
