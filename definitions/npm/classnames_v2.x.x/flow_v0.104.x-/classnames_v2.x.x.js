type $npm$classnames$Classes =
  | string
  | number
  | { [className: string]: *, ... }
  | boolean
  | void
  | null
  | $ReadOnlyArray<$npm$classnames$Classes>;

declare module "classnames" {
  declare module.exports: (...classes: Array<$npm$classnames$Classes>) => string;
}

declare module "classnames/bind" {
  declare module.exports: $Exports<"classnames">;
}

declare module "classnames/dedupe" {
  declare module.exports: $Exports<"classnames">;
}
