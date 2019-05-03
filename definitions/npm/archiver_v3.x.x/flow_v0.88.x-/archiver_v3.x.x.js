declare module "archiver" {
  import type { Stats } from "fs";

  declare export type Format = "zip" | "tar";

  declare export type EntryData = {
    name?: string,
    prefix?: string,
    stats?: Stats,
    date?: Date | string,
    mode?: number
  };

  declare export type EntryDataFunction = (entry: EntryData) => false | EntryData;

  declare export type CoreOptions = {|
    statConcurrency?: number
  |};

  declare export type TransformOptions = {|
    allowHalfOpen?: boolean,
    readableObjectMode?: boolean,
    writeableObjectMode?: boolean,
    decodeStrings?: boolean,
    encoding?: string,
    highWaterMark?: number,
    objectmode?: boolean
  |};

  declare export type ZipOptions = {|
    comment?: string,
    forceLocalTime?: boolean,
    forceZip64?: boolean,
    store?: boolean,
    zlib?: zlib$options
  |};

  declare export type TarOptions = {|
    gzip?: boolean,
    gzipOptions?: zlib$options
  |};

  declare export type GlobOptions = {|
    cwd?: string,
    root?: string,
    dot?: boolean,
    nomount?: boolean,
    mark?: boolean,
    nosort?: boolean,
    stat?: boolean,
    silent?: boolean,
    strict?: boolean,
    cache?: boolean,
    statCache?: { [string]: Stats },
    symlinks?: { [string]: boolean },
    sync?: boolean,
    nounique?: boolean,
    nonull?: boolean,
    debug?: boolean,
    nobrace?: boolean,
    noglobstar?: boolean,
    noext?: boolean,
    nocase?: boolean,
    matchBase?: boolean,
    nodir?: boolean,
    ignore?: string | Array<string>,
    follow?: boolean,
    realpath?: boolean,
    nonegate?: boolean,
    nocomment?: boolean,
    absolute?: boolean
  |};

  declare export type ArchiverOptions = {|
    ...CoreOptions,
    ...TransformOptions,
    ...ZipOptions,
    ...TarOptions
  |};

  declare class Archiver extends stream$Transform {
    abort(): this;
    append(source: stream$Readable | Buffer | string, name?: EntryData): this;
    directory(
      dirpath: string,
      destpath: false | string,
      data?: EntryData | EntryDataFunction
    ): this;
    file(filename: string, data: EntryData): this;
    glob(pattern: string, options?: GlobOptions, data?: EntryData): this;
    finalize(): Promise<void>;
    setFormat(format: string): this;
    setModule(module: (...a: any) => mixed): this;
    pointer(): number;
    use(plugin: (...a: any) => mixed): this;
    symlink(filepath: string, target: string): this;
  }

  declare export type Vending = {
    (format: Format, options?: ArchiverOptions): Archiver,
    create(format: string, options?: ArchiverOptions): Archiver,
    registerFormat(format: string, module: (...a: any) => mixed): void
  };

  declare module.exports: Vending;
}
