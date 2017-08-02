type $npm$classnames$Classes =
  | string
  | { [className: string]: * }
  | Array<string>
  | false
  | void
  | null;

declare module 'classnames' {
  declare function exports(...classes: Array<$npm$classnames$Classes>): string;
}

declare module 'classnames/bind' {
  declare module.exports: $Exports<'classnames'>;
}
