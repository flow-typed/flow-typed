declare module "archiver" {
  import type { Stats } from "fs";

  declare type Format = "zip" | "tar";

  declare type EntryData = {
    name?: string,
    prefix?: string,
    stats?: Stats,
    date?: Date | string,
    mode?: number
  };

  declare type EntryDataFunction = (entry: EntryData) => false | EntryData;

  declare type CoreOptions = {|
    statConcurrency?: number
  |};

  declare type TransformOptions = {|
    allowHalfOpen?: boolean,
    readableObjectMode?: boolean,
    writeableObjectMode?: boolean,
    decodeStrings?: boolean,
    encoding?: string,
    highWaterMark?: number,
    objectmode?: boolean
  |};

  declare type ZipOptions = {|
    comment?: string,
    forceLocalTime?: boolean,
    forceZip64?: boolean,
    store?: boolean,
    zlib?: zlib$options
  |};

  declare type TarOptions = {|
    gzip?: boolean,
    gzipOptions?: zlib$options
  |};

  declare type GlobOptions = {|
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

  declare type ArchiverOptions = {|
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
    setModule(module: Function): this;
    pointer(): number;
    use(plugin: Function): this;
    symlink(filepath: string, target: string): this;
  }

  declare type Vending = {
    (format: Format, options?: ArchiverOptions): Archiver,
    create(format: string, options?: ArchiverOptions): Archiver,
    registerFormat(format: string, module: Function): void
  };

  declare export default Vending;
}
