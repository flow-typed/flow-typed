declare module 'react-onclickoutside' {
  declare export type OnClickOutsideProps = {
    eventTypes?: Array<string>,
    outsideClickIgnoreClass?: string,
    preventDefault?: boolean,
    stopPropagation?: boolean
  };

  declare module.exports: <P, S>(
    BaseComponent: Class<React$Component<P, S>>,
    config?: { excludeScrollbar?: boolean }
  ) => React$ComponentType<P & OnClickOutsideProps & {
    excludeScrollbar?: boolean,
    disableOnClickOutside?: boolean
  }>;
}
