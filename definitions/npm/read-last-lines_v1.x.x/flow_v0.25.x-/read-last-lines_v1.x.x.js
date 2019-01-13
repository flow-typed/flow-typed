// @flow
declare module 'read-last-lines' {
    declare module.exports: {
        read(input_file_path: string, maxLineCount: number, encoding: ?string): Promise<string, Error>
    };
}