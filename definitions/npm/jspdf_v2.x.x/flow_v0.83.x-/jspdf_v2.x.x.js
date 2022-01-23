declare module 'jspdf' {
  declare class Matrix {
    constructor(
      sx: number,
      shy: number,
      shx: number,
      sy: number,
      tx: number,
      ty: number,
    ): Matrix;

    sx: number;
    shy: number;
    shx: number;
    sy: number;
    tx: number;
    ty: number;
  }

  declare export class jsPDF {
    constructor(options?: {|
      orientation?: string,
      unit?: string,
      format?: Array<number>,
    |}): this;
    text(
      /**
       * String or array of strings to be added to the page. Each line is shifted one line down per font, spacing settings declared before this call.
       */
      text: string | Array<string>,
      /**
       * Coordinate (in units declared at inception of PDF document) against left edge of the page.
       */
      x: number,
      /**
       * Coordinate (in units declared at inception of PDF document) against upper edge of the page.
       */
      y: number,
      /**
       * Collection of settings signaling how the text must be encoded.
       */
      options?: {|
        /**
         * The alignment of the text, possible values: left, center, right, justify.
         */
        align?: string,
        /**
         * Sets text baseline used when drawing the text, possible values: alphabetic, ideographic, bottom, top, middle, hanging
         */
        baseline?: string,
        /**
         * Rotate the text clockwise or counterclockwise. Expects the angle in degree.
         */
        angle?: number | Matrix,
        /**
         * Direction of the rotation. 0 = clockwise, 1 = counterclockwise.
         */
        rotationDirection?: number,
        /**
         * The space between each letter.
         */
        charSpace?: number,
        /**
         * The lineheight of each line.
         */
        lineHeightFactor?: number,
        /**
         * Flags for to8bitStream.
         */
        flags?: {|
          /**
           * Don't add BOM to Unicode-text.
           */
          noBOM?: boolean,
          /**
           * Autoencode the Text.
           */
          autoencode?: boolean,
        |},
        /**
         * Split the text by given width, 0 = no split.
         */
        maxWidth?: number,
        /**
         * Set how the text should be rendered, possible values: fill, stroke, fillThenStroke, invisible, fillAndAddForClipping, strokeAndAddPathForClipping, fillThenStrokeAndAddToPathForClipping, addToPathForClipping.
         */
        renderingMode?: string,
        /**
         * Option for the BidiEngine
         */
        isInputVisual?: boolean,
        /**
         * Option for the BidiEngine
         */
        isOutputVisual?: boolean,
        /**
         * Option for the BidiEngine
         */
        isInputRtl?: boolean,
        /**
         * Option for the BidiEngine
         */
        isOutputRtl?: boolean,
        /**
         * Option for the BidiEngine
         */
        isSymmetricSwapping?: boolean,
      |},
      /**
       * If transform is a number the text will be rotated by this value around the anchor set by x and y.
       *
       * If it is a Matrix, this matrix gets directly applied to the text, which allows shearing effects etc.; the x and y offsets are then applied AFTER the coordinate system has been established by this matrix. This means passing a rotation matrix that is equivalent to some rotation angle will in general yield a DIFFERENT result. A matrix is only allowed in "advanced" API mode.
       */
      transform?: number | Matrix,
    ): void;
    save(fileName?: string): void;
    // With jspdf-autotable plugin
    autoTable(options: {|
      head: Array<Array<string>>,
      body: Array<Array<string>>,
      startY: number,
    |}): void;
    lastAutoTable: {|
      finalY: number,
    |};
    // End with jspdf-autotable plugin
  }

  declare export default typeof jsPDF;
}
