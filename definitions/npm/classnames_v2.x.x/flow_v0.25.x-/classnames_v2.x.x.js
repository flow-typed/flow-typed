type $npm$classnames$Classes =
  | string
  | { [className: string]: * }
  | false
  | void
  | null;

declare module "classnames" {
  declare function exports(
    ...classes: Array<$npm$classnames$Classes | Array<$npm$classnames$Classes>>
  ): string;
}

declare module "classnames/bind" {
  declare module.exports: $Exports<"classnames">;
}

declare module "classnames/dedupe" {
  declare module.exports: $Exports<"classnames">;
}
