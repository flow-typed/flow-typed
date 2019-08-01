declare module 'react-onclickoutside' {
  declare export var IGNORE_CLASS_NAME: 'ignore-react-onclickoutside';

  declare export default function onClickOutsideHOC<Props: {...}, Instance>(
    WrappedComponent: React$AbstractComponent<Props, Instance>,
    config?: { excludeScrollbar?: boolean, ... }):
      React$AbstractComponent<$Diff<Props, {
        disableOnClickOutside?: () => void,
        enableOnClickOutside?: () => void,
        eventTypes?: Array<string>,
        excludeScrollbar?: boolean,
        outsideClickIgnoreClass?: string,
        preventDefault?: boolean,
        stopPropagation?: boolean,
        ...
      }>,
      { +getInstance: () => Instance, ... }>;
}
