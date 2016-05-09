
type Classes = Array<string | { [class: string]: bool } | Classes>

declare module 'classnames' {
  declare function exports(
    ...classes: Classes
  ): string;
}
