declare class $npm$shelljs$Array<T> extends Array<T> mixins $npm$shelljs$Result, String {}
declare type  $npm$shelljs$Async = Class<child_process$ChildProcess>;
declare type  $npm$shelljs$Pattern = RegExp | String | string;
declare class $npm$shelljs$String mixins $npm$shelljs$Result, String {
  constructor(stdout: string | string[], stderr?: string, code?: number): this;
}

declare interface $npm$shelljs$Config {
  fatal: boolean;
  globOpts: {
    nodir: boolean;
  };
  silent: boolean;
  verbose: boolean;
}
declare interface $npm$shelljs$Env {
  [key: string]: string;
};

declare type $npm$shelljs$OptionsPoly<Flags: string> = {
  [keys: Flags]: boolean;
};
declare interface $npm$shelljs$ExecThen {
  (code: number, stdout: string, stderr: string): void;
};
declare type $npm$shelljs$ExecOptionsPoly<T: Object> = T & { async?: boolean; silent?: boolean };
declare type $npm$shelljs$ExecOpts = $npm$shelljs$ExecOptionsPoly<child_process$execOpts>;
declare type $npm$shelljs$ExecOptsSync = $npm$shelljs$ExecOptionsPoly<child_process$execSyncOpts>;
declare type $npm$shelljs$GrepOpts = $npm$shelljs$OptionsPoly<'-l' | '-v'>;
declare type $npm$shelljs$SedOpts = $npm$shelljs$OptionsPoly<'-i'>;
declare type $npm$shelljs$SortOpts = $npm$shelljs$OptionsPoly<'-n' | '-r'>;
declare type $npm$shelljs$TestOpts = '-b' | '-c' | '-d' | '-e' | '-f' | '-L' | '-p' | '-S';
declare type $npm$shelljs$TouchOpts = {
  [key: '-a' | '-c' | '-m']: boolean;
  '-d'?: string;
  '-r'?: string;
};

// dupe from flow lib until we can import
declare interface $npm$shelljs$FileStats {
  atime: Date;
  blksize: number;
  blocks: number;
  ctime: Date;
  dev: number;
  gid: number;
  ino: number;
  mode: number;
  mtime: Date;
  nlink: number;
  rdev: number;
  size: number;
  uid: number;
  isBlockDevice(): boolean;
  isCharacterDevice(): boolean;
  isDirectory(): boolean;
  isFIFO(): boolean;
  isFile(): boolean;
  isSocket(): boolean;
  isSymbolicLink(): boolean;
}

declare class $npm$shelljs$Result {
  code: number;
  stdout: string;
  stderr: string;
  to(file: string): this;
  toEnd(file: string): this;
  cat:
    ((rest: void) => $npm$shelljs$String);
  exec:
    ((cmd: string, opts: $npm$shelljs$ExecOpts & { async: true }, then: $npm$shelljs$ExecThen, rest: void) => $npm$shelljs$Async) &
    ((cmd: string, opts: $npm$shelljs$ExecOpts & { async: true }, rest: void) => $npm$shelljs$Async) &
    ((cmd: string, opts: $npm$shelljs$ExecOptsSync, rest: void) => $npm$shelljs$String) &
    ((cmd: string, rest: void) => $npm$shelljs$String) &
    ((cmd: string, then: $npm$shelljs$ExecThen, rest: void) => $npm$shelljs$Async);
  grep:
    ((opts: $npm$shelljs$GrepOpts, rx: $npm$shelljs$Pattern, rest: void) => $npm$shelljs$String) &
    ((rx: $npm$shelljs$Pattern, rest: void) => $npm$shelljs$String);
  head:
    ((num: number, rest: void) => $npm$shelljs$String) &
    ((rest: void) => $npm$shelljs$String);
  sed:
    ((rx: $npm$shelljs$Pattern, subst: string, rest: void) => $npm$shelljs$String);
  sort:
    ((opts: $npm$shelljs$SortOpts, rest: void) => $npm$shelljs$String) &
    ((rest: void) => $npm$shelljs$String);
  tail:
    ((num: number, rest: void) => $npm$shelljs$String) &
    ((rest: void) => $npm$shelljs$String);
}

declare module 'shelljs' {
  declare export type ShellAsync = $npm$shelljs$Async;
  declare export type ShellOptionsPoly<Flags: string> = $npm$shelljs$OptionsPoly<Flags>;
  declare export type ShellConfig = $npm$shelljs$Config;
  declare export type ShellEnv = $npm$shelljs$Env;
  declare export type ShellFileStats = $npm$shelljs$FileStats;
  declare export type ShellPattern = $npm$shelljs$Pattern;

  declare export type ChmodOpts = $npm$shelljs$OptionsPoly<'-R' | '-c' | '-v'>;
  declare export type CpOpts = $npm$shelljs$OptionsPoly<'-P' | '-L' | '-R' | '-f' | '-n'>;
  declare export type DirsOpts = '-c';
  declare export type DirsIdx = // FIXME
    | '-0' | '-1' | '-2' | '-3' | '-4' | '-5' | '-6' | '-7' | '-8' | '-9' | '-10' | '-11' | '-12' | '-13' | '-14' | '-15' | '-16' | '-17' | '-18' | '-19' | '-20' | '-21' | '-22' | '-23' | '-24' | '-25' | '-26' | '-27' | '-28' | '-29' | '-30' | '-31'
    | '+0' | '+1' | '+2' | '+3' | '+4' | '+5' | '+6' | '+7' | '+8' | '+9' | '+10' | '+11' | '+12' | '+13' | '+14' | '+15' | '+16' | '+17' | '+18' | '+19' | '+20' | '+21' | '+22' | '+23' | '+24' | '+25' | '+26' | '+27' | '+28' | '+29' | '+30' | '+31';
  declare export type ExecOpts = $npm$shelljs$ExecOpts;
  declare export type ExecOptsSync = $npm$shelljs$ExecOptsSync;
  declare export type ExecThen = $npm$shelljs$ExecThen;
  declare export type GrepOpts = $npm$shelljs$GrepOpts;
  declare export type LnOpts = $npm$shelljs$OptionsPoly<'-f' | '-s'>;
  declare export type LsOpts = $npm$shelljs$OptionsPoly<'-A' | '-R' | '-d' | '-l'>;
  declare export type MkdirOpts = $npm$shelljs$OptionsPoly<'-p'>;
  declare export type MvOpts = $npm$shelljs$OptionsPoly<'-f' | '-n'>;
  declare export type PopdOpts = $npm$shelljs$OptionsPoly<'-n'>;
  declare export type PushdOpts = $npm$shelljs$OptionsPoly<'-n'>;
  declare export type RmOpts = $npm$shelljs$OptionsPoly<'-f' | '-r'>;
  declare export type SedOpts = $npm$shelljs$SedOpts;
  declare export type SortOpts = $npm$shelljs$SortOpts;

  declare var ShellArray: Class<$npm$shelljs$Array<*>>;
  declare var ShellString: Class<$npm$shelljs$String>;

  declare module.exports: {
    ShellArray: Class<ShellArray>;
    ShellString: Class<ShellString>;
    config: ShellConfig;
    env: ShellEnv;
    cat:
      ((glob: string, ...rest: string[]) => ShellString);
    cd:
      ((dir: string, rest: void) => ShellString) &
      ((rest: void) => ShellString);
    chmod:
      ((opts: ChmodOpts, mode: number | string, glob: string, ...rest: string[]) => ShellString) &
      ((mode: number | string, glob: string, ...rest: string[]) => ShellString);
    cp:
      ((opts: CpOpts, src: string, next: string, ...rest: string[]) => ShellString) &
      ((src: string, next: string, ...rest: string[]) => ShellString);
    dirs:
      ((idxOrOpts: DirsIdx | DirsOpts, rest: void) => string[]) &
      ((rest: void) => string[]);
    echo: // FIXME: consider allowing more input types
      ((...rest: (number | string | String)[]) => ShellString);
    error:
      ((rest: void) => ?string);
    exec:
      ((cmd: string, opts: $npm$shelljs$ExecOpts & { async: true }, then: $npm$shelljs$ExecThen, rest: void) => ShellAsync) &
      ((cmd: string, opts: $npm$shelljs$ExecOpts & { async: true }, rest: void) => ShellAsync) &
      ((cmd: string, opts: $npm$shelljs$ExecOptsSync, rest: void) => ShellString) &
      ((cmd: string, rest: void) => ShellString) &
      ((cmd: string, then: $npm$shelljs$ExecThen, rest: void) => ShellAsync);
    exit:
      ((code: number, rest: void) => void) &
      ((rest: void) => void);
    find:
      ((glob: string, ...rest: string[]) => ShellArray);
    grep:
      ((opts: $npm$shelljs$GrepOpts, rx: ShellPattern, glob: string, ...rest: string[]) => ShellString) &
      ((rx: ShellPattern, glob: string, ...rest: string[]) => ShellString);
    head:
      ((num: number, glob: string, ...rest: string[]) => ShellString) &
      ((glob: string, ...rest: string[]) => ShellString);
    ln:
      ((opts: LnOpts, src: string, tgt: string, rest: void) => ShellString) &
      ((src: string, tgt: string, rest: void) => ShellString);
    ls:
      ((opts: LsOpts & { '-l': true }, glob: string, ...rest: string[]) => $npm$shelljs$FileStats) &
      ((opts: LsOpts, glob: string, ...rest: string[]) => ShellArray) &
      ((glob: string, ...rest: string[]) => ShellArray);
    mkdir:
      ((opts: MkdirOpts, dir: string, ...rest: string[]) => ShellString) &
      ((dir: string, ...rest: string[]) => ShellString);
    mv:
      ((opts: MvOpts, src: string, next: string, ...rest: string[]) => ShellString) &
      ((src: string, next: string, ...rest: string[]) => ShellString);
    popd:
      ((opts: PopdOpts, idx: string, rest: void) => string[]) &
      ((opts: PopdOpts, rest: void) => string[]) &
      ((idx: string, rest: void) => string[]) &
      ((rest: void) => string[]);
    pushd:
      ((opts: PushdOpts, dirOrIdx: string, rest: void) => string[]) &
      ((dirOrIdx: string, rest: void) => string[]);
    pwd:
      ((rest: void) => ShellString);
    rm:
      ((opts: RmOpts, glob: string, ...rest: string[]) => ShellString) &
      ((glob: string, ...rest: string[]) => ShellString);
    sed:
      ((opts: $npm$shelljs$SedOpts, rx: ShellPattern, subst: string, glob: string, ...rest: string[]) => ShellString) &
      ((rx: ShellPattern, subst: string, glob: string, ...rest: string[]) => ShellString);
    set:
      ((exitOnError: '-e' | '+e', rest: void) => void) &
      ((verbose: '-v' | '+v', rest: void) => void) &
      ((disableGlobbing: '-f' | '+f', rest: void) => void);
    sort:
      ((opts: $npm$shelljs$SortOpts, glob: string, ...rest: string[]) => ShellString) &
      ((glob: string, ...rest: string[]) => ShellString);
    tail:
      ((num: number, glob: string, ...rest: string[]) => ShellString) &
      ((glob: string, ...rest: string[]) => ShellString);
    tempdir:
      ((rest: void) => string);
    test:
      ((mode: $npm$shelljs$TestOpts, path: string, rest: void) => boolean);
    touch:
      ((opts: $npm$shelljs$TouchOpts, glob: string, ...rest: string[]) => ShellString) &
      ((glob: string, ...rest: string[]) => ShellString);
    which:
      ((cmd: string, rest: void) => ShellString);
  };
}
