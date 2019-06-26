declare module 'react-onclickoutside' {
  declare export var IGNORE_CLASS_NAME: 'ignore-react-onclickoutside';

  declare export default function onClickOutsideHOC<Props: {}>(
    WrappedComponent: React$ComponentType<Props>,
    config?: { excludeScrollbar?: boolean }):
      React$ComponentType<$Diff<Props, {
        disableOnClickOutside?: () => void,
        enableOnClickOutside?: () => void,
        eventTypes?: Array<string>,
        excludeScrollbar?: boolean,
        outsideClickIgnoreClass?: string,
        preventDefault?: boolean,
        stopPropagation?: boolean,
      }>>;
}
