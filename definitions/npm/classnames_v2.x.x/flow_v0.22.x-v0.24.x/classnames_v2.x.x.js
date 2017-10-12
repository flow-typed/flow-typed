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
