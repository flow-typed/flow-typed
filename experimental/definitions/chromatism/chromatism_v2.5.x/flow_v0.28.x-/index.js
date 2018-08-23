declare module 'chromatism' {
  /**
   * Hexadecimal Color String
   * @example
   * "#FFC837"
   */
  declare export type HEXColourMode = string;

  /**
   * RGB Color Object
   * @example
   * { r:255, g: 200, b: 55 }
   */
  declare export type RGBColourMode = { r: number, g: number, b: number };

  /**
   * CSS RGB Color String
   * @example
   * "rgb(255,200,55)"
   */
  declare export type CSSRGBColourMode = string;

  /**
   * HSL Color Object
   * @example
   * { h: 44, s: 100, l: 61 }
   */
  declare export type HSLColourMode = { h: number, s: number, l: number };

  /**
   * CSS HSL Color String
   * @example
   * "hsl(44,100,61)"
   */
  declare export type CSSHSLColourMode = { h: number, s: number, l: number };

  /**
   * HSV Color Object
   * @example
   * { h: 44, s: 78, v: 100 }
   */
  declare export type HSVColourMode = { h: number, s: number, v: number };

  /**
   * CMYK Color Object
   * @example
   * { c: 0.5, m: 1, y: 0.2, k: 0.45 }
   */
  declare export type CMYKColourMode = { c: number, m: number, y: number, k: number };

  /**
   * YIQ Color Object
   * @example
   * { y: 0.132, i: 0.0222, q: 0.195 }
   */
  declare export type YIQColourMode = { y: number, i: number, q: number };

  /**
   * XYZ Color Object
   * @example
   * { X: 41.24, Y: 21.26, Z: 1.93 }
   */
  declare export type XYZColourMode = { X: number, Y: number, Z: number };

  /**
   * xyY Color Object
   * @example
   * { x: 0.64, y: 0.33, Y: 21.26 }
   */
  declare export type XYYColourMode = { x: number, y: number, Y: number };

  /**
   * LMS Color Object
   * @example
   * { rho: 42.266, gamma: 5.561, beta: 2.135 }
   */
  declare export type LMSColourMode = { rho: number, gamma: number, beta: number };

  /**
   * CIELAB (L*a*b*) Color Object
   * @example
   * { L: 53.23, a: 80.11, b: 67.22 }
   */
  declare export type CIELABColourMode = { L: number, a: number, b: number };


  /**
   * CIELUV (L*u*v*) Color Object
   * @example
   * { L: 53.23, u: 175.05, v: 37.75 }
   */
  declare export type CIELUVColourMode = { L: number, u: number, v: number };

  /**
   * CIELCH (L*C*h*) Color Object
   * @example
   * { L: 53.23, C: 179.08, h: 12.17 }
   */
  declare export type CIELCHColourMode = { L: number, C: number, h: number };

  /**
   * HSLuv Color Object
   * @example
   * { L: 53.23, C: 179.08, h: 12.17 }
   */
  declare export type HSLUVColourMode = { hu: number, s: number, l: number };

  /**
   * Represents all available color modes.
   */
  declare export type ColourMode =
    | HEXColourMode
    | RGBColourMode
    | CSSRGBColourMode
    | HSLColourMode
    | CSSHSLColourMode
    | HSVColourMode
    | CMYKColourMode
    | YIQColourMode
    | XYZColourMode
    | XYYColourMode
    | LMSColourMode
    | CIELABColourMode
    | CIELUVColourMode
    | CIELCHColourMode
    | HSLUVColourMode;

  /**
   * All functions return an object containing all modes of the result.
   */
  declare export type ColourObject = {
    hex: HEXColourMode,
    rgb: RGBColourMode,
    cssrgb: CSSRGBColourMode,
    hsl: HSLColourMode,
    csshsl: CSSHSLColourMode,
    hsv: HSVColourMode,
    cmyk: CMYKColourMode,
    yiq: YIQColourMode,
    XYZ: XYZColourMode,
    xyY: XYYColourMode,
    lms: LMSColourMode,
    cielab: CIELABColourMode,
    cieluv: CIELUVColourMode,
    cielch: CIELCHColourMode,
    hsluv: HSLUVColourMode,
  };

  /**
   * Helper type for functions that return multiple colour values.
   */
  declare export type ColourObjectArray = {
    hex: Array<HEXColourMode>,
    rgb: Array<RGBColourMode>,
    cssrgb: Array<CSSRGBColourMode>,
    hsl: Array<HSLColourMode>,
    csshsl: Array<CSSHSLColourMode>,
    hsv: Array<HSVColourMode>,
    cmyk: Array<CMYKColourMode>,
    yiq: Array<YIQColourMode>,
    XYZ: Array<XYZColourMode>,
    xyY: Array<XYYColourMode>,
    lms: Array<LMSColourMode>,
    cielab: Array<CIELABColourMode>,
    cieluv: Array<CIELUVColourMode>,
    cielch: Array<CIELCHColourMode>,
    hsluv: Array<HSLUVColourMode>,
  };

  /**
   * Properties representing standard CIE illuminants constants
   */
  declare export var ILLUMINANTS: {
    A: XYZColourMode,
    B: XYZColourMode,
    C: XYZColourMode,
    D50: XYZColourMode,
    D55: XYZColourMode,
    D65: XYZColourMode,
    D75: XYZColourMode,
    E: XYZColourMode,
    F2: XYZColourMode,
    F7: XYZColourMode,
    F11: XYZColourMode,
  };

  /**
   * Properties representing useful transform matricies
   */
  declare export var TRANSFORMS: {
    BRADFORD: Array<number>,
    INVERSE_BRADFORD: Array<number>,
    SRGB_XYZ: Array<number>,
    INVERSE_SRGB_XYZ: Array<number>,
  };

  /**
   * Performs colour transformations.
   * @param colour - Any supported colour mode.
   * @returns A colour object containing all available transforms.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#currency_exchange-colour-transformations}
   */
  declare export function convert(colour: ColourMode): ColourObject;

  /**
   * Generate a complementary colour
   * @param colour - Any supported colour mode.
   * @returns The complementary colour.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-a-complementary-colour}
   */
  declare export function complementary(colour: ColourMode): ColourObject;


  /**
   * Generate an array of triad colours
   * @param colour - Any supported colour mode.
   * @returns Array of 3 colour objects.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-an-array-of-triad-colours}
   */
  declare export function triad(colour: ColourMode): ColourObjectArray;

  /**
   * Generate an array of tetrad colours
   * @param colour - Any supported colour mode.
   * @returns Array of 4 colour objects.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-an-array-of-tetrad-colours}
   */
  declare export function tetrad(colour: ColourMode): ColourObjectArray;

  /**
   * Generate a complementary colour with uniform lightness.
   * @param colour - Any supported colour mode.
   * @returns The complementary colour.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-a-complementary-colour}
   */
  declare export function uniformComplementary(colour: ColourMode): ColourObject;

  /**
   * Generate an array of triad colours with uniform lightness.
   * @param colour - Any supported colour mode.
   * @returns Array of 3 colour objects.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-an-array-of-triad-colours}
   */
  declare export function uniformTriad(colour: ColourMode): ColourObjectArray;

  /**
   * Generate an array of tetrad colours with uniform lightness.
   * @param colour - Any supported colour mode.
   * @returns Array of 4 colour objects.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-an-array-of-tetrad-colours}
   */
  declare export function uniformTetrad(colour: ColourMode): ColourObjectArray;

  /**
   * Find the mid point between two colours
   * [See more]{@link https://github.com/toish/chromatism/blob/master/README.md#find-the-mid-point-between-two-colours}
   * @param colourOne - Any supported colour mode.
   * @param colourTwo - Any supported colour mode.
   * @returns The mid point colour.
   */
  declare export function mid(colourOne: ColourMode, colourTwo: ColourMode): ColourObject;

  /**
   * Invert a colour
   * @param colour - Any supported colour mode.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#invert-a-colour}
   * @returns The inverted colour.
   */
  declare export function invert(colour: ColourMode): ColourObject;

  /**
   * Invert a grey colour
   * @param colour - Any supported colour mode.
   * @returns The inverted colour.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#invert-a-grey-colour}
   */
  declare export function invertLightness(colour: ColourMode): ColourObject;

  /**
   * Blend two colours (Multiply)
   * @param colourOne - Any supported colour mode.
   * @param colourTwo - Any supported colour mode.
   * @returns The blended colour.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#blend-two-colours-multiply}
   */
  declare export function multiply(colourOne: ColourMode, colourTwo: ColourMode): ColourObject;

  /**
   * Generate an array of adjacent hue-shifted colours (rainbow effect)
   * @param degrees - The range of hue to include (in degrees, positive or negative)
   * @param sections - How many adjacent colours to return.
   * @param colour - Any supported colour mode.
   * @returns An array of adjacent huge-shifted colours.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-an-array-of-adjacent-hue-shifted-colours-rainbow-effect}
   */
  declare export function adjacent(degrees: number, sections: number, colour: ColourMode): ColourObjectArray;

  /**
   * Generate an array of the fade between two colours
   * @param amount - The number of fade colours to return.
   * @param colourFrom - Any supported colour mode.
   * @param colourTo - Any supported colour mode.
   * @returns An array containing the colour fade.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-an-array-of-the-fade-between-two-colours}
   */
  declare export function fade(amount: number, colourFrom: ColourMode, colourTo: ColourMode): ColourObjectArray;

  /**
   * Generate a new shade of a colour
   * @param percent - A number between -100 and 100
   * @param colour - Any supported colour mode.
   * @returns The colour shade
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-a-new-shade-of-a-colour}
   */
  declare export function shade(percent: number, colour: ColourMode): ColourObject;

  /**
   * Generate a new saturation of a colour
   * @param percent - A number between -100 and 100
   * @param colour - Any supported colour mode.
   * @returns The new saturation of colour.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#generate-a-new-saturation-of-a-colour}
   */
  declare export function saturation(percent: number, colour: ColourMode): ColourObject;

  /**
   * Change colour's brightness
   * @param percent - A number between -100 and 100
   * @param colour - Any supported colour mode.
   * @returns The new colour.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#change-colours-brightness}
   */
  declare export function brightness(percent: number, colour: ColourMode): ColourObject;

  /**
   * Shift the hue of a colour
   * @param degrees - The degree of hue to shift by (in degrees, positive or negative)
   * @param colour - Any supported colour mode.
   * @returns The new colour.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#shift-the-hue-of-a-colour}
   */
  declare export function hue(degrees: number, colour: ColourMode): ColourObject;

  /**
   * Shift the contrast of a colour
   * @param contrastCoeff - A decimal value, normally between 0 and 4
   * @param colour - Any supported colour mode.
   * @returns The shifted contrast colour.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#shift-the-contrast-of-a-colour}
   */
  declare export function contrast(contrastCoeff: number, colour: ColourMode): ColourObject;

  /**
   * Greyscale version of the colour
   * @param colour - Any supported colour mode.
   * @returns The greyscale colour
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#greyscale-version-of-the-colour}
   */
  declare export function greyscale(colour: ColourMode): ColourObject;

  /**
   * Sepia version of the colour
   * @param colour - Any supported colour mode.
   * @returns The sepia version of the colour
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#sepia-version-of-the-colour}
   */
  declare export function sepia(colour: ColourMode): ColourObject;

  /**
   * Determine accessible colour for foreground text
   * @param colour - Any supported colour mode.
   * @returns The accessible foreground colour
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#determine-accessible-colour-for-foreground-text}
   */
  declare export function contrastRatio(colour: ColourMode): ColourObject;

  /**
   * Chromatic Adaptation (White point)
   * @param colour - Any supported colour mode.
   * @param illuminantColour - A value from the {@ILLUMINANTS} constant
   * @param sourceIlluminant [{ColourModes.XYZ}] - optional, assumed D65
   * @returns The illuminant shifted colour
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#chromatic-adaptation-white-point}
   */
  declare export function adapt(colour: ColourMode, illuminantColour: ColourMode, sourceIlluminant?: ColourMode): ColourObject;

  /**
   * Colour Difference
   * @param colourOne - Any supported colour mode.
   * @param colourTwo - Any supported colour mode.
   * @param luminanceWeight [1] - optional
   * @param chromaWeight [1] - optional
   * @returns A measure of how different the two supplied colours are.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#colour-difference}
   */
  declare export function difference(colourOne: ColourMode, colourTwo: ColourMode, luminanceWeight?: number, chromaWeight?: number): number;

  /**
   * Colour Temperature
   * @param colour - Any supported colour mode.
   * @returns The correlated colour temperature of the supplied colour.
   * @see {@link https://github.com/toish/chromatism/blob/master/README.md#colour-temperature}
   */
  declare export function temperature(colour: ColourMode): number;
}
