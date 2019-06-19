declare module "react-i18next" {
  declare type TFunction = (key?: ?string, data?: ?Object) => string;

  declare type TranslatorProps = {
    t: TFunction,
    i18nLoadedAt: Date,
    i18n: Object
  };

  declare type Translator<OP, P> = (
    component: React$ComponentType<P>
  ) => Class<React$Component<OP, *>>;

  declare type TranslateOptions = $Shape<{
    wait: boolean,
    nsMode: "default" | "fallback",
    bindi18n: false | string,
    bindStore: false | string,
    withRef: boolean,
    translateFuncName: string,
    i18n: Object,
    usePureComponent: boolean
  }>;

  declare function translate<OP, P>(
    namespaces?: string | Array<string> | ((OP) => string | Array<string>),
    options?: TranslateOptions
  ): Translator<OP, P>;

  declare type I18nProps = {
    i18n?: Object,
    ns?: string | Array<string>,
    children: (t: TFunction, { i18n: Object, t: TFunction }) => React$Node,
    initialI18nStore?: Object,
    initialLanguage?: string
  };
  declare var I18n: React$ComponentType<I18nProps>;

  declare type InterpolateProps = {
    className?: string,
    dangerouslySetInnerHTMLPartElement?: string,
    i18n?: Object,
    i18nKey?: string,
    options?: Object,
    parent?: string,
    style?: Object,
    t?: TFunction,
    useDangerouslySetInnerHTML?: boolean
  };
  declare var Interpolate: React$ComponentType<InterpolateProps>;

  declare type TransProps = {
    count?: number,
    parent?: string,
    i18n?: Object,
    i18nKey?: string,
    t?: TFunction
  };
  declare var Trans: React$ComponentType<TransProps>;

  declare type ProviderProps = { i18n: Object, children: React$Element<*> };
  declare var I18nextProvider: React$ComponentType<ProviderProps>;

  declare type NamespacesProps = {
    components: Array<React$ComponentType<*>>,
    i18n: { loadNamespaces: Function }
  };
  declare function loadNamespaces(props: NamespacesProps): Promise<void>;

  declare var reactI18nextModule: {
    type: "3rdParty",
    init: (instance: Object) => void
  };

  declare function setDefaults(options: TranslateOptions): void;

  declare function getDefaults(): TranslateOptions;

  declare function getI18n(): Object;

  declare function setI18n(instance: Object): void;
}
