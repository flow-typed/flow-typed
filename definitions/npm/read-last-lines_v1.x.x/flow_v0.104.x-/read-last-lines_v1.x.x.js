// @flow
declare module 'read-last-lines' {
    declare module.exports: { read(inputFilePath: string, maxLineCount: number, encoding?: string): Promise<string>, ... };
}
