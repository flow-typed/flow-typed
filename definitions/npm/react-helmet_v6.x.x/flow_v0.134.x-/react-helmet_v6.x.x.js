declare module 'react-helmet' {
  declare interface OtherElementAttributes {
    [key: string]: string | number | boolean | null | void;
  }
  declare interface HelmetTags {
    baseTag: any[];
    linkTags: HTMLLinkElement[];
    metaTags: HTMLMetaElement[];
    noscriptTags: any[];
    scriptTags: HTMLScriptElement[];
    styleTags: HTMLStyleElement[];
  }
  declare interface HelmetProps {
    async?: boolean | void;
    base?: any;
    defaultTitle?: string | void;
    defer?: boolean | void;
    encodeSpecialCharacters?: boolean | void;
    onChangeClientState?:
      | ((
          newState: any,
          addedTags: HelmetTags,
          removedTags: HelmetTags
        ) => void)
      | void;
    noscript?: any[] | void;
    script?: any[] | void;
    style?: any[] | void;
    title?: string | void;
    titleAttributes?: { [key: string]: any } | void;
    titleTemplate?: string | void;
  }
  declare class Helmet mixins React$Component<HelmetProps> {
    static rewind(): HelmetData;
    static renderStatic(): HelmetData;
    static canUseDOM: boolean;
  }
  declare var HelmetExport: typeof Helmet;
  declare export var Helmet: typeof HelmetExport;
  declare export var canUseDOM: boolean;
  declare export default typeof HelmetExport;
  declare interface HelmetData {
    base: HelmetDatum;
    bodyAttributes: HelmetHTMLBodyDatum;
    htmlAttributes: HelmetHTMLElementDatum;
    link: HelmetDatum;
    meta: HelmetDatum;
    noscript: HelmetDatum;
    script: HelmetDatum;
    style: HelmetDatum;
    title: HelmetDatum;
    titleAttributes: HelmetDatum;
  }
  declare interface HelmetDatum {
    toString(): string;
    toComponent(): React$Component<any>;
  }
  declare interface HelmetHTMLBodyDatum {
    toString(): string;
    toComponent(): React$Component<HTMLBodyElement>;
  }
  declare interface HelmetHTMLElementDatum {
    toString(): string;
    toComponent(): React$Component<HTMLHtmlElement>;
  }
}
