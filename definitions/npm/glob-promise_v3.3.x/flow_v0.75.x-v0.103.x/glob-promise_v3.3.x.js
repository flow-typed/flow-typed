import { Stats } from "fs";

declare module "glob-promise" {
  declare module.exports: {
    [[call]]: globPromise$GlobPromised,
    promise: globPromise$GlobPromised,
    glob: globPromise$Glob,
    sync: globPromise$Sync,
    hasMagic: globPromise$hasMagic,
    Glob: Class<globPromise$GlobClass>
  };
}

declare interface globPromise$hasMagic {
  (globPromise$Pattern, ?globPromise$Options): boolean;
}

declare interface globPromise$Sync {
  (globPromise$Pattern, ?globPromise$Options): string[];
}

declare interface globPromise$GlobPromised {
  (globPromise$Pattern, ?globPromise$Options): Promise<string[]>;
}

declare type globPromise$GlobCallback = (
  string[]
) => void | ((Error, string[]) => void);

declare interface globPromise$Glob {
  (globPromise$Pattern, globPromise$Options, globPromise$GlobCallback): void;

  (globPromise$Pattern, globPromise$GlobCallback): void;
}

declare interface globPromise$Cache {
  [string]: boolean | "FILE" | "DIR" | string[];
}

declare interface globPromise$StatCache {
  [string]: Stats;
}

declare type globPromise$Pattern = string;

declare type globPromise$Options = {|
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
  statCache?: globPromise$StatCache,
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
  ignore?: string | string[],
  follow?: boolean,
  realpath?: boolean,
  nonegate?: boolean,
  nocomment?: boolean,
  absolute?: boolean
|};

declare class globPromise$GlobClass extends events$EventEmitter {
  constructor(globPromise$Pattern): this;
  constructor(
    globPromise$Pattern,
    globPromise$Options | globPromise$GlobCallback
  ): this;
  constructor(
    globPromise$Pattern,
    globPromise$Options,
    globPromise$GlobCallback
  ): this;
}
