// @flow

declare module 'webfontloader' {
  declare type WebFontConfig = {
    loading?: () => any,
    active?: () => any,
    inactive?: () => any,

    fontloading?: (familyName: string, fvd: string) => any,
    fontactive?: (familyName: string, fvd: string) => any,
    fontinactive?: (familyName: string, fvd: string) => any,

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

