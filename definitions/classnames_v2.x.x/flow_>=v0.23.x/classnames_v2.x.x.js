declare module 'classnames' {
  declare class Classnames {
    (...classes: Array<string | { [class: string]: bool }>): string
  }
  declare var exports: Classnames;
}
