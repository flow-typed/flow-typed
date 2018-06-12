declare interface PapaParse$Static {

    // Parses a csv string or a csv file
    parse(csv: string | File, config?: PapaParse$ParseConfig): PapaParse$ParseResult,

    // Writes out correct delimited text strings given a JSON data object
    unparse(data: Array<Object> | Array<Array<any>> | PapaParse$UnparseObject,
        config?: PapaParse$UnparseConfig): string,

    // Read-Only Properties
    BAD_DELIMETERS: Array<string>,
    RECORD_SEP: string,
    UNIT_SEP: string,
    WORKERS_SUPPORTED: boolean,
    SCRIPT_PATH: string,

    // Configurable Properties
    LocalChunkSize: string,
    RemoteChunkSize: string,
    DefaultDelimiter: string,
}

declare interface PapaParse$ParseConfig {
    delimiter?: string,
    newline?: string,
    quoteChar?: string,
    header?: boolean,
    dynamicTyping?: boolean,
    preview?: number,
    encoding?: string,
    worker?: boolean,
    comments?: boolean,
    download?: boolean,
    skipEmptyLines?: boolean,
    fastMode?: boolean,
    withCredentials?: boolean,
    step?: Function,
    complete?: Function,
    error?: Function,
    chunk?: Function,
    beforeFirstChunk?: Function,
}

declare interface PapaParse$UnparseConfig {
    quotes: boolean,
    quoteChar: string,
    delimiter: string,
    header: boolean,
    newline: string
}

declare interface PapaParse$UnparseObject {
    fields: Array<any>,
    +data: string | Array<any>
}

declare interface PapaParse$ParseError {
    type: string,
    code: string,
    message: string,
    row: number
}

declare interface PapaParse$ParseMeta {
    delimiter: string,
    linebreak: string,
    aborted: boolean,
    fields: Array<string>,
    truncated: boolean
}

declare interface PapaParse$ParseResult {
    data: Array<any>,
    errors: Array<PapaParse$ParseError>,
    meta: PapaParse$ParseMeta
}

declare var Papa: PapaParse$Static;

declare module 'papaparse' {
    declare module.exports: typeof Papa
}
