declare module 'ansi-styles' {
  import typeof * as cssKeywords from 'color-name';

  declare export type EscapeCode$CodePair = {
    open: string,
    close: string,
  };

  declare export type EscapeCode$Modifier = {
    reset: EscapeCode$CodePair,
    bold: EscapeCode$CodePair,
    dim: EscapeCode$CodePair,
    /**
     * Not widely supported
     */
    italic: EscapeCode$CodePair,
    underline: EscapeCode$CodePair,
    inverse: EscapeCode$CodePair,
    hidden: EscapeCode$CodePair,
    /**
     * Not widely supported
     */
    strikethrough: EscapeCode$CodePair,
  };
  declare export type EscapeCode$Color = {
    black: EscapeCode$CodePair,
    red: EscapeCode$CodePair,
    green: EscapeCode$CodePair,
    yellow: EscapeCode$CodePair,
    blue: EscapeCode$CodePair,
    magenta: EscapeCode$CodePair,
    cyan: EscapeCode$CodePair,
    white: EscapeCode$CodePair,
    /**
     * bright black
     */
    gray: EscapeCode$CodePair,
    grey: EscapeCode$CodePair,

    redBright: EscapeCode$CodePair,
    greenBright: EscapeCode$CodePair,
    yellowBright: EscapeCode$CodePair,
    blueBright: EscapeCode$CodePair,
    magentaBright: EscapeCode$CodePair,
    cyanBright: EscapeCode$CodePair,
    whiteBright: EscapeCode$CodePair,
  };
  declare export type EscapeCode$BackgroundColor = {
    bgBlack: EscapeCode$CodePair,
    bgRed: EscapeCode$CodePair,
    bgGreen: EscapeCode$CodePair,
    bgYellow: EscapeCode$CodePair,
    bgBlue: EscapeCode$CodePair,
    bgMagenta: EscapeCode$CodePair,
    bgCyan: EscapeCode$CodePair,
    bgWhite: EscapeCode$CodePair,

    bgBlackBright: EscapeCode$CodePair,
    bgRedBright: EscapeCode$CodePair,
    bgGreenBright: EscapeCode$CodePair,
    bgYellowBright: EscapeCode$CodePair,
    bgBlueBright: EscapeCode$CodePair,
    bgMagentaBright: EscapeCode$CodePair,
    bgCyanBright: EscapeCode$CodePair,
    bgWhiteBright: EscapeCode$CodePair,
  };

  declare export type EscapeCode$Conversions = {
    ansi: (ansi: number) => string,
    rgb: (r: number, g: number, b: number) => string,
    hsl: (h: number, s: number, l: number) => string,
    hsv: (h: number, s: number, v: number) => string,
    hwb: (h: number, w: number, b: number) => string,
    cmyk: (c: number, m: number, y: number, k: number) => string,
    xyz: (x: number, y: number, z: number) => string,
    lab: (l: number, a: number, b: number) => string,
    lch: (l: number, c: number, h: number) => string,
    hex: (hex: string) => string,
    /**
     * color keyword in css to ansi code
     */
    keyword: (keyword: $Keys<cssKeywords>) => string,
    ansi256: (ansi256: number) => string,
    hcg: (h: number, c: number, g: number) => string,
    /**
     * apple RGB to ansi code
     */
    apple: (r: number, g: number, b: number) => string,
    gray: (grayscale: number) => string,
  };
  declare export type EscapeCode$ColorType = {
    /**
     * 16 color ansi code
     */
    ansi: EscapeCode$Conversions,
    /**
     * 256 color ansi code
     */
    ansi256: EscapeCode$Conversions,
    /**
     * truecolor(16 million color) ansi code
     */
    ansi16m: EscapeCode$Conversions,
  };

  declare export var reset: EscapeCode$CodePair;
  declare export var bold: EscapeCode$CodePair;
  declare export var dim: EscapeCode$CodePair;
  /**
   * Not widely supported
   */
  declare export var italic: EscapeCode$CodePair;
  declare export var underline: EscapeCode$CodePair;
  declare export var inverse: EscapeCode$CodePair;
  declare export var hidden: EscapeCode$CodePair;
  /**
   * Not widely supported
   */
  declare export var strikethrough: EscapeCode$CodePair;

  declare export var black: EscapeCode$CodePair;
  declare export var red: EscapeCode$CodePair;
  declare export var green: EscapeCode$CodePair;
  declare export var yellow: EscapeCode$CodePair;
  declare export var blue: EscapeCode$CodePair;
  declare export var magenta: EscapeCode$CodePair;
  declare export var cyan: EscapeCode$CodePair;
  declare export var white: EscapeCode$CodePair;
  /**
   * bright black
   */
  declare export var gray: EscapeCode$CodePair;
  declare export var grey: EscapeCode$CodePair;

  declare export var redBright: EscapeCode$CodePair;
  declare export var greenBright: EscapeCode$CodePair;
  declare export var yellowBright: EscapeCode$CodePair;
  declare export var blueBright: EscapeCode$CodePair;
  declare export var magentaBright: EscapeCode$CodePair;
  declare export var cyanBright: EscapeCode$CodePair;
  declare export var whiteBright: EscapeCode$CodePair;

  declare export var bgBlack: EscapeCode$CodePair;
  declare export var bgRed: EscapeCode$CodePair;
  declare export var bgGreen: EscapeCode$CodePair;
  declare export var bgYellow: EscapeCode$CodePair;
  declare export var bgBlue: EscapeCode$CodePair;
  declare export var bgMagenta: EscapeCode$CodePair;
  declare export var bgCyan: EscapeCode$CodePair;
  declare export var bgWhite: EscapeCode$CodePair;

  declare export var bgBlackBright: EscapeCode$CodePair;
  declare export var bgRedBright: EscapeCode$CodePair;
  declare export var bgGreenBright: EscapeCode$CodePair;
  declare export var bgYellowBright: EscapeCode$CodePair;
  declare export var bgBlueBright: EscapeCode$CodePair;
  declare export var bgMagentaBright: EscapeCode$CodePair;
  declare export var bgCyanBright: EscapeCode$CodePair;
  declare export var bgWhiteBright: EscapeCode$CodePair;

  /**
   * Raw escape codes (i.e. without the CSI escape prefix \u001B[ and render mode postfix m) are available.
   *
   * This is a Map with the open codes as keys and close codes as values.
   */
  declare export var codes: Map<number, number>;
  declare export var modifier: EscapeCode$Modifier;
  declare export var color: EscapeCode$Color &
    EscapeCode$ColorType & { close: string };
  declare export var bgColor: EscapeCode$BackgroundColor &
    EscapeCode$ColorType & { close: string };
}
