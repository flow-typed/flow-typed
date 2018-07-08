/* eslint-disable no-unused-vars, no-redeclare */

declare module 'metalsmith' {

  import type { Stats } from 'fs';

  // This is a simplified union of a yieldable object accepted by "co" library.
  // Note: I'm not sure if it's correct.
  declare type Yieldable = Promise<any>
                         | Function
                         | Array<Yieldable>
                         | {[string]: Yieldable}
                         | Generator<any, any, any>;

  declare type Callback<Result> = (err: ?Error, result: ?Result) => void;

  declare type DoneCallback = (err?: Error) => void;

  declare type Contents = string | Buffer | Uint8Array;

  declare type File = {
    contents: Contents,
    mode: string,
    stats: Stats,
    [string]: any,
  };

  declare type FilesMap = {[string]: File};

  declare type Plugin = (files: FilesMap, metalsmith: Metalsmith, done: DoneCallback) => void;

  declare class Metalsmith {
    static [[call]](directory: string): Metalsmith;

    constructor(directory: string): this;

    use(plugin: Plugin | Array<Plugin>): this;

    directory(directory: string): this;
    directory(): string;

    metadata(metadata: Object): this;
    metadata(): Object;

    source(path: string): this;
    source(): string;

    destination(path: string): this;
    destination(): string;

    concurrency(max: number): this;
    concurrency(): number;

    clean(clean: boolean): this;
    clean(): boolean;

    frontmatter(frontmatter: boolean): this;
    frontmatter(): boolean;

    ignore(files: string | Array<string>): this;
    ignore(): Array<string>;

    path(...paths: Array<string>): string;

    build(cb: Callback<FilesMap>): void;
    build(): Generator<Yieldable, FilesMap, FilesMap>;

    process(cb: Callback<FilesMap>): void;
    process(): Generator<Yieldable, FilesMap, FilesMap>;

    run(files: FilesMap, plugins: Array<Plugin>, cb: Callback<FilesMap>): void;
    run(files: FilesMap, plugins: Array<Plugin>): FilesMap;

    read(dir?: string, cb: Callback<FilesMap>): void;
    read(dir?: string): Generator<Yieldable, FilesMap, FilesMap>;

    readFile(file: string, cb: Callback<File>): void;
    readFile(file: string): Generator<Yieldable, File, void>;

    write(files: FilesMap, dir?: string, cb: Callback<void>): void;
    write(files: FilesMap, dir?: string): Generator<Yieldable, void, void>;

    writeFile(file: string, data: File, cb: Callback<void>): void;
    writeFile(file: string, data: File): Generator<Yieldable, void, void>;
  }

  declare module.exports: typeof Metalsmith;
}
