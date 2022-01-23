declare module 'cli-table' {
  declare type TableOptions = {|
    chars?: {|
      top?: string,
      'top-mid'?: string,
      'top-left'?: string,
      'top-right'?: string,
      bottom?: string,
      'bottom-mid'?: string,
      'bottom-left'?: string,
      'bottom-right'?: string,
      left?: string,
      'left-mid'?: string,
      mid?: string,
      'mid-mid'?: string,
      right?: string,
      'right-mid'?: string,
      middle?: string,
    |},
    truncate?: string,
    colors?: boolean,
    colWidths?: Array<number>,
    colAligns?: Array<'left' | 'middle' | 'right'>,
    style?: {|
      'padding-left'?: number,
      'padding-right'?: number,
      head?: Array<string>,
      border?: Array<string>,
      compact?: boolean,
    |},
    head?: Array<string>,
    rows?: Array<Array<string>>,
  |};

  declare class Table extends Array<any> {
    constructor(options?: TableOptions): this;
    toString(): string;
    static version: string;
  }

  declare module.exports: typeof Table;
}
