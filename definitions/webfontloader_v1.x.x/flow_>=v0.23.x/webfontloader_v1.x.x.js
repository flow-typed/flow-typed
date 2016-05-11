// @flow

declare module 'webfontloader' {
  declare type WebFontConfig = {
    loading?: () => void,
    active?: () => void,
    inactive?: () => void,

    fontloading?: (familyName: string, fvd: string) => void,
    fontactive?: (familyName: string, fvd: string) => void,
    fontinactive?: (familyName: string, fvd: string) => void,

    classes?: boolean,
    events?: boolean,

    timeouts?: number,

    custom?: {
      families: string[],
      urls: string[],
      testStrings: { [k: string]: string },
    },

    fontdeck?: {
      id: string,
    },

    monotype?: {
      projectId: string,
      version?: number,
    },

    google?: {
      families: string[],
      text?: string,
    },

    typekit?: {
      id: string,
    },
  }
  declare class WebFont {
    load(config: WebFontConfig): void;
  }

  declare var exports: WebFont;
}

