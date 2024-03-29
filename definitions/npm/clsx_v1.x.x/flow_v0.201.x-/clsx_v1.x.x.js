declare module 'clsx' {
  declare type Classes = 
    | Array<Classes>
    | { [className: string]: any, ... }
    | string
    | number
    | boolean
    | void
    | null;

  declare module.exports: (...classes: Array<Classes>) => string;
}
