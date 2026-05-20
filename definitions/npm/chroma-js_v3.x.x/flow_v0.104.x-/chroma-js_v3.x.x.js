// Type definitions for chroma-js 3.x
// Project: https://github.com/gka/chroma.js
// Definitions by: Henrik <https://github.com/henrikhelmers>
// Based on prior work by Sebastian Brückner and Marcin Pacholec
// Definitions: https://github.com/flow-typed/flow-typed

/**
 * Chroma.js is a small-ish zero-dependency library for color conversions and scales.
 *
 * v3 breaking changes from v2:
 * - Default interpolation mode changed from 'rgb' to 'lrgb' in mix/average
 * - color.css() outputs modern CSS syntax: rgb(255 165 0) instead of rgb(255, 165, 0)
 * - Invalid color input now throws Error instead of failing silently
 * - scale()(null) returns the nodata fallback color instead of scale(0)
 * - HCG input range changed to [0..360, 0..1, 0..1]
 */
declare module 'chroma-js' {
  /**
   * Standard CIE illuminant white reference points for Lab/Lch conversions.
   */
  declare type WhitePoint = 'D50' | 'D55' | 'D65' | 'A' | 'B' | 'C' | 'E' | 'F2' | 'F7' | 'F11';

  /**
   * Color spaces supported for color creation and channel output.
   */
  declare type ColorSpace =
    | 'rgb' | 'rgba'
    | 'hsl' | 'hsv' | 'hsi'
    | 'lab' | 'lch' | 'hcl'
    | 'oklab' | 'oklch'
    | 'cmyk' | 'gl';

  /**
   * Interpolation modes for color mixing and scale gradients.
   * Includes all ColorSpaces plus 'lrgb' (linear RGB).
   */
  declare type InterpolationMode = ColorSpace | 'lrgb';

  /**
   * CSS color space identifiers accepted by color.css().
   */
  declare type CSSColorSpace = 'rgb' | 'hsl' | 'lab' | 'lch' | 'oklab' | 'oklch';

  /**
   * Blend modes for chroma.blend().
   */
  declare type BlendMode = 'multiply' | 'darken' | 'lighten' | 'screen' | 'overlay' | 'burn' | 'dodge';

  /**
   * Object representations for color construction.
   *
   * Note: OKLab ({l, a, b}) and Lab share the same key names.
   * Chroma.js disambiguates based on value ranges at runtime.
   * There is no separate object form for OKLch; use chroma.oklch() or
   * the positional constructor chroma(l, c, h, 'oklch') instead.
   */
  declare type ObjectInput =
    | {| r: number, g: number, b: number, a?: number |}
    | {| h: number, s: number, l: number |}
    | {| h: number, s: number, v: number |}
    | {| h: number, s: number, i: number |}
    | {| l: number, a: number, b: number |}
    | {| l: number, c: number, h: number |}
    | {| h: number, c: number, l: number |}
    | {| c: number, m: number, y: number, k: number |}
    | {| g: number, l: number |};

  /**
   * Any value that can be interpreted as a color input.
   */
  declare type ChromaInput = string | number | Color | [number, number, number] | [number, number, number, number] | ObjectInput;

  // ---------------------------------------------------------------------------
  // Default export: the chroma constructor with all static methods
  // ---------------------------------------------------------------------------

  declare export default class ChromaStatic {
    /**
     * Creates a color from a string representation (as supported in CSS),
     * or from a numeric representation [0; 16777215].
     */
    static (color: string | number): Color;

    /**
     * Create a color in the specified color space using channel values.
     */
    static (a: number, b: number, c: number, colorSpace?: ColorSpace): Color;
    static (a: number, b: number, c: number, d: number, colorSpace?: ColorSpace): Color;

    /**
     * Create a color in the specified color space using an array of values.
     */
    static (values: [number, number, number], colorSpace?: ColorSpace): Color;
    static (values: [number, number, number, number], colorSpace?: ColorSpace): Color;

    /**
     * Create a color from an object representation (e.g. {h: 120, s: 1, l: 0.75}).
     */
    static (color: ObjectInput): Color;

    // -- Color space constructors -----------------------------------------------

    static rgb(r: number, g: number, b: number, a?: number): Color;
    static hsl(h: number, s: number, l: number, a?: number): Color;
    static hsv(h: number, s: number, v: number, a?: number): Color;
    static lab(lightness: number, a: number, b: number, alpha?: number): Color;
    static lch(l: number, c: number, h: number, alpha?: number): Color;
    static hcl(h: number, c: number, l: number, alpha?: number): Color;
    static oklab(lightness: number, a: number, b: number, alpha?: number): Color;
    static oklch(lightness: number, chromaticity: number, hue: number, alpha?: number): Color;
    static cmyk(c: number, m: number, y: number, k: number): Color;
    static gl(red: number, green: number, blue: number, alpha?: number): Color;

    /**
     * Create a color from a hex or CSS string representation.
     * This is an alias of chroma.css().
     */
    static hex(color: string): Color;
    static css: typeof ChromaStatic.hex;

    /**
     * Returns a color from the color temperature scale.
     * Candle light ~2000K, bright sunlight ~6000K.
     * Based on Neil Bartlett's implementation.
     */
    static temperature(t: number): Color;

    // -- Validation -------------------------------------------------------------

    static valid(color: string | number | ObjectInput): boolean;
    static valid(a: number, b: number, c: number, colorSpace?: ColorSpace): boolean;
    static valid(a: number, b: number, c: number, d: number, colorSpace?: ColorSpace): boolean;
    static valid(values: [number, number, number], colorSpace?: ColorSpace): boolean;
    static valid(values: [number, number, number, number], colorSpace?: ColorSpace): boolean;

    // -- Color operations -------------------------------------------------------

    /**
     * Mixes two colors. The mix ratio is a value between 0 and 1.
     * Default mode is 'lrgb' (changed from 'rgb' in v3).
     */
    static mix(color1: ChromaInput, color2: ChromaInput, ratio?: number, mode?: InterpolationMode): Color;

    /** Alias of {@link mix}. */
    static interpolate: typeof ChromaStatic.mix;

    /**
     * Averages multiple colors. Default mode is 'lrgb' (changed from 'rgb' in v3).
     * Optional weights array for weighted averaging.
     */
    static average(colors: $ReadOnlyArray<ChromaInput>, mode?: InterpolationMode, weights?: $ReadOnlyArray<number>): Color;

    /**
     * Blends two colors using RGB channel-wise blend functions.
     */
    static blend(color1: ChromaInput, color2: ChromaInput, blendMode: BlendMode): Color;

    /**
     * Returns a random color.
     * Optionally accepts a custom random number generator (must return 0..1).
     */
    static random(rng?: () => number): Color;

    // -- Comparison / analysis --------------------------------------------------

    /**
     * Computes the WCAG contrast ratio between two colors.
     * A minimum of 4.5:1 is recommended for text readability.
     */
    static contrast(color1: ChromaInput, color2: ChromaInput): number;

    /**
     * Computes the APCA (Accessible Perceptual Contrast Algorithm) contrast
     * between a text color and a background color.
     * Returns a value typically between -108 and 106.
     * Note: the APCA algorithm is still in beta and may change.
     * @since 3.1
     */
    static contrastAPCA(text: ChromaInput, background: ChromaInput): number;

    /**
     * Computes the Euclidean distance between two colors in a given color space.
     * Default color space is 'lab'.
     */
    static distance(color1: ChromaInput, color2: ChromaInput, colorSpace?: ColorSpace): number;

    /**
     * Computes color difference (CIE2000 Delta E).
     * Results range from 0 (identical) to ~100 (maximum difference).
     * Optional weighting factors Kl, Kc, Kh for lightness, chroma, and hue.
     */
    static deltaE(color1: string | Color, color2: string | Color, Kl?: number, Kc?: number, Kh?: number): number;

    // -- Lab white point --------------------------------------------------------

    /**
     * Sets the Lab white reference point used for Lab/Lch color conversions.
     * Default is 'D65'.
     * @since 3.0
     */
    static setLabWhitePoint(whitePoint: WhitePoint): void;

    /**
     * Returns the currently active Lab white reference point.
     * @since 3.0
     */
    static getLabWhitePoint(): WhitePoint;

    // -- Scales and utilities ---------------------------------------------------

    /**
     * chroma.brewer is a map of ColorBrewer scales included for convenience.
     */
    static brewer: {|
      OrRd: string[],
      PuBu: string[],
      BuPu: string[],
      Oranges: string[],
      BuGn: string[],
      YlOrBr: string[],
      YlGn: string[],
      Reds: string[],
      RdPu: string[],
      Greens: string[],
      YlGnBu: string[],
      Purples: string[],
      GnBu: string[],
      Greys: string[],
      YlOrRd: string[],
      PuRd: string[],
      Blues: string[],
      PuBuGn: string[],
      Viridis: string[],
      Spectral: string[],
      RdYlGn: string[],
      RdBu: string[],
      PiYG: string[],
      PRGn: string[],
      RdYlBu: string[],
      BrBG: string[],
      RdGy: string[],
      PuOr: string[],
      Set2: string[],
      Accent: string[],
      Set1: string[],
      Set3: string[],
      Dark2: string[],
      Paired: string[],
      Pastel2: string[],
      Pastel1: string[],
    |};

    /**
     * Computes class breaks for data.
     * Modes: 'e' (equidistant), 'q' (quantile), 'l' (logarithmic), 'k' (k-means).
     */
    static limits(data: $ReadOnlyArray<number>, mode: 'e' | 'q' | 'l' | 'k', n: number): number[];

    /**
     * Returns a function that bezier-interpolates between colors in Lab space.
     * Input range is [0..1]. Convert to a chroma.scale via .scale().
     */
    static bezier(colors: $ReadOnlyArray<string | Color>): {| (t: number): Color, scale(): Scale<Color> |};

    /**
     * Creates a color scale from a named ColorBrewer palette or a single color.
     */
    static scale(name: string | Color): Scale<Color>;

    /**
     * Creates a color scale from an array of colors.
     */
    static scale(colors?: $ReadOnlyArray<string | Color>): Scale<Color>;

    /**
     * Creates a Dave Green cubehelix color scheme.
     */
    static cubehelix(): Cubehelix;
  }

  // ---------------------------------------------------------------------------
  // Named exports (available since v3.0 via ES module imports)
  // ---------------------------------------------------------------------------

  declare export var scale: typeof ChromaStatic.scale;
  declare export var mix: typeof ChromaStatic.mix;
  declare export var interpolate: typeof ChromaStatic.mix;
  declare export var average: typeof ChromaStatic.average;
  declare export var blend: typeof ChromaStatic.blend;
  declare export var random: typeof ChromaStatic.random;
  declare export var contrast: typeof ChromaStatic.contrast;
  declare export var contrastAPCA: typeof ChromaStatic.contrastAPCA;
  declare export var distance: typeof ChromaStatic.distance;
  declare export var deltaE: typeof ChromaStatic.deltaE;
  declare export var limits: typeof ChromaStatic.limits;
  declare export var bezier: typeof ChromaStatic.bezier;
  declare export var cubehelix: typeof ChromaStatic.cubehelix;
  declare export var valid: typeof ChromaStatic.valid;
  declare export var temperature: typeof ChromaStatic.temperature;
  declare export var setLabWhitePoint: typeof ChromaStatic.setLabWhitePoint;
  declare export var getLabWhitePoint: typeof ChromaStatic.getLabWhitePoint;
  declare export var brewer: typeof ChromaStatic.brewer;
  declare export var hsl: typeof ChromaStatic.hsl;
  declare export var hsv: typeof ChromaStatic.hsv;
  declare export var lab: typeof ChromaStatic.lab;
  declare export var lch: typeof ChromaStatic.lch;
  declare export var hcl: typeof ChromaStatic.hcl;
  declare export var oklab: typeof ChromaStatic.oklab;
  declare export var oklch: typeof ChromaStatic.oklch;
  declare export var cmyk: typeof ChromaStatic.cmyk;
  declare export var rgb: typeof ChromaStatic.rgb;
  declare export var gl: typeof ChromaStatic.gl;

  // ---------------------------------------------------------------------------
  // Color class
  // ---------------------------------------------------------------------------

  declare export class Color {
    /**
     * Get the color opacity (no argument) or return a new color with the
     * given opacity (0..1).
     */
    alpha(a: number): Color;
    alpha(): number;

    /** Decreases the lightness of the color. Amount defaults to 1. */
    darken(f?: number): Color;

    /** Increases the lightness of the color. Amount defaults to 1. */
    brighten(f?: number): Color;

    /** Increases saturation by manipulating Lch chroma. Amount defaults to 1. */
    saturate(s?: number): Color;

    /** Decreases saturation by manipulating Lch chroma. Amount defaults to 1. */
    desaturate(s?: number): Color;

    /**
     * Mix this color with a target color.
     * Same as chroma.mix but with the first parameter already set.
     */
    mix(targetColor: ChromaInput, ratio?: number, mode?: InterpolationMode): Color;

    /** Alias of {@link mix}. */
    interpolate(targetColor: ChromaInput, ratio?: number, mode?: InterpolationMode): Color;

    /**
     * Produce a shade of the color (mix with black).
     * @since 3.1
     */
    shade(ratio?: number, mode?: InterpolationMode): Color;

    /**
     * Produce a tint of the color (mix with white).
     * @since 3.1
     */
    tint(ratio?: number, mode?: InterpolationMode): Color;

    /**
     * Changes a single channel and returns a new color.
     * Supports relative changes with '*' prefix, e.g. '*0.5'.
     * @example chroma('orangered').set('lab.l', '*0.5')
     * @example chroma('darkseagreen').set('lch.c', '*2')
     */
    set(modechan: string, v: number | string): Color;

    /**
     * Returns a single channel value.
     * @example chroma('orangered').get('lab.l')
     */
    get(modechan: string): number;

    /**
     * Get relative brightness (WCAG). Normalized 0 (black) to 1 (white).
     */
    luminance(): number;

    /**
     * Set luminance by interpolating with black or white.
     */
    luminance(l: number, mode?: InterpolationMode): Color;

    /**
     * Get color as hexadecimal string.
     *
     * @param mode 'auto' includes alpha only if < 1 (default).
     *             'rgb' never includes alpha.
     *             'rgba' always includes alpha.
     *             'argb' includes alpha as first byte.
     */
    hex(mode?: 'auto' | 'rgb' | 'rgba' | 'argb'): string;

    /**
     * Returns the named color. Falls back to hex string if not a named color.
     */
    name(): string;

    /**
     * Returns a CSS color string. Mode defaults to 'rgb'.
     * In v3, output uses modern CSS syntax without commas,
     * e.g. rgb(255 165 0) instead of rgb(255, 165, 0).
     *
     * Supports modern CSS color spaces: lab(), lch(), oklab(), oklch().
     */
    css(mode?: CSSColorSpace): string;

    // -- Channel output ---------------------------------------------------------

    /**
     * Returns [r, g, b] with values 0..255. Pass false to get unrounded floats.
     */
    rgb: (round?: boolean) => [number, number, number];

    /**
     * Like rgb() but includes alpha channel: [r, g, b, a].
     */
    rgba: (round?: boolean) => [number, number, number, number];

    /**
     * Returns [hue, saturation, lightness].
     * Hue: 0..360, saturation/lightness: 0..1.
     * Hue is NaN for achromatic colors.
     */
    hsl: () => [number, number, number];

    /**
     * Returns [hue, saturation, value].
     * Hue: 0..360, saturation/value: 0..1.
     */
    hsv: () => [number, number, number];

    /**
     * Returns [hue, saturation, intensity].
     */
    hsi: () => [number, number, number];

    /**
     * Returns [L, a, b] in CIE Lab color space.
     */
    lab: () => [number, number, number];

    /**
     * Returns [Lightness, chroma, hue] in CIE Lch color space.
     */
    lch: () => [number, number, number];

    /**
     * Alias of lch() with components reordered: [hue, chroma, lightness].
     */
    hcl: () => [number, number, number];

    /**
     * Returns [L, a, b] in OKLab color space.
     * @since 3.0
     */
    oklab: () => [number, number, number];

    /**
     * Returns [Lightness, chroma, hue] in OKLch color space.
     * @since 3.0
     */
    oklch: () => [number, number, number];

    /**
     * Returns [cyan, magenta, yellow, key] normalized 0..1.
     */
    cmyk: () => [number, number, number, number];

    /**
     * Returns the numeric representation of the hex RGB color (0..16777215).
     */
    num(): number;

    /**
     * Estimate the temperature in Kelvin.
     */
    temperature(): number;

    /**
     * Like RGB, but channels normalized to 0..1: [r, g, b, a].
     */
    gl(): [number, number, number, number];

    /**
     * Returns true if the color was clipped when converting to RGB.
     */
    clipped(): boolean;
  }

  // ---------------------------------------------------------------------------
  // Scale
  // ---------------------------------------------------------------------------

  declare export class Scale<+T = Color> {
    /** Evaluate the scale at a given position (0..1 by default). */
    (value: number): T;

    /** Passing null/undefined returns the nodata color. */
    (value: null | void): T;

    /**
     * Get the current domain as an array.
     */
    domain(): number[];

    /**
     * Set the numeric input domain for the scale.
     */
    domain(d: number[], n?: number, mode?: string): this;

    /**
     * Set the interpolation color space.
     */
    mode(mode: InterpolationMode): this;

    /**
     * Gamma correction factor. Default is 1.
     */
    gamma(g: number): this;

    /**
     * Enable or disable result caching.
     */
    cache(use: boolean): boolean;

    /**
     * Ensure lightness is spread evenly across the scale.
     */
    correctLightness(enable?: boolean): this;

    /**
     * Symmetrically cut off the scale range. Accepts a single number
     * or a [left, right] tuple for asymmetric padding.
     */
    padding(p: number | [number, number]): this;

    /**
     * Grab n equi-distant colors from the scale.
     * Without arguments, returns the original color array.
     */
    colors(c?: number, format?: null): Color[];
    colors(c: number, format: 'hex' | 'name'): string[];
    colors(c: number, format: 'num'): number[];
    colors<K: 'rgb' | 'hsl' | 'hsv' | 'hsi' | 'lab' | 'lch' | 'hcl' | 'oklab' | 'oklch'>(c: number, format: K): Array<[number, number, number]>;
    colors<K: 'rgba' | 'cmyk' | 'gl'>(c: number, format: K): Array<[number, number, number, number]>;

    /**
     * Return a discrete set of colors instead of a continuous gradient.
     * Pass a number for equi-distant classes, or an array for custom breaks.
     */
    classes(c: number | number[]): this;

    /**
     * Set the fallback ("no data") color, returned when scale receives
     * null or NaN. Default is #cccccc.
     */
    nodata(color: string | number): this;

    /**
     * Set the output format for scale evaluation.
     * Passing null returns Color objects.
     */
    out(format: null): Scale<Color>;
    out(format: 'hex'): Scale<string>;
    out(format: 'num'): Scale<number>;
    out<K: 'rgb' | 'hsl' | 'hsv' | 'hsi' | 'lab' | 'lch' | 'hcl' | 'oklab' | 'oklch'>(format: K): Scale<[number, number, number]>;
    out<K: 'rgba' | 'cmyk' | 'gl'>(format: K): Scale<[number, number, number, number]>;
  }

  // ---------------------------------------------------------------------------
  // Cubehelix
  // ---------------------------------------------------------------------------

  declare export class Cubehelix {
    /** Set start color for hue rotation. Default: 300. */
    start(s: number): this;

    /** Number (and direction) of hue rotations. Default: -1.5. */
    rotations(r: number): this;

    /** Set hue as a single number or [min, max] range. */
    hue(numOrRange: number | [number, number]): this;

    /** Gamma factor to emphasise low or high intensity. Default: 1. */
    gamma(g: number): this;

    /** Lightness range as [min, max]. Default: [0, 1]. */
    lightness(l: [number, number]): this;

    /** Convert to a chroma.scale instance. */
    scale(): Scale<Color>;
  }
}
