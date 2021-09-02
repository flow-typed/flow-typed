declare module 'jspdf' {
  declare type Matrix = any;

  declare class JsPDF {
    constructor(options?: {|
      orientation?: string,
      unit?: string,
      format?: Array<number>,
    |}): this;
    text(
      text: string | Array<string>,
      x: number,
      y: number,
      options?: {|
        // need to add
      |},
      transform: number | Matrix,
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
  }

  declare module.exports: {|
    jsPDF: typeof JsPDF,
  |};
}
