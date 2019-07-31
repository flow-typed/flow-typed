declare module "multimatch" {
  declare type Options = {|
    debug?: boolean,
    dot?: boolean,
    flipNegate?: boolean,
    matchBase?: boolean,
    nobrace?: boolean,
    nocase?: boolean,
    nocommnet?: boolean,
    noext?: boolean,
    noglobstar?: boolean,
    nonegate?: boolean,
    nonull?: boolean
  |};

  declare function multimatch(
    paths: string | string[],
    patterns: string | string[],
    options?: Options
  ): string[];

  declare module.exports: typeof multimatch;
}
