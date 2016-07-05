type ChalkStyleElement = {
  open: string;
  close: string;
};

type ChalkChain = ChalkStyle & (...text: string[]) => string;

type ChalkStyle = {
  // General
  reset: ChalkChain;
  bold: ChalkChain;
  italic: ChalkChain;
  underline: ChalkChain;
  inverse: ChalkChain;
  strikethrough: ChalkChain;

  // Text colors
  black: ChalkChain;
  red: ChalkChain;
  green: ChalkChain;
  yellow: ChalkChain;
  blue: ChalkChain;
  magenta: ChalkChain;
  cyan: ChalkChain;
  white: ChalkChain;
  gray: ChalkChain;
  grey: ChalkChain;

  // Background colors
  bgBlack: ChalkChain;
  bgRed: ChalkChain;
  bgGreen: ChalkChain;
  bgYellow: ChalkChain;
  bgBlue: ChalkChain;
  bgMagenta: ChalkChain;
  bgCyan: ChalkChain;
  bgWhite: ChalkChain;
};

type ChalkStyleMap = {
  // General
  reset: ChalkStyleElement;
  bold: ChalkStyleElement;
  italic: ChalkStyleElement;
  underline: ChalkStyleElement;
  inverse: ChalkStyleElement;
  strikethrough: ChalkStyleElement;

  // Text colors
  black: ChalkStyleElement;
  red: ChalkStyleElement;
  green: ChalkStyleElement;
  yellow: ChalkStyleElement;
  blue: ChalkStyleElement;
  magenta: ChalkStyleElement;
  cyan: ChalkStyleElement;
  white: ChalkStyleElement;
  gray: ChalkStyleElement;

  // Background colors
  bgBlack: ChalkStyleElement;
  bgRed: ChalkStyleElement;
  bgGreen: ChalkStyleElement;
  bgYellow: ChalkStyleElement;
  bgBlue: ChalkStyleElement;
  bgMagenta: ChalkStyleElement;
  bgCyan: ChalkStyleElement;
  bgWhite: ChalkStyleElement;
};

declare module "chalk" {
  declare var enabled: boolean;
  declare var supportsColor: boolean;
  declare var styles: ChalkStyleMap;

  declare function stripColor(value: string): any;
  declare function hasColor(str: string): boolean;

  // General
  declare var reset: ChalkChain;
  declare var bold: ChalkChain;
  declare var italic: ChalkChain;
  declare var underline: ChalkChain;
  declare var inverse: ChalkChain;
  declare var strikethrough: ChalkChain;

  // Text colors
  declare var black: ChalkChain;
  declare var red: ChalkChain;
  declare var green: ChalkChain;
  declare var yellow: ChalkChain;
  declare var blue: ChalkChain;
  declare var magenta: ChalkChain;
  declare var cyan: ChalkChain;
  declare var white: ChalkChain;
  declare var gray: ChalkChain;
  declare var grey: ChalkChain;

  // Background colors
  declare var bgBlack: ChalkChain;
  declare var bgRed: ChalkChain;
  declare var bgGreen: ChalkChain;
  declare var bgYellow: ChalkChain;
  declare var bgBlue: ChalkChain;
  declare var bgMagenta: ChalkChain;
  declare var bgCyan: ChalkChain;
  declare var bgWhite: ChalkChain;
}
