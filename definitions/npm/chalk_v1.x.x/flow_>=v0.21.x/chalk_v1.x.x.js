type $npm$chalk$ChalkStyleElement = {
  open: string;
  close: string;
};

type $npm$chalk$ChalkChain = $npm$chalk$ChalkStyle & (...text: string[]) => string;

type $npm$chalk$ChalkStyle = {
  // General
  reset: $npm$chalk$ChalkChain;
  bold: $npm$chalk$ChalkChain;
  italic: $npm$chalk$ChalkChain;
  underline: $npm$chalk$ChalkChain;
  inverse: $npm$chalk$ChalkChain;
  strikethrough: $npm$chalk$ChalkChain;

  // Text colors
  black: $npm$chalk$ChalkChain;
  red: $npm$chalk$ChalkChain;
  green: $npm$chalk$ChalkChain;
  yellow: $npm$chalk$ChalkChain;
  blue: $npm$chalk$ChalkChain;
  magenta: $npm$chalk$ChalkChain;
  cyan: $npm$chalk$ChalkChain;
  white: $npm$chalk$ChalkChain;
  gray: $npm$chalk$ChalkChain;
  grey: $npm$chalk$ChalkChain;

  // Background colors
  bgBlack: $npm$chalk$ChalkChain;
  bgRed: $npm$chalk$ChalkChain;
  bgGreen: $npm$chalk$ChalkChain;
  bgYellow: $npm$chalk$ChalkChain;
  bgBlue: $npm$chalk$ChalkChain;
  bgMagenta: $npm$chalk$ChalkChain;
  bgCyan: $npm$chalk$ChalkChain;
  bgWhite: $npm$chalk$ChalkChain;
};

type $npm$chalk$ChalkStyleMap = {
  // General
  reset: $npm$chalk$ChalkStyleElement;
  bold: $npm$chalk$ChalkStyleElement;
  italic: $npm$chalk$ChalkStyleElement;
  underline: $npm$chalk$ChalkStyleElement;
  inverse: $npm$chalk$ChalkStyleElement;
  strikethrough: $npm$chalk$ChalkStyleElement;

  // Text colors
  black: $npm$chalk$ChalkStyleElement;
  red: $npm$chalk$ChalkStyleElement;
  green: $npm$chalk$ChalkStyleElement;
  yellow: $npm$chalk$ChalkStyleElement;
  blue: $npm$chalk$ChalkStyleElement;
  magenta: $npm$chalk$ChalkStyleElement;
  cyan: $npm$chalk$ChalkStyleElement;
  white: $npm$chalk$ChalkStyleElement;
  gray: $npm$chalk$ChalkStyleElement;

  // Background colors
  bgBlack: $npm$chalk$ChalkStyleElement;
  bgRed: $npm$chalk$ChalkStyleElement;
  bgGreen: $npm$chalk$ChalkStyleElement;
  bgYellow: $npm$chalk$ChalkStyleElement;
  bgBlue: $npm$chalk$ChalkStyleElement;
  bgMagenta: $npm$chalk$ChalkStyleElement;
  bgCyan: $npm$chalk$ChalkStyleElement;
  bgWhite: $npm$chalk$ChalkStyleElement;
};

declare module "chalk" {
  declare var enabled: boolean;
  declare var supportsColor: boolean;
  declare var styles: $npm$chalk$ChalkStyleMap;

  declare function stripColor(value: string): any;
  declare function hasColor(str: string): boolean;

  // General
  declare var reset: $npm$chalk$ChalkChain;
  declare var bold: $npm$chalk$ChalkChain;
  declare var italic: $npm$chalk$ChalkChain;
  declare var underline: $npm$chalk$ChalkChain;
  declare var inverse: $npm$chalk$ChalkChain;
  declare var strikethrough: $npm$chalk$ChalkChain;

  // Text colors
  declare var black: $npm$chalk$ChalkChain;
  declare var red: $npm$chalk$ChalkChain;
  declare var green: $npm$chalk$ChalkChain;
  declare var yellow: $npm$chalk$ChalkChain;
  declare var blue: $npm$chalk$ChalkChain;
  declare var magenta: $npm$chalk$ChalkChain;
  declare var cyan: $npm$chalk$ChalkChain;
  declare var white: $npm$chalk$ChalkChain;
  declare var gray: $npm$chalk$ChalkChain;
  declare var grey: $npm$chalk$ChalkChain;

  // Background colors
  declare var bgBlack: $npm$chalk$ChalkChain;
  declare var bgRed: $npm$chalk$ChalkChain;
  declare var bgGreen: $npm$chalk$ChalkChain;
  declare var bgYellow: $npm$chalk$ChalkChain;
  declare var bgBlue: $npm$chalk$ChalkChain;
  declare var bgMagenta: $npm$chalk$ChalkChain;
  declare var bgCyan: $npm$chalk$ChalkChain;
  declare var bgWhite: $npm$chalk$ChalkChain;
}
