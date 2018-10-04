declare module "smoothscroll" {
  declare type Target = number | Element;

  declare type smoothScroll = (
    target: Target,
    duration?: ?number,
    callback?: ?(Target => any),
    context?: ?Element
  ) => void;

  declare export default smoothScroll;
}
