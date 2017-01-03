// @flow
/**
 * Flowtype definitions for xlsx
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'xlsx' {
    declare     export function readFile(filename: string, opts?: IParsingOptions): IWorkBook
    declare     export function read(data: any, opts?: IParsingOptions): IWorkBook
    declare     export function write(data: any, opts?: IParsingOptions): any
    declare     export var utils: IUtils;
    declare     export interface IProperties {
        LastAuthor?: string,
            Author?: string,
            CreatedDate?: Date,
            ModifiedDate?: Date,
            Application?: string,
            AppVersion?: string,
            Company?: string,
            DocSecurity?: string,
            Manager?: string,
            HyperlinksChanged?: boolean,
            SharedDoc?: boolean,
            LinksUpToDate?: boolean,
            ScaleCrop?: boolean,
            Worksheets?: number,
            SheetNames?: string[]
    }
    declare     export interface IParsingOptions {
        cellFormula?: boolean,
            cellHTML?: boolean,
            cellNF?: boolean,
            cellStyles?: boolean,
            cellDates?: boolean,
            sheetStubs?: boolean,
            sheetRows?: number,
            bookDeps?: boolean,
            bookFiles?: boolean,
            bookProps?: boolean,
            bookSheets?: boolean,
            bookVBA?: boolean,
            password?: string,
            bookType?: string,

            /**
             * Possible options: 'binary', 'base64', 'buffer', 'file'
             */
            type?: string
    }
    declare     export interface IWorkBook {

        /**
         * A dictionary of the worksheets in the workbook.
         * Use SheetNames to reference these.
         */
        Sheets: {
                [sheet: string]: IWorkSheet
            },

            /**
             * ordered list of the sheet names in the workbook
             */
            SheetNames: string[],

            /**
             * an object storing the standard properties. wb.Custprops stores custom properties.
             * Since the XLS standard properties deviate from the XLSX standard, XLS parsing stores core properties in both places.
             */
            Props: IProperties
    }

    /**
     * object representing the worksheet
     */
    declare     export interface IWorkSheet {
        [cell: string]: IWorkSheetCell
    }
    declare     export interface IWorkSheetCell {

        /**
         * The Excel Data Type of the cell.
         * b Boolean, n Number, e error, s String, d Date
         */
        t: string,

            /**
             * The raw value of the cell.
             */
            v: string,

            /**
             * rich text encoding (if applicable)
             */
            r?: string,

            /**
             * HTML rendering of the rich text (if applicable)
             */
            h?: string,

            /**
             * formatted text (if applicable)
             */
            w?: string,

            /**
             * cell formula (if applicable)
             */
            f?: string,

            /**
             * comments associated with the cell *
             */
            c?: string,

            /**
             * number format string associated with the cell (if requested)
             */
            z?: string,

            /**
             * cell hyperlink object (.Target holds link, .tooltip is tooltip)
             */
            l?: string,

            /**
             * the style/theme of the cell (if applicable)
             */
            s?: string
    }
    declare     export interface ICell {
        c: number,
            r: number
    }
    declare     export interface IUtils {
        sheet_to_json<T>(
                worksheet: IWorkSheet,
                opts?: {
                    raw?: boolean,
                    range?: any,
                    header?: "A" | number | string[]
                }): T[],
            sheet_to_csv(worksheet: IWorkSheet): any,
            sheet_to_formulae(worksheet: IWorkSheet): any,
            encode_cell(cell: ICell): any,
            encode_range(s: ICell, e: ICell): any
    }
}