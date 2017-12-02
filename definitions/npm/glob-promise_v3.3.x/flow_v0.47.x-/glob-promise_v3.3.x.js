import { Stats } from "fs";

declare module "glob-promise" {
  declare module.exports: {
    $call: globP$GlobP,
    promise: globP$GlobP,
    glob: globP$Glob,
    sync: globP$Sync,
    hasMagic: globP$hasMagic,
    Glob: Class<globP$GlobClass>
  };
}

declare interface globP$hasMagic {
  (globP$Pattern, ?globP$Options): boolean;
}

declare interface globP$Sync {
  (globP$Pattern, ?globP$Options): string[];
}

declare interface globP$GlobP {
  (globP$Pattern, ?globP$Options): Promise<string[]>;
}

declare type globP$GlobCallback = (
  string[]
) => void | ((Error, string[]) => void);

declare interface globP$Glob {
  (globP$Pattern, globP$Options, globP$GlobCallback): void;

  (globP$Pattern, globP$GlobCallback): void;
}

declare interface globP$Cache {
  [string]: boolean | "FILE" | "DIR" | string[];
}

declare interface globP$StatCache {
  [string]: Stats;
}

declare type globP$Pattern = string;

declare type globP$Options = {|
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
  statCache?: globP$StatCache,
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

declare class globP$GlobClass extends events$EventEmitter {
  constructor(globP$Pattern): this;
  constructor(globP$Pattern, globP$Options | globP$GlobCallback): this;
  constructor(globP$Pattern, globP$Options, globP$GlobCallback): this;
}
